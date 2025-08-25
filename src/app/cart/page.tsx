'use client'

import { useState } from 'react'
import { Trash2, ArrowLeft, ShoppingBag } from 'lucide-react'
import Link from 'next/link'

// Mock cart data - you'll replace this with actual cart state management
const initialCartItems = [
  {
    id: 1,
    name: 'Artisan Serving Board - Walnut & Maple',
    price: 89,
    quantity: 1,
    image: '/placeholder-serving-board.jpg',
  },
  {
    id: 2,
    name: 'Premium Cutting Board - Cherry Wood',
    price: 129,
    quantity: 1,
    image: '/placeholder-cutting-board.jpg',
  },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = 15
  const tax = subtotal * 0.08 // 8% tax
  const total = subtotal + shipping + tax

  if (cartItems.length === 0) {
    return (
      <div className="bg-white min-h-screen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <ShoppingBag className="mx-auto h-24 w-24 text-gray-400 mb-6" />
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
              Your cart is empty
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Looks like you haven't added any beautiful woodcrafts to your cart yet.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center rounded-md bg-amber-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Shopping Cart</h1>
          <p className="mt-2 text-gray-600">
            Review your items and proceed to checkout
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 border-b border-gray-200 pb-6">
                  <div className="flex-shrink-0">
                    <div className="h-24 w-24 bg-gradient-to-br from-amber-200 to-orange-200 rounded-lg flex items-center justify-center">
                      <span className="text-amber-600 text-xs font-medium text-center px-2">
                        {item.name}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                    <p className="text-lg font-medium text-gray-900">${item.price}</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <label htmlFor={`quantity-${item.id}`} className="sr-only">
                      Quantity
                    </label>
                    <select
                      id={`quantity-${item.id}`}
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      className="rounded-md border-gray-300 py-1.5 text-base leading-5 focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                    
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 flex justify-between">
              <Link
                href="/products"
                className="inline-flex items-center text-amber-600 hover:text-amber-500"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Continue Shopping
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-8">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-gray-900">${shipping.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax</span>
                  <span className="text-gray-900">${tax.toFixed(2)}</span>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-base font-medium">
                    <span className="text-gray-900">Total</span>
                    <span className="text-gray-900">${total.toFixed(2)}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Shipping calculated at checkout
                  </p>
                </div>
              </div>
              
              <button
                className="w-full mt-6 rounded-md bg-amber-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
              >
                Proceed to Checkout
              </button>
              
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                  Secure checkout powered by Stripe
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
