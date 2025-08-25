import { Filter, Grid3X3, List } from 'lucide-react'

// Mock product data - you'll replace this with your actual products
const products = [
  {
    id: 1,
    name: 'Artisan Serving Board - Walnut & Maple',
    price: 89,
    category: 'Serving Boards',
    material: 'Walnut & Maple',
    description: 'Beautifully crafted serving board perfect for charcuterie, cheese, or as a stunning centerpiece.',
    image: '/placeholder-serving-board.jpg',
    featured: true,
  },
  {
    id: 2,
    name: 'Premium Cutting Board - Cherry Wood',
    price: 129,
    category: 'Cutting Boards',
    material: 'Cherry Wood',
    description: 'Professional-grade cutting board made from premium cherry wood, perfect for daily use.',
    image: '/placeholder-cutting-board.jpg',
    featured: true,
  },
  {
    id: 3,
    name: 'Holiday Gift Collection',
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
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Our Woodcrafts</h1>
          <p className="mt-4 text-lg text-gray-600">
            Discover our collection of handcrafted serving boards and cutting boards, 
            each piece tells a story of craftsmanship and tradition.
          </p>
        </div>

        {/* Filters and View Options */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <span className="text-sm font-medium text-gray-700">Filters:</span>
            </div>
            
            {/* Category Filter */}
            <select className="rounded-md border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500">
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            {/* Material Filter */}
            <select className="rounded-md border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500">
              {materials.map((material) => (
                <option key={material} value={material}>{material}</option>
              ))}
            </select>
          </div>

          {/* View Options */}
          <div className="flex items-center gap-2">
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <Grid3X3 className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <List className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
                <div className="h-64 w-full bg-gradient-to-br from-amber-200 to-orange-200 flex items-center justify-center">
                  <span className="text-amber-600 text-lg font-medium text-center px-4">
                    {product.name}
                  </span>
                </div>
              </div>
              
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={`/products/${product.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.material}</p>
                  <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${product.price}</p>
              </div>

              <div className="mt-4">
                <button className="w-full rounded-md bg-amber-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600">
                  Add to Cart
                </button>
              </div>

              {product.featured && (
                <div className="absolute top-2 right-2">
                  <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
                    Featured
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-16 flex items-center justify-center">
          <nav className="flex items-center gap-x-1">
            <a
              href="#"
              className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-white px-3 py-2 text-sm font-medium text-gray-500 rounded-md border border-gray-300 hover:bg-gray-50"
            >
              Previous
            </a>
            <a
              href="#"
              className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-amber-600 px-3 py-2 text-sm font-medium text-white rounded-md border border-amber-600"
            >
              1
            </a>
            <a
              href="#"
              className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-white px-3 py-2 text-sm font-medium text-gray-500 rounded-md border border-gray-300 hover:bg-gray-50"
            >
              2
            </a>
            <a
              href="#"
              className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-white px-3 py-2 text-sm font-medium text-gray-500 rounded-md border border-gray-300 hover:bg-gray-50"
            >
              3
            </a>
            <a
              href="#"
              className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-white px-3 py-2 text-sm font-medium text-gray-500 rounded-md border border-gray-300 hover:bg-gray-50"
            >
              Next
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}
