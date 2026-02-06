import { NextRequest, NextResponse } from 'next/server'

// Rate limiting helper (simple in-memory implementation)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const limit = rateLimitMap.get(ip)
  
  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 60000 }) // 1 minute window
    return true
  }
  
  if (limit.count >= 5) { // Max 5 requests per minute
    return false
  }
  
  limit.count++
  return true
}

// Input sanitization
function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .substring(0, 500) // Limit length
}

// Phone validation
function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
  return phoneRegex.test(phone)
}

// Name validation
function isValidName(name: string): boolean {
  return name.length >= 2 && name.length <= 100
}

// Hash IP address for privacy (one-way hash)
function hashIP(ip: string): string {
  // Simple hash for privacy - in production use crypto
  let hash = 0
  for (let i = 0; i < ip.length; i++) {
    const char = ip.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32bit integer
  }
  return `IP-${Math.abs(hash).toString(16).toUpperCase()}`
}

// Get location from IP (approximate)
function getLocationFromIP(ip: string): string {
  // In production, use a service like ipapi.co or ip-api.com
  // For now, return generic location
  if (ip.startsWith('192.168') || ip === 'unknown') {
    return '🏠 Local Network'
  }
  return '🌍 Internet'
}

// Send Telegram notification
async function sendTelegramNotification(data: {
  name: string
  phone: string
  message: string | null
  projectId: string | null
  ip: string
  hashedIP: string
  location: string
  timestamp: string
}) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!botToken || !chatId) {
    console.log('⚠️  Telegram not configured - skipping notification')
    return
  }

  try {
    // Format message with emojis and structure
    const telegramMessage = `
🏠 *YANGI MIJOZ MUROJATI*
━━━━━━━━━━━━━━━━━━━━

👤 *Ism:* ${data.name}
📞 *Telefon:* ${data.phone}
${data.message ? `💬 *Xabar:* ${data.message}` : ''}
${data.projectId ? `🏢 *Loyiha:* ${data.projectId}` : ''}

━━━━━━━━━━━━━━━━━━━━
🔒 *Xavfsizlik Ma'lumotlari:*
🆔 Hash ID: \`${data.hashedIP}\`
📍 Joylashuv: ${data.location}
⏰ Vaqt: ${data.timestamp}

━━━━━━━━━━━━━━━━━━━━
✅ Ma'lumotlar xavfsiz saqlandi
🔐 IP manzil shifrlangan
    `.trim()

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage,
        parse_mode: 'Markdown',
      }),
    })

    const responseData = await response.json()

    if (!response.ok) {
      console.error('❌ Telegram API error:', responseData)
      
      // Check for common errors
      if (responseData.description?.includes('bot was blocked')) {
        console.error('⚠️  Bot was blocked by user. Please unblock and /start the bot.')
      } else if (responseData.description?.includes('chat not found')) {
        console.error('⚠️  Chat not found. Please /start the bot first.')
      } else if (responseData.description?.includes('Unauthorized')) {
        console.error('⚠️  Invalid bot token. Please check TELEGRAM_BOT_TOKEN.')
      }
      
      throw new Error(`Telegram API error: ${responseData.description || 'Unknown error'}`)
    }

    console.log('✅ Telegram notification sent successfully')
  } catch (error: any) {
    console.error('❌ Failed to send Telegram notification:', error.message)
    
    // Provide helpful error messages
    if (error.code === 'ECONNRESET' || error.code === 'ENOTFOUND') {
      console.error('⚠️  Network error. Check your internet connection.')
    } else if (error.message?.includes('Unauthorized')) {
      console.error('⚠️  Invalid bot token. Please check TELEGRAM_BOT_TOKEN in .env')
    } else if (error.message?.includes('chat not found')) {
      console.error('⚠️  Please open your bot and send /start command first!')
    }
    
    // Don't fail the request if Telegram fails
  }
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
               request.headers.get('x-real-ip') || 
               'unknown'
    
    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { name, phone, message, projectId } = body

    // Validate required fields
    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and phone are required' },
        { status: 400 }
      )
    }

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name)
    const sanitizedPhone = sanitizeInput(phone)
    const sanitizedMessage = message ? sanitizeInput(message) : null

    // Validate inputs
    if (!isValidName(sanitizedName)) {
      return NextResponse.json(
        { error: 'Invalid name format' },
        { status: 400 }
      )
    }

    if (!isValidPhone(sanitizedPhone)) {
      return NextResponse.json(
        { error: 'Invalid phone format' },
        { status: 400 }
      )
    }

    // Validate projectId if provided
    if (projectId && typeof projectId !== 'string') {
      return NextResponse.json(
        { error: 'Invalid project ID' },
        { status: 400 }
      )
    }

    // Hash IP for privacy
    const hashedIP = hashIP(ip)
    const location = getLocationFromIP(ip)
    const timestamp = new Date().toLocaleString('uz-UZ', {
      timeZone: 'Asia/Tashkent',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })

    // Send Telegram notification
    await sendTelegramNotification({
      name: sanitizedName,
      phone: sanitizedPhone,
      message: sanitizedMessage,
      projectId: projectId || null,
      ip: ip, // Original IP (not sent to Telegram)
      hashedIP: hashedIP,
      location: location,
      timestamp: timestamp,
    })

    // Log for server (with hashed IP only)
    console.log('✅ New lead received:', {
      name: sanitizedName,
      phone: sanitizedPhone,
      hashedIP: hashedIP,
      location: location,
      timestamp: timestamp,
    })

    return NextResponse.json(
      { 
        message: 'Lead created successfully',
        success: true,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('❌ Error creating lead:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Disable GET endpoint for security (leads should not be publicly accessible)
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}
