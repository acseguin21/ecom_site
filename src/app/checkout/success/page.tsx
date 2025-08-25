'use client'

import { useEffect, useState } from 'react'
import { CheckCircle, Package, Truck, Home } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [orderDetails, setOrderDetails] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (sessionId) {
      // In a real app, you'd fetch order details from your backend
      // For now, we'll simulate it
      setTimeout(() => {
        setOrderDetails({
          orderNumber: `AW-${Date.now().toString().slice(-6)}`,
          estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString(),
          items: [
            { name: 'Alpine Serving Board - Walnut & Maple', quantity: 1 },
            { name: 'Rocky Mountain Cutting Board - Cherry Wood', quantity: 2 },
          ],
        })
        setIsLoading(false)
      }, 1000)
    }
  }, [sessionId])

  if (isLoading) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading your order details...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 mb-6">
            <CheckCircle className="h-8 w-8 text-emerald-600" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">
            Thank you for your order!
          </h1>
          <p className="text-lg text-slate-600">
            Your payment has been processed successfully. We're excited to craft your beautiful wooden pieces!
          </p>
        </div>

        {/* Order Details */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-6">Order Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <span className="text-sm font-medium text-slate-600">Order Number</span>
              <p className="text-lg font-semibold text-slate-900">{orderDetails?.orderNumber}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-slate-600">Estimated Delivery</span>
              <p className="text-lg font-semibold text-slate-900">{orderDetails?.estimatedDelivery}</p>
            </div>
          </div>

          <div>
            <span className="text-sm font-medium text-slate-600">Items Ordered</span>
            <div className="mt-2 space-y-2">
              {orderDetails?.items.map((item: any, index: number) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-slate-200 last:border-b-0">
                  <span className="text-slate-900">{item.name}</span>
                  <span className="text-slate-600">Qty: {item.quantity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200 p-8 mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-6">What happens next?</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 flex-shrink-0">
                <span className="text-white text-sm font-bold">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Order Confirmation</h3>
                <p className="text-slate-600 text-sm">
                  You'll receive an email confirmation with your order details and tracking information.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 flex-shrink-0">
                <span className="text-white text-sm font-bold">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Crafting Your Pieces</h3>
                <p className="text-slate-600 text-sm">
                  Our artisans will carefully craft your wooden pieces with attention to detail and quality.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 flex-shrink-0">
                <span className="text-white text-sm font-bold">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Shipping & Delivery</h3>
                <p className="text-slate-600 text-sm">
                  Once ready, your order will be carefully packaged and shipped to your address.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-6">Questions about your order?</h2>
          <p className="text-slate-600 mb-4">
            We're here to help! If you have any questions about your order or need to make changes, 
            please don't hesitate to reach out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3 text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Contact Us
            </Link>
            <a 
              href="mailto:your_business_email@gmail.com"
              className="inline-flex items-center justify-center rounded-full border-2 border-slate-300 px-6 py-3 text-slate-700 font-semibold hover:border-emerald-400 hover:text-emerald-700 transition-all duration-200"
            >
              Email Support
            </a>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/products"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-slate-600 to-slate-700 px-8 py-4 text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Continue Shopping
          </Link>
          <Link 
            href="/"
            className="inline-flex items-center justify-center rounded-full border-2 border-slate-300 px-8 py-4 text-slate-700 font-semibold hover:border-emerald-400 hover:text-emerald-700 transition-all duration-200"
          >
            <Home className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
