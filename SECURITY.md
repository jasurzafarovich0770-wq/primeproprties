# 🔒 Xavfsizlik Qo'llanmasi / Security Guide

## ✅ Amalga oshirilgan xavfsizlik choralari

### 1. **API Xavfsizligi**

#### Rate Limiting
- ✅ Har bir IP uchun 5 ta so'rov/daqiqa
- ✅ Spam va DDoS hujumlaridan himoya

#### Input Validation
- ✅ Barcha kiritilgan ma'lumotlar tekshiriladi
- ✅ Telefon raqam formati validatsiyasi
- ✅ Ism uzunligi tekshiruvi (2-100 belgi)
- ✅ XSS hujumlaridan himoya

#### Input Sanitization
- ✅ HTML teglar o'chiriladi
- ✅ Maksimal uzunlik cheklangan (500 belgi)
- ✅ SQL Injection'dan himoya (Prisma ORM)

### 2. **HTTP Security Headers**

```
✅ Strict-Transport-Security (HSTS)
✅ X-Frame-Options (Clickjacking himoyasi)
✅ X-Content-Type-Options (MIME sniffing himoyasi)
✅ X-XSS-Protection
✅ Content-Security-Policy (CSP)
✅ Referrer-Policy
✅ Permissions-Policy
```

### 3. **Ma'lumotlar Xavfsizligi**

- ✅ Environment variables `.env` faylida
- ✅ `.env` fayli git'ga commit qilinmaydi
- ✅ Parollar va tokenlar yashirin
- ✅ Database credentials himoyalangan

### 4. **Frontend Xavfsizligi**

- ✅ XSS hujumlaridan himoya (React avtomatik escape)
- ✅ `dangerouslySetInnerHTML` ishlatilmagan
- ✅ Form validation (client + server)
- ✅ CSRF himoyasi (Next.js built-in)

### 5. **API Endpoint Xavfsizligi**

- ✅ GET /api/leads - O'chirilgan (401 xatosi)
- ✅ POST /api/leads - Faqat validatsiya bilan
- ✅ Error handling - Xavfsiz xato xabarlari

## 🚨 Production uchun qo'shimcha qadamlar

### 1. Environment Variables

Production'da quyidagilarni o'zgartiring:

```bash
# .env.production
NEXTAUTH_SECRET="<32+ belgili tasodifiy string>"
DATABASE_URL="<production database URL>"
TELEGRAM_BOT_TOKEN="<real bot token>"
TELEGRAM_CHAT_ID="<real chat ID>"
```

Tasodifiy string yaratish:
```bash
openssl rand -base64 32
```

### 2. Database Xavfsizligi

- ✅ SSL/TLS connection ishlatish
- ✅ Kuchli parollar
- ✅ Database user'ga minimal huquqlar
- ✅ Regular backup

### 3. HTTPS

- ✅ SSL sertifikat o'rnatish (Let's Encrypt bepul)
- ✅ HTTP'dan HTTPS'ga redirect
- ✅ HSTS header yoqilgan

### 4. Monitoring

- ✅ Error logging (Sentry, LogRocket)
- ✅ Performance monitoring
- ✅ Security alerts

## 🔐 Xavfsizlik Checklist

### Development
- [x] `.env` fayli `.gitignore`'da
- [x] Hech qanday credentials kodda yo'q
- [x] Input validation
- [x] Rate limiting
- [x] Security headers

### Production
- [ ] HTTPS yoqilgan
- [ ] Environment variables to'g'ri sozlangan
- [ ] Database backup sozlangan
- [ ] Monitoring o'rnatilgan
- [ ] Error logging yoqilgan
- [ ] Regular security updates

## 🛡️ Xavfsizlik Testlari

### 1. XSS Test
```javascript
// Bu ishlamasligi kerak:
<script>alert('XSS')</script>
```

### 2. SQL Injection Test
```javascript
// Prisma ORM himoya qiladi:
'; DROP TABLE users; --
```

### 3. Rate Limiting Test
```bash
# 5 ta so'rovdan keyin 429 xatosi
for i in {1..10}; do curl -X POST http://localhost:3000/api/leads; done
```

## 📞 Xavfsizlik Muammolarini Xabar Qilish

Agar xavfsizlik zaifligini topsangiz:

1. **Ommaviy xabar BERMANG** (GitHub issue, social media)
2. Email yuboring: security@primeproperties.com
3. 48 soat ichida javob beramiz

## 🔄 Yangilanishlar

- **2024-02-05**: Dastlabki xavfsizlik choralari qo'shildi
- Rate limiting, input validation, security headers

## 📚 Qo'shimcha Resurslar

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security](https://nextjs.org/docs/app/building-your-application/configuring/security-headers)
- [React Security](https://react.dev/learn/escape-hatches#security-pitfalls)

---

**Eslatma**: Xavfsizlik - bu bir martalik ish emas, doimiy jarayon!