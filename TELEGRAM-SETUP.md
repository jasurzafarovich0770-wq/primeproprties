# 📱 TELEGRAM BOT SOZLASH

Saytdan kelgan mijozlar haqida Telegram orqali xabar olish uchun bot sozlash qo'llanmasi.

---

## 🤖 1-QADAM: BOT YARATISH

### Telegram'da BotFather bilan ishlash:

1. **Telegram'da @BotFather ni oching**
   - Telegram'da qidiruv qismiga `@BotFather` yozing
   - Botni oching va `/start` bosing

2. **Yangi bot yaratish**
   ```
   /newbot
   ```

3. **Bot nomini kiriting**
   ```
   Prime Properties Bot
   ```
   (yoki o'zingiz xohlagan nom)

4. **Bot username'ini kiriting**
   ```
   primeproperties_bot
   ```
   (yoki boshqa unique username, `_bot` bilan tugashi kerak)

5. **TOKEN olish**
   - BotFather sizga TOKEN beradi
   - Masalan: `1234567890:ABCdefGHIjklMNOpqrsTUVwxyz`
   - **Bu TOKEN'ni saqlang!** ⚠️

---

## 🆔 2-QADAM: CHAT ID OLISH

### Variant 1: @userinfobot orqali (Oson)

1. **Telegram'da @userinfobot ni oching**
2. `/start` bosing
3. Bot sizga **Chat ID** ni ko'rsatadi
4. Masalan: `123456789`
5. **Bu ID'ni saqlang!** ⚠️

### Variant 2: @getmyid_bot orqali

1. **Telegram'da @getmyid_bot ni oching**
2. `/start` bosing
3. Bot sizga **Your user ID** ni ko'rsatadi
4. **Bu ID'ni saqlang!** ⚠️

### Variant 3: Qo'lda olish

1. **Botingizni oching** (yaratgan botingiz)
2. `/start` bosing
3. **Browser'da shu linkni oching:**
   ```
   https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates
   ```
   `<YOUR_BOT_TOKEN>` o'rniga o'z TOKEN'ingizni qo'ying

4. **JSON javobda `chat.id` ni toping:**
   ```json
   {
     "ok": true,
     "result": [{
       "message": {
         "chat": {
           "id": 123456789  ← Bu sizning Chat ID
         }
       }
     }]
   }
   ```

---

## ⚙️ 3-QADAM: .env FAYLINI SOZLASH

1. **Loyihangizda `.env` faylini oching**

2. **TOKEN va CHAT ID'ni qo'shing:**
   ```env
   # Telegram Bot (for lead notifications)
   TELEGRAM_BOT_TOKEN="1234567890:ABCdefGHIjklMNOpqrsTUVwxyz"
   TELEGRAM_CHAT_ID="123456789"
   ```

3. **Faylni saqlang**

---

## 🔄 4-QADAM: SERVERNI QAYTA ISHGA TUSHIRISH

### Development (Local):
```bash
# Ctrl+C bilan to'xtating
# Keyin qayta ishga tushiring:
npm run dev
```

### Production (Vercel):
```bash
# Environment variables qo'shing:
vercel env add TELEGRAM_BOT_TOKEN
vercel env add TELEGRAM_CHAT_ID

# Qayta deploy qiling:
vercel --prod
```

---

## ✅ 5-QADAM: TEST QILISH

1. **Saytingizni oching:**
   ```
   http://localhost:3000/contact
   ```

2. **Formani to'ldiring:**
   - Ism: Test User
   - Telefon: +998901234567
   - Xabar: Test message

3. **"Yuborish" tugmasini bosing**

4. **Telegram'da xabar kelishini tekshiring!** 📱

---

## 📨 XABAR FORMATI

Telegram'ga quyidagicha xabar keladi:

```
🏠 YANGI MIJOZ MUROJATI
━━━━━━━━━━━━━━━━━━━━

👤 Ism: Jasur Mamatkarimov
📞 Telefon: +998901234567
💬 Xabar: Skyline Towers haqida ma'lumot olmoqchiman
🏢 Loyiha: Skyline Towers

━━━━━━━━━━━━━━━━━━━━
🔒 Xavfsizlik Ma'lumotlari:
🆔 Hash ID: IP-A1B2C3D4
📍 Joylashuv: 🌍 Internet
⏰ Vaqt: 06.02.2024, 15:30:45

━━━━━━━━━━━━━━━━━━━━
✅ Ma'lumotlar xavfsiz saqlandi
🔐 IP manzil shifrlangan
```

---

## 🔒 XAVFSIZLIK

### IP Manzil Himoyasi

✅ **IP manzil hech qachon to'liq ko'rsatilmaydi**
- Faqat hash (shifrlangan) versiya yuboriladi
- Masalan: `IP-A1B2C3D4`
- Original IP server loglarida ham saqlanmaydi

✅ **Joylashuv ma'lumoti umumiy**
- Faqat "Local Network" yoki "Internet"
- Aniq manzil ko'rsatilmaydi

✅ **Vaqt Toshkent vaqti bo'yicha**
- Asia/Tashkent timezone

---

## 🛠️ MUAMMOLARNI HAL QILISH

### Xabar kelmayapti?

1. **TOKEN to'g'ri ekanligini tekshiring**
   ```bash
   # .env faylida:
   TELEGRAM_BOT_TOKEN="..." # Qo'shtirnoq ichida
   ```

2. **CHAT ID to'g'ri ekanligini tekshiring**
   ```bash
   # .env faylida:
   TELEGRAM_CHAT_ID="..." # Qo'shtirnoq ichida
   ```

3. **Botni ishga tushirganingizni tekshiring**
   - Telegram'da botingizni oching
   - `/start` bosing

4. **Server loglarini tekshiring**
   ```bash
   # Terminal'da ko'ring:
   ✅ Telegram notification sent successfully
   # yoki
   ❌ Failed to send Telegram notification
   ```

### "Telegram not configured" xabari?

```bash
# .env faylida # belgisini olib tashlang:
# TELEGRAM_BOT_TOKEN="..."  ❌ Noto'g'ri
TELEGRAM_BOT_TOKEN="..."    ✅ To'g'ri
```

### "Chat not found" xabari?

- CHAT ID noto'g'ri
- Botni `/start` bilan ishga tushiring
- CHAT ID'ni qayta oling

---

## 📊 QO'SHIMCHA SOZLAMALAR

### Guruhga xabar yuborish

1. **Guruh yarating**
2. **Botni guruhga qo'shing**
3. **Guruh ID'sini oling:**
   ```
   https://api.telegram.org/bot<TOKEN>/getUpdates
   ```
4. **Guruh ID'si manfiy bo'ladi:**
   ```env
   TELEGRAM_CHAT_ID="-123456789"
   ```

### Bir nechta odamga yuborish

Hozircha faqat bitta chat'ga yuborish mumkin. Bir nechta odamga yuborish uchun guruh yarating.

---

## 🎯 XULOSA

✅ **Bot yaratildi**
✅ **TOKEN olindi**
✅ **CHAT ID olindi**
✅ **`.env` sozlandi**
✅ **Server qayta ishga tushirildi**
✅ **Test qilindi**

**Endi har bir mijoz murojati Telegram'ga keladi!** 📱🎉

---

## 📞 YORDAM

Muammo bo'lsa:
1. `.env` faylini tekshiring
2. Server loglarini ko'ring
3. Bot `/start` qilinganligini tekshiring
4. TOKEN va CHAT ID to'g'riligini tekshiring

---

**Muvaffaqiyatli sozlash!** 🚀
