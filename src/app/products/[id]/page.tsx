'use client'

import { useState } from 'react'
import { ArrowLeft, ShoppingBag, Star, Truck, Shield, Heart } from 'lucide-react'
import Link from 'next/link'

// Mock product data - you'll replace this with your actual products
const products = [
  {
    id: 1,
    name: 'Alpine Serving Board - Walnut & Maple',
    price: 89,
    category: 'Serving Boards',
    material: 'Walnut & Maple',
    description: 'Beautifully crafted serving board perfect for charcuterie, cheese, or as a stunning centerpiece. Each piece is handcrafted with care, ensuring both beauty and functionality.',
    longDescription: 'This exquisite serving board combines the rich, warm tones of walnut with the light, creamy hues of maple. Perfect for entertaining, it features a generous size that accommodates multiple cheeses, meats, and accompaniments. The natural grain patterns create a unique, one-of-a-kind piece that will become a conversation starter at any gathering.',
    dimensions: '18" x 12" x 0.75"',
    weight: '2.5 lbs',
    care: 'Hand wash with mild soap, dry immediately, and apply food-safe oil monthly',
    image: '/placeholder-serving-board.jpg',
    featured: true,
    inStock: true,
  },
  {
    id: 2,
    name: 'Rocky Mountain Cutting Board - Cherry Wood',
    price: 129,
    category: 'Cutting Boards',
    material: 'Cherry Wood',
    description: 'Professional-grade cutting board made from premium cherry wood, perfect for daily use.',
    longDescription: 'Crafted from the finest cherry wood, this cutting board offers superior durability and knife protection. The end-grain construction ensures your knives stay sharp longer while providing a beautiful, distinctive pattern. Perfect for both professional kitchens and home use.',
    dimensions: '16" x 12" x 1.5"',
    weight: '3.2 lbs',
    care: 'Hand wash with mild soap, dry immediately, and apply food-safe oil monthly',
    image: '/placeholder-cutting-board.jpg',
    featured: true,
    inStock: true,
  },
  {
    id: 3,
    name: 'YYC Holiday Collection',
    price: 199,
    category: 'Gift Sets',
    material: 'Mixed Woods',
    description: 'Complete collection including serving board, cutting board, and cheese knife set.',
    longDescription: 'The perfect gift for the woodcraft enthusiast in your life. This comprehensive collection includes a serving board, cutting board, and premium cheese knife set, all crafted from sustainable hardwoods. Beautifully packaged and ready for gifting.',
    dimensions: 'Various sizes',
    weight: '5.5 lbs',
    care: 'Hand wash with mild soap, dry immediately, and apply food-safe oil monthly',
    image: '/placeholder-gift-set.jpg',
    featured: true,
    inStock: true,
  },
]

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1)
  const product = products.find(p => p.id === parseInt(params.id))

  if (!product) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Product Not Found</h1>
          <Link href="/products" className="text-emerald-600 hover:text-emerald-700">
            ← Back to Products
          </Link>
        </div>
      </div>
    )
  }

  const addToCart = () => {
    // Show success message (you can enhance this with a toast notification)
    alert(`Added ${quantity} ${product.name} to cart!`)
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/products" className="text-emerald-600 hover:text-emerald-700 flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 to-emerald-50 border border-slate-200">
            <div className="h-full w-full bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
              <div className="text-center">
                <span className="text-emerald-700 text-xl font-medium text-center px-8">
                  {product.name}
                </span>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className="mb-6">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">
                {product.name}
              </h1>
              <p className="text-2xl font-semibold text-emerald-600 mb-4">
                ${product.price}
              </p>
              <p className="text-lg text-slate-600 mb-6">
                {product.description}
              </p>
              
              {product.featured && (
                <div className="mb-4">
                  <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800">
                    <Star className="h-4 w-4 mr-1" />
                    Featured Product
                  </span>
                </div>
              )}
            </div>

            {/* Add to Cart Section */}
            <div className="mb-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-4 mb-4">
                <label htmlFor="quantity" className="text-sm font-medium text-slate-700">
                  Quantity:
                </label>
                <select
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="rounded-md border-slate-300 py-2 pl-3 pr-10 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                >
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
              
              <button
                onClick={addToCart}
                disabled={!product.inStock}
                className="w-full rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ShoppingBag className="h-5 w-5" />
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
            </div>

            {/* Product Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Product Details</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-slate-600">Category:</span>
                    <p className="text-slate-900">{product.category}</p>
                  </div>
                  <div>
                    <span className="font-medium text-slate-600">Material:</span>
                    <p className="text-slate-900">{product.material}</p>
                  </div>
                  <div>
                    <span className="font-medium text-slate-600">Dimensions:</span>
                    <p className="text-slate-900">{product.dimensions}</p>
                  </div>
                  <div>
                    <span className="font-medium text-slate-600">Weight:</span>
                    <p className="text-slate-900">{product.weight}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Description</h3>
                <p className="text-slate-600 leading-relaxed">
                  {product.longDescription}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Care Instructions</h3>
                <p className="text-slate-600 leading-relaxed">
                  {product.care}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 py-16 bg-gradient-to-b from-white to-slate-50">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-12">
              Why Choose Alpine Woodworks?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 mb-4">
                  <Truck className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Local & Sustainable</h3>
                <p className="text-slate-600 text-sm">
                  Sourced locally and crafted with sustainable practices
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 mb-4">
                  <Shield className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Lifetime Guarantee</h3>
                <p className="text-slate-600 text-sm">
                  We stand behind every piece we create
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 mb-4">
                  <Heart className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Handcrafted with Love</h3>
                <p className="text-slate-600 text-sm">
                  Each piece tells a story of craftsmanship
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
