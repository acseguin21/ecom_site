import Link from 'next/link'
import { ShoppingBag, Star, Truck, Shield } from 'lucide-react'

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-amber-50 to-orange-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Artisan Woodcrafts
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Discover beautifully crafted serving boards and cutting boards, each piece 
              handcrafted with premium materials and timeless design. Perfect as gifts 
              or to elevate your kitchen experience.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/products"
                className="rounded-md bg-amber-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
              >
                Shop Now
              </Link>
              <Link
                href="/about"
                className="text-lg font-semibold leading-6 text-gray-900 hover:text-amber-600"
              >
                Learn More <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-amber-600">Why Choose Our Woodcrafts</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Handcrafted with passion and precision
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <Star className="h-5 w-5 flex-none text-amber-600" />
                Premium Quality
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Each piece is carefully selected from the finest hardwoods, ensuring durability 
                  and beauty that lasts for generations.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <Truck className="h-5 w-5 flex-none text-amber-600" />
                Fast Shipping
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Carefully packaged and shipped to your door, with tracking and insurance 
                  for peace of mind.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <Shield className="h-5 w-5 flex-none text-amber-600" />
                Satisfaction Guaranteed
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  We stand behind every piece. If you're not completely satisfied, 
                  we'll make it right.
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Featured Products Preview */}
      <div className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-amber-600">Featured Collection</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our most popular pieces
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* Product Placeholder 1 */}
            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
                <div className="h-64 w-full bg-gradient-to-br from-amber-200 to-orange-200 flex items-center justify-center">
                  <span className="text-amber-600 text-lg font-medium">Serving Board Collection</span>
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href="/products">
                      <span aria-hidden="true" className="absolute inset-0" />
                      Artisan Serving Board
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Walnut & Maple</p>
                </div>
                <p className="text-sm font-medium text-gray-900">$89</p>
              </div>
            </div>

            {/* Product Placeholder 2 */}
            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
                <div className="h-64 w-full bg-gradient-to-br from-amber-200 to-orange-200 flex items-center justify-center">
                  <span className="text-amber-600 text-lg font-medium">Cutting Board Set</span>
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href="/products">
                      <span aria-hidden="true" className="absolute inset-0" />
                      Premium Cutting Board
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Cherry Wood</p>
                </div>
                <p className="text-sm font-medium text-gray-900">$129</p>
              </div>
            </div>

            {/* Product Placeholder 3 */}
            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
                <div className="h-64 w-full bg-gradient-to-br from-amber-200 to-orange-200 flex items-center justify-center">
                  <span className="text-amber-600 text-lg font-medium">Gift Set</span>
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href="/products">
                      <span aria-hidden="true" className="absolute inset-0" />
                      Holiday Gift Collection
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Mixed Woods</p>
                </div>
                <p className="text-sm font-medium text-gray-900">$199</p>
              </div>
            </div>
          </div>
          <div className="mt-16 text-center">
            <Link
              href="/products"
              className="inline-flex items-center rounded-md bg-amber-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              View All Products
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-amber-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to elevate your kitchen?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-amber-100">
              Each piece tells a story of craftsmanship and tradition. Start your collection today.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/products"
                className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-amber-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Shop Now
              </Link>
              <Link
                href="/contact"
                className="text-lg font-semibold leading-6 text-white hover:text-amber-100"
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
