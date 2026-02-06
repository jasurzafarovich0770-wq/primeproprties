# Setup Instructions

Follow these steps to get the Prime Properties website running locally:

## Prerequisites

- Node.js 18+ installed
- PostgreSQL database (local or cloud)
- Git

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and update the `DATABASE_URL` with your PostgreSQL connection string:
   ```
   DATABASE_URL="postgresql://username:password@localhost:5432/prime_properties?schema=public"
   ```

3. **Set up the database**
   ```bash
   # Generate Prisma client
   npx prisma generate
   
   # Push schema to database
   npm run db:push
   
   # Seed with sample data
   npm run db:seed
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Database Setup Options

### Option 1: Local PostgreSQL
```bash
# Install PostgreSQL (macOS)
brew install postgresql
brew services start postgresql

# Create database
createdb prime_properties
```

### Option 2: Docker PostgreSQL
```bash
docker run --name postgres-prime \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_DB=prime_properties \
  -p 5432:5432 -d postgres:15
```

### Option 3: Cloud Database
Use services like:
- [Supabase](https://supabase.com) (Free tier available)
- [Railway](https://railway.app) (Free tier available)
- [Neon](https://neon.tech) (Free tier available)

## Optional: Telegram Notifications

To receive lead notifications via Telegram:

1. Create a bot with [@BotFather](https://t.me/botfather)
2. Get your chat ID from [@userinfobot](https://t.me/userinfobot)
3. Add to `.env`:
   ```
   TELEGRAM_BOT_TOKEN="your-bot-token"
   TELEGRAM_CHAT_ID="your-chat-id"
   ```

## Troubleshooting

### Common Issues

**"Module not found" errors:**
```bash
npm install
npx prisma generate
```

**Database connection errors:**
- Check your `DATABASE_URL` in `.env`
- Ensure PostgreSQL is running
- Verify database exists

**Build errors:**
```bash
npm run build
```

**Port already in use:**
```bash
npm run dev -- -p 3001
```

## Production Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy

### Other Platforms
- Railway: Connect PostgreSQL + deploy
- Netlify: Configure build settings
- DigitalOcean App Platform

## Project Structure

```
├── app/                 # Next.js pages (App Router)
├── components/          # Reusable React components
├── lib/                # Utility functions
├── prisma/             # Database schema & seeds
├── types/              # TypeScript type definitions
└── public/             # Static assets
```

Need help? Check the main README.md for detailed documentation.