import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '../components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alpine Woodworks YYC - Handcrafted Wooden Creations',
  description: 'Discover beautifully crafted wooden pieces from the heart of Calgary. Handmade with care, inspired by the Pacific Northwest, perfect for modern homes.',
  keywords: 'alpine woodworks, yyc, calgary, wooden crafts, pacific northwest, handcrafted, modern wood, artisan, mountain inspired',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-slate-50">
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  )
}
