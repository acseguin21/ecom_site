'use client'

import { useState } from 'react'
import { Menu, X, ShoppingBag } from 'lucide-react'
import Link from 'next/link'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 group">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent group-hover:from-emerald-600 group-hover:to-teal-600 transition-all duration-300">
                Alpine Woodworks
              </span>
              <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                YYC
              </span>
            </div>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-8">
          <Link 
            href="/products" 
            className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors duration-200"
          >
            Products
          </Link>
          <Link 
            href="/about" 
            className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors duration-200"
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors duration-200"
          >
            Contact
          </Link>
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link 
            href="/cart" 
            className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors duration-200 group"
          >
            <div className="flex items-center space-x-2 bg-slate-100 hover:bg-emerald-50 px-4 py-2 rounded-full transition-all duration-200">
              <ShoppingBag className="h-5 w-5" />
              <span>Cart</span>
            </div>
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-slate-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">A</span>
                  </div>
                  <span className="text-xl font-bold text-slate-800">
                    Alpine Woodworks
                  </span>
                  <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                    YYC
                  </span>
                </div>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-slate-500/10">
                <div className="space-y-2 py-6">
                  <Link
                    href="/products"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Products
                  </Link>
                  <Link
                    href="/about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="/contact"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
                <div className="py-6">
                  <Link
                    href="/cart"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="flex items-center space-x-2">
                      <ShoppingBag className="h-5 w-5" />
                      <span>Shopping Cart</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
