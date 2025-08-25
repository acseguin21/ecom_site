import Link from 'next/link'
import { Mountain, Trees, Sparkles, ArrowRight, Star, Truck, Shield } from 'lucide-react'

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/20" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23e2e8f0" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          <div className="text-center">
            {/* Brand Badge */}
            <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2 mb-8">
              <Mountain className="h-4 w-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700">Made in Calgary, AB</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-700 bg-clip-text text-transparent">
                Alpine Woodworks
              </span>
              <br />
              <span className="text-3xl lg:text-4xl font-medium text-slate-600 mt-4 block">
                Where Mountain Meets Modern
              </span>
            </h1>
            
            <p className="mt-8 text-xl leading-8 text-slate-600 max-w-3xl mx-auto">
              Discover handcrafted wooden pieces inspired by the Pacific Northwest. Each creation tells a story of craftsmanship, 
              sustainability, and the rugged beauty of the Canadian Rockies.
            </p>
            
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/products"
                className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Explore Collection
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/about"
                className="inline-flex items-center justify-center rounded-full border-2 border-slate-300 px-8 py-4 text-lg font-semibold text-slate-700 hover:border-emerald-400 hover:text-emerald-700 transition-all duration-200"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <Trees className="h-16 w-16 text-emerald-600" />
        </div>
        <div className="absolute top-40 right-20 opacity-20">
          <Mountain className="h-20 w-20 text-slate-600" />
        </div>
        <div className="absolute bottom-20 left-1/4 opacity-20">
          <Sparkles className="h-12 w-12 text-teal-500" />
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-emerald-600">Why Choose Alpine Woodworks</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Crafted for the modern home
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Every piece is thoughtfully designed and handcrafted using sustainable materials, 
              inspired by the natural beauty that surrounds us in the Canadian Rockies.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col group">
                <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-slate-900 group-hover:text-emerald-600 transition-colors">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600 group-hover:bg-emerald-700 transition-colors">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  Premium Quality
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">
                    Each piece is carefully crafted from the finest hardwoods, ensuring durability and beauty that lasts for generations.
                  </p>
                </dd>
              </div>
              
              <div className="flex flex-col group">
                <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-slate-900 group-hover:text-emerald-600 transition-colors">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600 group-hover:bg-emerald-700 transition-colors">
                    <Truck className="h-6 w-6 text-white" />
                  </div>
                  Local & Sustainable
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">
                    Sourced locally and crafted with sustainable practices, supporting our community and protecting our environment.
                  </p>
                </dd>
              </div>
              
              <div className="flex flex-col group">
                <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-slate-900 group-hover:text-emerald-600 transition-colors">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600 group-hover:bg-emerald-700 transition-colors">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  Lifetime Guarantee
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">
                    We stand behind every piece. If you're not completely satisfied, we'll make it right.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Featured Collection */}
      <div className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-emerald-600">Featured Collection</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Our most popular pieces
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* Product 1 */}
            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 to-emerald-50 border border-slate-200">
                <div className="h-80 w-full bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <div className="text-center">
                    <Trees className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
                    <span className="text-emerald-700 text-lg font-medium">Serving Board Collection</span>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-slate-900">
                  <Link href="/products" className="hover:text-emerald-600 transition-colors">
                    <span aria-hidden="true" className="absolute inset-0" />
                    Alpine Serving Board
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-slate-500">Walnut & Maple</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">$89</p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 to-emerald-50 border border-slate-200">
                <div className="h-80 w-full bg-gradient-to-br from-teal-100 to-emerald-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <div className="text-center">
                    <Mountain className="h-16 w-16 text-teal-600 mx-auto mb-4" />
                    <span className="text-teal-700 text-lg font-medium">Cutting Board Set</span>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-slate-900">
                  <Link href="/products" className="hover:text-emerald-600 transition-colors">
                    <span aria-hidden="true" className="absolute inset-0" />
                    Rocky Mountain Cutting Board
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-slate-500">Cherry Wood</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">$129</p>
              </div>
            </div>

            {/* Product 3 */}
            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 to-emerald-50 border border-slate-200">
                <div className="h-80 w-full bg-gradient-to-br from-slate-100 to-emerald-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <div className="text-center">
                    <Sparkles className="h-16 w-16 text-slate-600 mx-auto mb-4" />
                    <span className="text-slate-700 text-lg font-medium">Gift Collection</span>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-slate-900">
                  <Link href="/products" className="hover:text-emerald-600 transition-colors">
                    <span aria-hidden="true" className="absolute inset-0" />
                    YYC Holiday Collection
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-slate-500">Mixed Woods</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">$199</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link 
              href="/products"
              className="group inline-flex items-center rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to bring the mountains home?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Each piece tells a story of craftsmanship and the rugged beauty of the Canadian Rockies. 
              Start your collection today.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link 
                href="/products"
                className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-slate-900 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Shop Now
              </Link>
              <Link 
                href="/contact"
                className="text-lg font-semibold leading-6 text-white hover:text-emerald-300 transition-colors"
              >
                Contact Us <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
