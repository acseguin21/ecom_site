'use client'

import { useState } from 'react'
import { Filter, Grid3X3, List, ShoppingBag, Star } from 'lucide-react'
import Link from 'next/link'

// Mock product data - you'll replace this with your actual products
const products = [
  {
    id: 1,
    name: 'Alpine Serving Board - Walnut & Maple',
    price: 89,
    category: 'Serving Boards',
    material: 'Walnut & Maple',
    description: 'Beautifully crafted serving board perfect for charcuterie, cheese, or as a stunning centerpiece.',
    image: '/placeholder-serving-board.jpg',
    featured: true,
  },
  {
    id: 2,
    name: 'Rocky Mountain Cutting Board - Cherry Wood',
    price: 129,
    category: 'Cutting Boards',
    material: 'Cherry Wood',
    description: 'Professional-grade cutting board made from premium cherry wood, perfect for daily use.',
    image: '/placeholder-cutting-board.jpg',
    featured: true,
  },
  {
    id: 3,
    name: 'YYC Holiday Collection',
    price: 199,
    category: 'Gift Sets',
    material: 'Mixed Woods',
    description: 'Complete collection including serving board, cutting board, and cheese knife set.',
    image: '/placeholder-gift-set.jpg',
    featured: true,
  },
  {
    id: 4,
    name: 'Rustic Charcuterie Board',
    price: 75,
    category: 'Serving Boards',
    material: 'Oak & Walnut',
    description: 'Perfect for entertaining with its rustic charm and generous size.',
    image: '/placeholder-charcuterie.jpg',
    featured: false,
  },
  {
    id: 5,
    name: 'End-Grain Cutting Board',
    price: 149,
    category: 'Cutting Boards',
    material: 'Maple & Walnut',
    description: 'End-grain construction for superior knife protection and durability.',
    image: '/placeholder-end-grain.jpg',
    featured: false,
  },
  {
    id: 6,
    name: 'Cheese Board Trio',
    price: 89,
    category: 'Serving Boards',
    material: 'Bamboo & Walnut',
    description: 'Three different sized boards perfect for any cheese presentation.',
    image: '/placeholder-cheese-trio.jpg',
    featured: false,
  },
]

const categories = ['All', 'Serving Boards', 'Cutting Boards', 'Gift Sets']
const materials = ['All', 'Walnut', 'Maple', 'Cherry', 'Oak', 'Bamboo']

export default function ProductsPage() {
  const [cart, setCart] = useState<Array<{id: number, quantity: number}>>([])
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedMaterial, setSelectedMaterial] = useState('All')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const addToCart = (productId: number) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === productId)
      if (existingItem) {
        return prevCart.map(item => 
          item.id === productId 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        return [...prevCart, { id: productId, quantity: 1 }]
      }
    })
    
    // Show success message (you can enhance this with a toast notification)
    alert('Added to cart!')
  }

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory
    const materialMatch = selectedMaterial === 'All' || product.material.includes(selectedMaterial)
    return categoryMatch && materialMatch
  })

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Our Woodcrafts</h1>
          <p className="mt-4 text-lg text-slate-600">
            Discover our collection of handcrafted serving boards and cutting boards, 
            each piece tells a story of craftsmanship and the rugged beauty of the Canadian Rockies.
          </p>
        </div>

        {/* Filters and View Options */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-slate-400" />
              <span className="text-sm font-medium text-slate-700">Filters:</span>
            </div>
            
            {/* Category Filter */}
            <select 
              className="rounded-md border-slate-300 py-2 pl-3 pr-10 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            {/* Material Filter */}
            <select 
              className="rounded-md border-slate-300 py-2 pl-3 pr-10 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              value={selectedMaterial}
              onChange={(e) => setSelectedMaterial(e.target.value)}
            >
              {materials.map((material) => (
                <option key={material} value={material}>{material}</option>
              ))}
            </select>
          </div>

          {/* View Options */}
          <div className="flex items-center gap-2">
            <button 
              className={`p-2 ${viewMode === 'grid' ? 'text-emerald-600' : 'text-slate-400 hover:text-slate-600'}`}
              onClick={() => setViewMode('grid')}
            >
              <Grid3X3 className="h-5 w-5" />
            </button>
            <button 
              className={`p-2 ${viewMode === 'list' ? 'text-emerald-600' : 'text-slate-400 hover:text-slate-600'}`}
              onClick={() => setViewMode('list')}
            >
              <List className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-x-6 gap-y-10 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8' 
            : 'grid-cols-1'
        }`}>
          {filteredProducts.map((product) => (
            <div key={product.id} className={`group relative ${
              viewMode === 'list' ? 'flex gap-6' : ''
            }`}>
              <div className={`${viewMode === 'list' ? 'w-64' : 'aspect-h-1 aspect-w-1'} w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 to-emerald-50 border border-slate-200`}>
                <div className="h-64 w-full bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <div className="text-center">
                    <span className="text-emerald-700 text-lg font-medium text-center px-4">
                      {product.name}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className={`mt-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      <Link href={`/products/${product.id}`} className="hover:text-emerald-600 transition-colors">
                        {product.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">{product.material}</p>
                    <p className="mt-1 text-sm text-slate-500">{product.category}</p>
                    <p className="mt-2 text-sm text-slate-600">{product.description}</p>
                  </div>
                  <p className="text-lg font-semibold text-slate-900">${product.price}</p>
                </div>

                <div className="mt-4">
                  <button 
                    onClick={() => addToCart(product.id)}
                    className="w-full rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="h-4 w-4" />
                    Add to Cart
                  </button>
                </div>

                {product.featured && (
                  <div className="mt-3">
                    <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800">
                      <Star className="h-3 w-3 mr-1" />
                      Featured
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-16 flex items-center justify-center">
          <nav className="flex items-center gap-x-1">
            <a
              href="#"
              className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-white px-3 py-2 text-sm font-medium text-slate-500 rounded-md border border-slate-300 hover:bg-slate-50 transition-colors"
            >
              Previous
            </a>
            <a
              href="#"
              className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-emerald-600 px-3 py-2 text-sm font-medium text-white rounded-md border border-emerald-600"
            >
              1
            </a>
            <a
              href="#"
              className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-white px-3 py-2 text-sm font-medium text-slate-500 rounded-md border border-slate-300 hover:bg-slate-50 transition-colors"
            >
              2
            </a>
            <a
              href="#"
              className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-white px-3 py-2 text-sm font-medium text-slate-500 rounded-md border border-slate-300 hover:bg-slate-50 transition-colors"
            >
              3
            </a>
            <a
              href="#"
              className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-white px-3 py-2 text-sm font-medium text-slate-500 rounded-md border border-slate-300 hover:bg-slate-50 transition-colors"
            >
              Next
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}
