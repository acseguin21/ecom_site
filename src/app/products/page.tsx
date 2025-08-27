'use client'

import { useState } from 'react'
import { Filter, Grid3X3, List, ShoppingBag, Star, Trees, Mountain } from 'lucide-react'
import Link from 'next/link'

// Mock product data - you'll replace this with your actual products
const products = [
  {
    id: 1,
    name: 'Edge Grain Cutting Boards 12" x 18"',
    price: 200,
    category: 'Cutting Boards',
    material: 'Maple, Cherry, Paudak, Bloodwood or Walnut',
    description: 'Professional-grade edge grain cutting board crafted from durable hardwoods. Perfect for daily use or to impress your guests.',
    image: '/placeholder-cutting-board.jpg',
    featured: true,
    construction: 'Edge Grain',
  },
  {
    id: 2,
    name: 'Rocky Mountain End Grain Board - Cherry & Maple',
    price: 189,
    category: 'Cutting Boards',
    material: 'Cherry & Maple',
    description: 'Premium end grain construction for superior knife protection and durability. A true heirloom quality piece.',
    image: '/placeholder-end-grain.jpg',
    featured: true,
    construction: 'End Grain',
  },
  {
    id: 3,
    name: 'Contemporary Charcuterie Board - Walnut Accents',
    price: 89,
    category: 'Charcuterie Boards',
    material: 'Maple & Walnut',
    description: 'Elegant serving board featuring contemporary accents. Perfect for entertaining and holiday gatherings.',
    image: '/placeholder-charcuterie.jpg',
    featured: true,
    construction: 'Edge Grain',
  },
  {
    id: 4,
    name: 'YYC Serving Tray - Eye-Catching Patterns',
    price: 79,
    category: 'Serving Trays',
    material: 'Maple & Tropical Accents',
    description: 'Beautiful serving tray that incorporates eye-catching patterns and colours. Perfect for coffee service or breakfast in bed.',
    image: '/placeholder-serving-tray.jpg',
    featured: false,
    construction: 'Edge Grain',
  },
  {
    id: 5,
    name: 'Heritage Edge Grain Board - Pure Maple',
    price: 149,
    category: 'Cutting Boards',
    material: 'Hard Maple',
    description: 'Classic edge grain construction in pure hard maple. Timeless design that will last generations.',
    image: '/placeholder-maple-board.jpg',
    featured: false,
    construction: 'Edge Grain',
  },
  {
    id: 6,
    name: 'Modern Charcuterie Collection - Mixed Hardwoods',
    price: 119,
    category: 'Charcuterie Boards',
    material: 'Cherry, Maple & Walnut',
    description: 'Contemporary design featuring mixed Canadian hardwoods. Perfect for sophisticated entertaining.',
    image: '/placeholder-modern-charcuterie.jpg',
    featured: false,
    construction: 'Edge Grain',
  },
]

const categories = ['All', 'Cutting Boards', 'Charcuterie Boards', 'Serving Trays']
const materials = ['All', 'Maple', 'Walnut', 'Cherry', 'Mixed Hardwoods']
const constructions = ['All', 'Edge Grain', 'End Grain']

export default function ProductsPage() {
  const [cart, setCart] = useState<Array<{id: number, quantity: number}>>([])
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedMaterial, setSelectedMaterial] = useState('All')
  const [selectedConstruction, setSelectedConstruction] = useState('All')
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
    const constructionMatch = selectedConstruction === 'All' || product.construction === selectedConstruction
    return categoryMatch && materialMatch && constructionMatch
  })

  return (
    <div className="bg-white">
              {/* Hero Section with Workshop Image */}
        <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50/30 to-amber-100/20">
          <div className="absolute inset-0">
            <img 
              src="/images/workshop-workspace.jpeg"
              alt="Alpine Woodworks Workshop"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-amber-900/40 via-amber-800/30 to-transparent" />
          </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-amber-900">
              Handcrafted Excellence
            </h1>
            <p className="mt-6 text-xl leading-8 text-amber-800 max-w-2xl">
              Each piece is thoughtfully crafted in our Calgary workshop, showcasing the natural beauty of Canadian hardwoods with contemporary design and heirloom quality craftsmanship.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-amber-900">Our Woodcrafts Collection</h2>
          <p className="mt-4 text-lg text-amber-700 max-w-2xl mx-auto">
            Discover our collection of handcrafted serving boards and cutting boards, 
            each piece tells a story of craftsmanship and the rugged beauty of the Canadian Rockies.
          </p>
        </div>

        {/* Premium Filters and View Options */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 mb-12 border border-amber-200/50">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-amber-600" />
                <span className="text-sm font-semibold text-amber-800">Refine Your Selection:</span>
              </div>
              
              {/* Category Filter */}
              <select 
                className="rounded-lg border-amber-200 bg-white/80 py-2.5 pl-3 pr-10 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all duration-200"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              {/* Material Filter */}
              <select 
                className="rounded-lg border-amber-200 bg-white/80 py-2.5 pl-3 pr-10 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all duration-200"
                value={selectedMaterial}
                onChange={(e) => setSelectedMaterial(e.target.value)}
              >
                {materials.map((material) => (
                  <option key={material} value={material}>{material}</option>
                ))}
              </select>

              {/* Construction Filter */}
              <select 
                className="rounded-lg border-amber-200 bg-white/80 py-2.5 pl-3 pr-10 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all duration-200"
                value={selectedConstruction}
                onChange={(e) => setSelectedConstruction(e.target.value)}
              >
                {constructions.map((construction) => (
                  <option key={construction} value={construction}>{construction}</option>
                ))}
              </select>
            </div>

            {/* View Options */}
            <div className="flex items-center gap-2 bg-white/60 rounded-xl p-1">
              <button 
                className={`p-2.5 rounded-lg transition-all duration-200 ${viewMode === 'grid' ? 'text-amber-700 bg-amber-100 shadow-sm' : 'text-amber-600 hover:text-amber-700 hover:bg-amber-50'}`}
                onClick={() => setViewMode('grid')}
              >
                <Grid3X3 className="h-5 w-5" />
              </button>
              <button 
                className={`p-2.5 rounded-lg transition-all duration-200 ${viewMode === 'list' ? 'text-amber-700 bg-amber-100 shadow-sm' : 'text-amber-600 hover:text-amber-700 hover:bg-amber-50'}`}
                onClick={() => setViewMode('list')}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Premium Products Grid */}
        <div className={`grid gap-8 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8' 
            : 'grid-cols-1'
        }`}>
          {filteredProducts.map((product) => (
            <div key={product.id} className={`group relative ${
              viewMode === 'list' ? 'flex gap-8' : ''
            }`}>
              {/* Product Image Container */}
              <div className={`${viewMode === 'list' ? 'w-80' : 'aspect-h-1 aspect-w-1'} w-full overflow-hidden rounded-2xl bg-gradient-to-br from-amber-100 to-orange-50 border-2 border-amber-200 shadow-lg group-hover:shadow-2xl transition-all duration-500`}>
                {/* Use serving tray image for serving tray products, custom tabletop for others */}
                {product.category === 'Serving Trays' ? (
                  <img 
                    src="/images/serving-tray-featured.jpeg"
                    alt={product.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <div className="text-center p-6">
                      <span className="text-amber-800 text-lg font-medium text-center leading-relaxed">
                        {product.name}
                      </span>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Product Details */}
              <div className={`mt-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-amber-900 leading-tight">
                      <Link href={`/products/${product.id}`} className="hover:text-amber-700 transition-colors">
                        {product.name}
                      </Link>
                    </h3>
                    <div className="mt-3 space-y-2">
                      <p className="text-sm text-amber-700 font-medium">{product.material}</p>
                      <p className="text-sm text-amber-600">{product.category}</p>
                      <p className="text-sm text-amber-800 font-semibold bg-amber-100 px-3 py-1 rounded-full inline-block">{product.construction}</p>
                    </div>
                    <p className="mt-4 text-sm text-amber-700 leading-relaxed">{product.description}</p>
                  </div>
                  <p className="text-2xl font-bold text-amber-900 ml-4">${product.price}</p>
                </div>

                {/* Add to Cart Button */}
                <div className="mt-6">
                  <button 
                    onClick={() => addToCart(product.id)}
                    className="w-full rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 px-6 py-4 text-sm font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3 group-hover:from-amber-700 group-hover:to-orange-700"
                  >
                    <ShoppingBag className="h-5 w-5" />
                    Add to Cart
                  </button>
                </div>

                {/* Featured Badge */}
                {product.featured && (
                  <div className="mt-4">
                    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-amber-100 to-orange-100 px-3 py-1.5 text-xs font-semibold text-amber-800 border border-amber-200">
                      <Star className="h-3 w-3 mr-1.5 text-amber-600" />
                      Featured Collection
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Premium Pagination */}
        <div className="mt-20 flex items-center justify-center">
          <nav className="flex items-center gap-x-2">
            <a
              href="#"
              className="min-h-[44px] min-w-[44px] flex justify-center items-center bg-white px-4 py-2.5 text-sm font-medium text-amber-700 rounded-xl border-2 border-amber-200 hover:bg-amber-50 hover:border-amber-300 transition-all duration-200 shadow-sm"
            >
              Previous
            </a>
            <a
              href="#"
              className="min-h-[44px] min-w-[44px] flex justify-center items-center bg-gradient-to-r from-amber-600 to-orange-600 px-4 py-2.5 text-sm font-semibold text-white rounded-xl border-2 border-amber-600 shadow-lg"
            >
              1
            </a>
            <a
              href="#"
              className="min-h-[44px] min-w-[44px] flex justify-center items-center bg-white px-4 py-2.5 text-sm font-medium text-amber-700 rounded-xl border-2 border-amber-200 hover:bg-amber-50 hover:border-amber-300 transition-all duration-200 shadow-sm"
            >
              2
            </a>
            <a
              href="#"
              className="min-h-[44px] min-w-[44px] flex justify-center items-center bg-white px-4 py-2.5 text-sm font-medium text-amber-700 rounded-xl border-2 border-amber-200 hover:bg-amber-50 hover:border-amber-300 transition-all duration-200 shadow-sm"
            >
              3
            </a>
            <a
              href="#"
              className="min-h-[44px] min-w-[44px] flex justify-center items-center bg-white px-4 py-2.5 text-sm font-medium text-amber-700 rounded-xl border-2 border-amber-200 hover:bg-amber-50 hover:border-amber-300 transition-all duration-200 shadow-sm"
            >
              Next
            </a>
          </nav>
        </div>

        {/* Sustainability & Craftsmanship Section */}
        <div className="mt-24 bg-gradient-to-br from-amber-50 via-orange-50/30 to-amber-100/20 rounded-3xl p-12 border border-amber-200/50">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-amber-900 mb-4">
              Crafted with Purpose
            </h2>
            <p className="text-lg text-amber-800 max-w-3xl mx-auto">
              Every piece reflects our commitment to sustainable practices, local sourcing, and the preservation of Canadian woodlands for future generations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Trees className="h-8 w-8 text-amber-700" />
              </div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Sustainable Sourcing</h3>
              <p className="text-amber-700 text-sm leading-relaxed">
                We partner with local suppliers who practice responsible forestry, ensuring the long-term health of our Canadian woodlands.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Star className="h-8 w-8 text-amber-700" />
              </div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Heirloom Quality</h3>
              <p className="text-amber-700 text-sm leading-relaxed">
                Each piece is built to last generations, reducing waste and creating timeless treasures for your family.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Mountain className="h-8 w-8 text-amber-700" />
              </div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Local Craftsmanship</h3>
              <p className="text-amber-700 text-sm leading-relaxed">
                Supporting our Calgary community while preserving traditional woodworking techniques for the modern home.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
