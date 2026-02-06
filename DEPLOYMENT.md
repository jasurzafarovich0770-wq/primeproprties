# 🚀 Saytni Internetga Joylashtirish

Saytingizni internetga joylashtirish uchun eng oson va bepul usullar:

## 1️⃣ Vercel (Tavsiya etiladi) - BEPUL

Vercel - Next.js yaratuvchilari tomonidan taqdim etilgan eng yaxshi hosting.

### Qadamlar:

1. **GitHub'ga yuklash**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/USERNAME/REPO_NAME.git
   git push -u origin main
   ```

2. **Vercel'ga kirish**
   - [vercel.com](https://vercel.com) ga o'ting
   - GitHub akkaunt bilan kiring
   - "Add New Project" tugmasini bosing

3. **Repository'ni tanlash**
   - GitHub'dagi loyihangizni tanlang
   - "Import" tugmasini bosing

4. **Environment Variables qo'shish**
   - "Environment Variables" bo'limiga o'ting
   - Quyidagilarni qo'shing:
     ```
     DATABASE_URL=postgresql://...
     TELEGRAM_BOT_TOKEN=... (ixtiyoriy)
     TELEGRAM_CHAT_ID=... (ixtiyoriy)
     ```

5. **Deploy qilish**
   - "Deploy" tugmasini bosing
   - 2-3 daqiqada saytingiz tayyor!

### Natija:
Sizga `https://your-project.vercel.app` kabi manzil beriladi.

---

## 2️⃣ Netlify - BEPUL

### Qadamlar:

1. **GitHub'ga yuklash** (yuqoridagi kabi)

2. **Netlify'ga kirish**
   - [netlify.com](https://netlify.com) ga o'ting
   - GitHub bilan kiring

3. **Site qo'shish**
   - "Add new site" > "Import an existing project"
   - GitHub repository'ni tanlang

4. **Build settings**
   ```
   Build command: npm run build
   Publish directory: .next
   ```

5. **Environment Variables**
   - Site settings > Environment variables
   - DATABASE_URL va boshqalarni qo'shing

6. **Deploy**
   - Avtomatik deploy boshlanadi

---

## 3️⃣ Railway - BEPUL (Database bilan)

Railway database ham taqdim etadi!

### Qadamlar:

1. **Railway'ga kirish**
   - [railway.app](https://railway.app) ga o'ting
   - GitHub bilan kiring

2. **New Project**
   - "New Project" tugmasini bosing
   - "Deploy from GitHub repo" ni tanlang

3. **PostgreSQL qo'shish**
   - "New" > "Database" > "PostgreSQL"
   - Avtomatik DATABASE_URL yaratiladi

4. **Environment Variables**
   - Avtomatik DATABASE_URL o'rnatiladi
   - Boshqa kerakli o'zgaruvchilarni qo'shing

5. **Deploy**
   - Avtomatik deploy boshlanadi

---

## 4️⃣ Render - BEPUL

### Qadamlar:

1. **Render'ga kirish**
   - [render.com](https://render.com) ga o'ting

2. **New Web Service**
   - GitHub repository'ni ulang
   - Build command: `npm install && npm run build`
   - Start command: `npm start`

3. **Environment Variables qo'shish**

4. **Deploy**

---

## 📊 Ma'lumotlar Bazasi (Database)

Agar database kerak bo'lsa:

### Bepul PostgreSQL Hosting:

1. **Supabase** - [supabase.com](https://supabase.com)
   - 500MB bepul
   - Oson sozlash

2. **Neon** - [neon.tech](https://neon.tech)
   - 3GB bepul
   - Serverless PostgreSQL

3. **Railway** - [railway.app](https://railway.app)
   - $5 bepul kredit har oy

### Database sozlash:

1. Yuqoridagi xizmatlardan birini tanlang
2. PostgreSQL database yarating
3. Connection string oling
4. Vercel/Netlify'da Environment Variable sifatida qo'shing:
   ```
   DATABASE_URL=postgresql://user:password@host:5432/dbname
   ```

5. Prisma migratsiyasini ishga tushiring:
   ```bash
   npx prisma db push
   npx prisma db seed
   ```

---

## 🌐 O'z Domeningiz

Agar o'z domeningiz bo'lsa (masalan: mysite.uz):

### Vercel'da:

1. Project Settings > Domains
2. Domeningizni kiriting
3. DNS sozlamalarini yangilang:
   ```
   Type: CNAME
   Name: @
   Value: cname.vercel-dns.com
   ```

### Netlify'da:

1. Domain settings > Add custom domain
2. DNS sozlamalarini yangilang

---

## ✅ Deployment Checklist

Deploy qilishdan oldin tekshiring:

- [ ] `.env` faylida barcha kerakli o'zgaruvchilar bor
- [ ] `package.json` da barcha dependencies o'rnatilgan
- [ ] Build xatosiz ishlaydi: `npm run build`
- [ ] Database connection string to'g'ri
- [ ] Environment variables hosting'da o'rnatilgan

---

## 🔄 Avtomatik Deploy

GitHub'ga har push qilganingizda avtomatik deploy bo'ladi:

```bash
git add .
git commit -m "Yangilanish"
git push
```

2-3 daqiqada saytingiz yangilanadi!

---

## 💡 Maslahatlar

1. **Tezlik uchun**: Vercel'dan foydalaning
2. **Database kerak bo'lsa**: Railway yoki Supabase
3. **Bepul SSL**: Barcha platformalar bepul HTTPS beradi
4. **Custom domain**: Istalgan platformada qo'shish mumkin

---

## 🆘 Yordam

Agar muammo bo'lsa:

1. Build logs'ni tekshiring
2. Environment variables to'g'riligini tekshiring
3. Database connection'ni sinab ko'ring
4. Platform documentation'ni o'qing

---

## 🎉 Tayyor!

Saytingiz endi internetda va butun dunyo ko'rishi mumkin! 🌍