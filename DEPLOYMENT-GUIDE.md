# 🚀 DEPLOYMENT GUIDE - Saytni Internetga Joylashtirish

**Sana**: 2024-02-05  
**Holat**: Production Ready ✅

---

## 📋 TEZKOR JOYLASHTIRISH (5 daqiqa)

### Vercel (Tavsiya etiladi - BEPUL)

1. **GitHub'ga yuklash**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/your-repo.git
git push -u origin main
```

2. **Vercel'ga ulash**
- [vercel.com](https://vercel.com) ga kiring
- "Import Project" tugmasini bosing
- GitHub repository'ni tanlang
- "Deploy" tugmasini bosing

3. **Environment Variables sozlash**
```
DATABASE_URL=your_database_url
TELEGRAM_BOT_TOKEN=your_bot_token (optional)
TELEGRAM_CHAT_ID=your_chat_id (optional)
```

4. **Tayyor!** 🎉
- Saytingiz 2-3 daqiqada live bo'ladi
- Avtomatik HTTPS
- Global CDN
- Har push'da avtomatik deploy

---

## 🌐 DEPLOYMENT PLATFORMALARI

### 1. Vercel (⭐ Eng yaxshi Next.js uchun)

**Afzalliklari:**
- ✅ BEPUL (hobby plan)
- ✅ Avtomatik HTTPS
- ✅ Global CDN
- ✅ Serverless functions
- ✅ Avtomatik scaling
- ✅ Zero configuration

**Qadamlar:**
```bash
# 1. Vercel CLI o'rnatish
npm i -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel

# 4. Production deploy
vercel --prod
```

**Custom Domain:**
```bash
vercel domains add yourdomain.com
```

---

### 2. Netlify

**Afzalliklari:**
- ✅ BEPUL
- ✅ Oson sozlash
- ✅ Form handling
- ✅ Serverless functions

**Qadamlar:**
1. [netlify.com](https://netlify.com) ga kiring
2. "New site from Git" tugmasini bosing
3. Repository tanlang
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Deploy tugmasini bosing

---

### 3. Railway

**Afzalliklari:**
- ✅ Database bilan birga
- ✅ Oson sozlash
- ✅ PostgreSQL included

**Qadamlar:**
```bash
# 1. Railway CLI o'rnatish
npm i -g @railway/cli

# 2. Login
railway login

# 3. Initialize
railway init

# 4. Deploy
railway up
```

---

### 4. DigitalOcean App Platform

**Afzalliklari:**
- ✅ Full control
- ✅ Database options
- ✅ Scaling options

**Narx:** $5/month dan boshlanadi

---

## 🗄️ DATABASE SOZLASH

### Option 1: Vercel Postgres (Tavsiya)

```bash
# 1. Vercel dashboard'da Postgres qo'shish
# 2. Environment variables avtomatik qo'shiladi
# 3. Database migration
npx prisma db push
npx prisma db seed
```

### Option 2: Supabase (BEPUL)

1. [supabase.com](https://supabase.com) ga kiring
2. New project yarating
3. Connection string oling
4. `.env` ga qo'shing:
```env
DATABASE_URL="postgresql://user:pass@host:5432/db"
```

### Option 3: Railway Postgres

```bash
# Railway'da avtomatik Postgres qo'shish
railway add postgresql

# Connection string avtomatik qo'shiladi
```

### Option 4: Neon (BEPUL Serverless Postgres)

1. [neon.tech](https://neon.tech) ga kiring
2. New project yarating
3. Connection string oling
4. Vercel'ga qo'shing

---

## ⚙️ ENVIRONMENT VARIABLES

### Production Environment Variables

```env
# Database
DATABASE_URL="postgresql://user:pass@host:5432/db"

# Site URL
NEXT_PUBLIC_SITE_URL="https://yourdomain.com"

# Node Environment
NODE_ENV="production"

# Telegram (Optional)
TELEGRAM_BOT_TOKEN="your_bot_token"
TELEGRAM_CHAT_ID="your_chat_id"
```

### Vercel'da sozlash:
1. Project Settings → Environment Variables
2. Har bir variable qo'shing
3. Production, Preview, Development uchun tanlang
4. Save tugmasini bosing

---

## 🔒 SSL/HTTPS SOZLASH

### Vercel (Avtomatik)
- ✅ Avtomatik HTTPS
- ✅ Let's Encrypt certificate
- ✅ Hech narsa qilish kerak emas

### Custom Domain
```bash
# 1. Domain provider'da DNS sozlash
A Record: @ → 76.76.21.21
CNAME: www → cname.vercel-dns.com

# 2. Vercel'da domain qo'shish
vercel domains add yourdomain.com

# 3. SSL avtomatik o'rnatiladi (2-5 daqiqa)
```

---

## 📊 MONITORING SOZLASH

### 1. Vercel Analytics (BEPUL)

```bash
# package.json ga qo'shish
npm install @vercel/analytics

# app/layout.tsx ga qo'shish
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### 2. Sentry (Error Tracking)

```bash
# O'rnatish
npm install @sentry/nextjs

# Sozlash
npx @sentry/wizard@latest -i nextjs

# .env ga qo'shish
SENTRY_DSN="your_sentry_dsn"
```

### 3. Google Analytics

```typescript
// app/layout.tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
```

---

## 🚀 DEPLOYMENT CHECKLIST

### Pre-Deployment

```bash
✅ npm run build                 # Build test
✅ npm run lint                  # Lint check
✅ npm audit                     # Security check
✅ node scripts/security-test.js # Security tests
✅ Test locally (npm run start)  # Production test
```

### Environment Setup

```bash
✅ DATABASE_URL configured
✅ NEXT_PUBLIC_SITE_URL set
✅ NODE_ENV=production
✅ All secrets in environment variables
✅ .env not in git (.gitignore)
```

### Database Setup

```bash
✅ Database created
✅ Prisma schema pushed (npx prisma db push)
✅ Database seeded (npx prisma db seed)
✅ Connection tested
✅ Backup configured
```

### Security

```bash
✅ HTTPS enabled
✅ Security headers configured
✅ Rate limiting active
✅ CORS configured
✅ Environment variables secured
```

### Performance

```bash
✅ Images optimized
✅ Code minified
✅ Caching configured
✅ CDN enabled
✅ Lazy loading implemented
```

---

## 🔄 CI/CD SOZLASH

### GitHub Actions (Avtomatik Deploy)

`.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

---

## 📱 CUSTOM DOMAIN SOZLASH

### 1. Domain sotib olish
- Namecheap.com
- GoDaddy.com
- Cloudflare.com (tavsiya)

### 2. DNS sozlash

**Vercel uchun:**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Cloudflare uchun:**
```
Type: A
Name: @
Value: Your_Server_IP
Proxy: Enabled (Orange cloud)
```

### 3. Vercel'da domain qo'shish
```bash
vercel domains add yourdomain.com
vercel domains add www.yourdomain.com
```

### 4. SSL kutish (2-5 daqiqa)
- Avtomatik Let's Encrypt certificate
- HTTPS avtomatik yoqiladi

---

## 🔧 TROUBLESHOOTING

### Build Error

```bash
# Cache tozalash
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### Database Connection Error

```bash
# Connection string tekshirish
echo $DATABASE_URL

# Prisma regenerate
npx prisma generate
npx prisma db push
```

### Environment Variables Not Working

```bash
# Vercel'da qayta deploy
vercel --prod

# Local test
npm run build
npm run start
```

---

## 📈 POST-DEPLOYMENT

### 1. Testing

```bash
✅ Homepage test
✅ Projects page test
✅ Project detail test
✅ Contact form test
✅ Language switcher test
✅ Mobile responsive test
✅ Performance test (PageSpeed Insights)
✅ Security test (SSL Labs)
```

### 2. SEO Setup

```bash
✅ Google Search Console
✅ Google Analytics
✅ Sitemap.xml
✅ Robots.txt
✅ Meta tags
✅ OpenGraph tags
```

### 3. Monitoring

```bash
✅ Uptime monitoring (UptimeRobot)
✅ Error tracking (Sentry)
✅ Analytics (Google Analytics)
✅ Performance (Vercel Analytics)
```

---

## 💰 NARXLAR

### BEPUL Options

| Platform | Database | Bandwidth | Custom Domain |
|----------|----------|-----------|---------------|
| Vercel | ❌ | 100GB | ✅ |
| Netlify | ❌ | 100GB | ✅ |
| Railway | ✅ | 100GB | ✅ |
| Supabase | ✅ | 2GB | ✅ |

### Paid Options

| Platform | Narx | Database | Features |
|----------|------|----------|----------|
| Vercel Pro | $20/mo | Extra | Team features |
| Railway | $5/mo | ✅ | Full control |
| DigitalOcean | $5/mo | Extra | VPS access |

---

## 🎯 TAVSIYA ETILGAN STACK

**Eng yaxshi va BEPUL:**

```
Frontend: Vercel (BEPUL)
Database: Supabase (BEPUL)
Monitoring: Vercel Analytics (BEPUL)
Error Tracking: Sentry (BEPUL tier)
Domain: Namecheap ($10/year)
```

**Jami narx: ~$10/year (faqat domain)**

---

## 📞 QADAMLAR (Tezkor)

### 5 Daqiqada Deploy

```bash
# 1. GitHub'ga push
git init
git add .
git commit -m "Initial commit"
git push

# 2. Vercel'ga ulash
vercel login
vercel

# 3. Database sozlash (Supabase)
# - supabase.com da project yarating
# - Connection string oling
# - Vercel'ga qo'shing

# 4. Database migration
npx prisma db push
npx prisma db seed

# 5. Production deploy
vercel --prod

# TAYYOR! 🎉
```

---

## ✅ XULOSA

Saytingizni internetga joylashtirish uchun:

1. **Vercel** - Eng oson va bepul
2. **Supabase** - Bepul database
3. **Custom domain** - $10/year
4. **5 daqiqa** - Deploy vaqti

**Jami: ~$10/year + 5 daqiqa vaqt**

---

**Saytingiz tayyor va professional! 🚀**
