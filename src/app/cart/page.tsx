'use client'

import { useState, useEffect } from 'react'
import { Trash2, ShoppingBag, ArrowRight, Minus, Plus } from 'lucide-react'
import Link from 'next/link'

// Mock cart data - you'll replace this with real cart state management
const mockCartItems = [
  {
    id: 1,
    name: 'Alpine Serving Board - Walnut & Maple',
    price: 89,
    quantity: 1,
    image: '/placeholder-serving-board.jpg',
  },
  {
    id: 2,
    name: 'Rocky Mountain Cutting Board - Cherry Wood',
    price: 129,
    quantity: 2,
    image: '/placeholder-cutting-board.jpg',
  },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(mockCartItems)
  const [isLoading, setIsLoading] = useState(false)

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCartItems(prev => prev.filter(item => item.id !== id))
    } else {
      setCartItems(prev => prev.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ))
    }
  }

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const tax = subtotal * 0.05 // 5% tax (adjust for your location)
  const shipping = subtotal > 200 ? 0 : 15 // Free shipping over $200
  const total = subtotal + tax + shipping

  const handleCheckout = async () => {
    console.log('Checkout started, cart items:', cartItems)
    setIsLoading(true)
    
    try {
      console.log('Making API request to create checkout session...')
      // This will be replaced with actual Stripe checkout
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: cartItems.map(item => ({
            id: item.id,
            quantity: item.quantity,
            price: item.price,
            name: item.name,
          })),
        }),
      })

      console.log('API response status:', response.status)
      console.log('API response ok:', response.ok)

      if (response.ok) {
        const responseData = await response.json()
        console.log('API response data:', responseData)
        const { sessionId } = responseData
        console.log('Session ID:', sessionId)
        console.log('Redirecting to Stripe checkout...')
        // Redirect to Stripe Checkout
        window.location.href = `https://checkout.stripe.com/pay/${sessionId}`
      } else {
        const errorText = await response.text()
        console.error('API error response:', errorText)
        throw new Error('Failed to create checkout session')
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  if (cartItems.length === 0) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="h-16 w-16 text-slate-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Your cart is empty</h1>
          <p className="text-slate-600 mb-8">Start shopping to add some beautiful woodcrafts to your cart!</p>
          <Link 
            href="/products"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Browse Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-200">
                  {/* Product Image */}
                  <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-700 text-sm font-medium text-center px-2">
                      {item.name}
                    </span>
                  </div>
                  
                  {/* Product Details */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.name}</h3>
                    <p className="text-slate-600 mb-4">${item.price}</p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 rounded-full bg-white border border-slate-300 hover:bg-slate-50 transition-colors"
                      >
                        <Minus className="h-4 w-4 text-slate-600" />
                      </button>
                      <span className="text-slate-900 font-medium min-w-[2rem] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 rounded-full bg-white border border-slate-300 hover:bg-slate-50 transition-colors"
                      >
                        <Plus className="h-4 w-4 text-slate-600" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Price and Remove */}
                  <div className="text-right">
                    <p className="text-lg font-semibold text-slate-900 mb-4">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-slate-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sticky top-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Tax (5%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="border-t border-slate-200 pt-4">
                  <div className="flex justify-between text-lg font-semibold text-slate-900">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <button
                onClick={handleCheckout}
                disabled={isLoading || cartItems.length === 0}
                className="w-full rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    Proceed to Checkout
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </button>
              
              <p className="text-xs text-slate-500 mt-4 text-center">
                Secure checkout powered by Stripe
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
