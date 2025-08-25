import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '../components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Artisan Woodcrafts - Handcrafted Serving Boards & Cutting Boards',
  description: 'Discover beautifully crafted serving boards and cutting boards, perfect as gifts or for your kitchen. Handmade with care and premium materials.',
  keywords: 'woodcrafts, serving boards, cutting boards, handmade, artisan, kitchen, gifts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  )
}
