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
      <div className="bg-gradient-to-br from-amber-50 via-orange-50/20 to-amber-100/10 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/custom-tabletop.jpeg"
            alt="Alpine Woodworks Tabletop"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative text-center">
          <ShoppingBag className="h-16 w-16 text-amber-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-amber-900 mb-4">Your cart is empty</h1>
          <p className="text-amber-700 mb-8">Start shopping to add some beautiful woodcrafts to your cart!</p>
          <Link 
            href="/products"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-amber-600 to-orange-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Browse Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-amber-50 via-orange-50/20 to-amber-100/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-amber-900 mb-4">Your Shopping Cart</h1>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Review your carefully selected woodcrafts before checkout
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-6 p-8 bg-gradient-to-br from-white to-amber-50/30 rounded-2xl border-2 border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Product Image */}
                  <div className="w-28 h-28 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center flex-shrink-0 border-2 border-amber-300 shadow-md">
                    <span className="text-amber-800 text-sm font-medium text-center px-3 leading-tight">
                      {item.name}
                    </span>
                  </div>
                  
                  {/* Product Details */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-amber-900 mb-3">{item.name}</h3>
                    <p className="text-amber-700 text-lg font-medium mb-4">${item.price}</p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 rounded-full bg-white border-2 border-amber-300 hover:bg-amber-50 hover:border-amber-400 transition-all duration-200 shadow-sm"
                      >
                        <Minus className="h-4 w-4 text-amber-700" />
                      </button>
                      <span className="text-amber-900 font-bold min-w-[2rem] text-center text-lg">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 rounded-full bg-white border-2 border-amber-300 hover:bg-amber-50 hover:border-amber-400 transition-all duration-200 shadow-sm"
                      >
                        <Plus className="h-4 w-4 text-amber-700" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Price and Remove */}
                  <div className="text-right">
                    <p className="text-2xl font-bold text-amber-900 mb-4">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-amber-400 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-red-50"
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
            <div className="bg-gradient-to-br from-white to-amber-50/40 rounded-2xl border-2 border-amber-200 p-8 sticky top-8 shadow-xl">
              <h2 className="text-2xl font-bold text-amber-900 mb-8">Order Summary</h2>
              
              <div className="space-y-5 mb-8">
                <div className="flex justify-between text-amber-700 font-medium">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-amber-700 font-medium">
                  <span>Tax (5%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-amber-700 font-medium">
                  <span>Shipping</span>
                  <span className={shipping === 0 ? 'text-amber-600 font-semibold' : ''}>
                    {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="border-t-2 border-amber-200 pt-5">
                  <div className="flex justify-between text-xl font-bold text-amber-900">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <button
                onClick={handleCheckout}
                disabled={isLoading || cartItems.length === 0}
                className="w-full rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 px-6 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group-hover:from-amber-700 group-hover:to-orange-700"
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
              
              <p className="text-xs text-amber-600 mt-4 text-center font-medium">
                Secure checkout powered by Stripe
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
