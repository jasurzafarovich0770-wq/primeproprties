import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Suspicious patterns that might indicate attacks
const SUSPICIOUS_PATTERNS = [
  /<script[^>]*>.*?<\/script>/gi,
  /javascript:/gi,
  /on\w+\s*=/gi,
  /<iframe/gi,
  /eval\(/gi,
  /expression\(/gi,
  /vbscript:/gi,
  /\.\.\/\.\.\//g, // Path traversal
  /union.*select/gi, // SQL injection
  /drop.*table/gi,
  /insert.*into/gi,
  /delete.*from/gi,
  /update.*set/gi,
  /exec\(/gi,
  /execute\(/gi,
]

// Blocked user agents (bots, scrapers)
const BLOCKED_USER_AGENTS = [
  /bot/i,
  /crawler/i,
  /spider/i,
  /scraper/i,
  /curl/i,
  /wget/i,
  /python-requests/i,
  /go-http-client/i,
]

// Rate limiting storage (in production, use Redis)
const requestCounts = new Map<string, { count: number; resetTime: number }>()

function checkGlobalRateLimit(ip: string): boolean {
  const now = Date.now()
  const limit = requestCounts.get(ip)
  
  if (!limit || now > limit.resetTime) {
    requestCounts.set(ip, { count: 1, resetTime: now + 60000 }) // 1 minute
    return true
  }
  
  if (limit.count >= 100) { // Max 100 requests per minute globally
    return false
  }
  
  limit.count++
  return true
}

function detectSuspiciousContent(content: string): boolean {
  return SUSPICIOUS_PATTERNS.some(pattern => pattern.test(content))
}

function isBlockedUserAgent(userAgent: string): boolean {
  return BLOCKED_USER_AGENTS.some(pattern => pattern.test(userAgent))
}

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl
  const userAgent = request.headers.get('user-agent') || ''
  const ip = request.headers.get('x-forwarded-for') || 
             request.headers.get('x-real-ip') || 
             'unknown'

  // 1. Block suspicious user agents (except legitimate browsers)
  if (userAgent && isBlockedUserAgent(userAgent)) {
    // Allow legitimate browsers
    if (!userAgent.includes('Mozilla') && !userAgent.includes('Chrome') && !userAgent.includes('Safari')) {
      console.warn(`Blocked suspicious user agent: ${userAgent} from IP: ${ip}`)
      return new NextResponse('Forbidden', { status: 403 })
    }
  }

  // 2. Global rate limiting
  if (!checkGlobalRateLimit(ip)) {
    console.warn(`Rate limit exceeded for IP: ${ip}`)
    return new NextResponse('Too Many Requests', { status: 429 })
  }

  // 3. Check for suspicious patterns in URL
  const fullUrl = pathname + search
  if (detectSuspiciousContent(fullUrl)) {
    console.warn(`Suspicious URL detected: ${fullUrl} from IP: ${ip}`)
    return new NextResponse('Bad Request', { status: 400 })
  }

  // 4. Block direct access to sensitive paths
  if (pathname.startsWith('/.env') || 
      pathname.startsWith('/.git') ||
      pathname.includes('node_modules') ||
      pathname.includes('package.json') ||
      pathname.includes('.config')) {
    console.warn(`Attempted access to sensitive path: ${pathname} from IP: ${ip}`)
    return new NextResponse('Not Found', { status: 404 })
  }

  // 5. Validate HTTP methods
  const method = request.method
  if (pathname.startsWith('/api/')) {
    // Only allow POST for API routes
    if (pathname === '/api/leads' && method !== 'POST') {
      return new NextResponse('Method Not Allowed', { status: 405 })
    }
  }

  // 6. Add security headers to response
  const response = NextResponse.next()
  
  // Prevent clickjacking
  response.headers.set('X-Frame-Options', 'DENY')
  
  // Prevent MIME type sniffing
  response.headers.set('X-Content-Type-Options', 'nosniff')
  
  // Enable XSS protection
  response.headers.set('X-XSS-Protection', '1; mode=block')
  
  // Referrer policy
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  
  // Remove server header
  response.headers.delete('X-Powered-By')
  
  return response
}

// Configure which routes to run middleware on
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
