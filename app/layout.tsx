import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Prime Properties - Luxury Real Estate Development',
  description: 'Discover exceptional residential projects with modern design, premium amenities, and prime locations. Your dream home awaits.',
  keywords: 'real estate, luxury apartments, residential development, property investment',
  authors: [{ name: 'Prime Properties' }],
  openGraph: {
    title: 'Prime Properties - Luxury Real Estate Development',
    description: 'Discover exceptional residential projects with modern design, premium amenities, and prime locations.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prime Properties - Luxury Real Estate Development',
    description: 'Discover exceptional residential projects with modern design, premium amenities, and prime locations.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}