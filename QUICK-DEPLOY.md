# ⚡ Tezkor Deploy - 5 Daqiqada!

## 🚀 Eng Oson Yo'l: Vercel

### 1. GitHub'ga yuklash (3 daqiqa)

```bash
# Terminal'da bajaring:
git init
git add .
git commit -m "Sayt tayyor"
```

GitHub'da yangi repository yarating: https://github.com/new

```bash
# Repository manzilini o'zgartiring:
git remote add origin https://github.com/USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

### 2. Vercel'ga deploy (2 daqiqa)

1. **Vercel'ga kiring**: https://vercel.com/signup
   - GitHub akkaunt bilan kiring

2. **Import qiling**:
   - "Add New Project" tugmasini bosing
   - GitHub repository'ni tanlang
   - "Import" bosing

3. **Deploy**:
   - Hech narsa o'zgartirmang
   - "Deploy" tugmasini bosing
   - ☕ 2 daqiqa kuting

### 3. Tayyor! 🎉

Sizga manzil beriladi: `https://your-site.vercel.app`

---

## 🔧 Agar Database Kerak Bo'lsa

### Supabase (Bepul PostgreSQL)

1. **Supabase'ga kiring**: https://supabase.com
2. **New Project** yarating
3. **Database Settings** > **Connection String** ni nusxalang
4. **Vercel'da**:
   - Project Settings > Environment Variables
   - `DATABASE_URL` = connection string
   - "Save" bosing
5. **Redeploy**:
   - Deployments > Latest > "Redeploy"

---

## 📱 O'z Domeningiz

Vercel'da:
1. Project Settings > Domains
2. Domeningizni kiriting (masalan: `mysite.uz`)
3. DNS sozlamalarini ko'rsatilganidek o'zgartiring

---

## 🔄 Yangilash

Har safar GitHub'ga push qilganingizda avtomatik yangilanadi:

```bash
git add .
git commit -m "Yangilanish"
git push
```

---

## ✅ Hammasi shu!

Saytingiz endi internetda: `https://your-site.vercel.app` 🌍