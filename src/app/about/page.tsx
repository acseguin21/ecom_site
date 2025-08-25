import Link from 'next/link'
import { Mountain, Trees, MapPin, Clock, Heart, Users } from 'lucide-react'

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/20">
        <div className="absolute inset-0 bg-mountain-pattern opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              Our Story
            </h1>
            <p className="mt-6 text-xl leading-8 text-slate-600 max-w-3xl mx-auto">
              From the heart of Calgary to the peaks of the Canadian Rockies, we craft wooden pieces that bring the beauty of nature into your home.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Where Mountain Meets Modern
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Alpine Woodworks YYC was born from a deep love for the natural beauty that surrounds us in Calgary and the Canadian Rockies. 
                We believe that every piece of wood has a story to tell, and we're passionate about bringing those stories to life through 
                thoughtful design and expert craftsmanship.
              </p>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Our journey began in a small workshop, inspired by the rugged landscapes and the sustainable practices of the Pacific Northwest. 
                Today, we continue to honor those traditions while embracing modern design principles that resonate with contemporary homes.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 border border-emerald-200 flex items-center justify-center">
                <div className="text-center">
                  <Mountain className="h-24 w-24 text-emerald-600 mx-auto mb-6" />
                  <span className="text-emerald-700 text-xl font-medium">Crafted in Calgary</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-emerald-600">Our Values</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              What drives us forward
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col group">
                <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-slate-900 group-hover:text-emerald-600 transition-colors">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600 group-hover:bg-emerald-700 transition-colors">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  Sustainability First
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">
                    We source our materials responsibly and use sustainable practices to ensure we're protecting the environment 
                    that inspires our work.
                  </p>
                </dd>
              </div>
              
              <div className="flex flex-col group">
                <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-slate-900 group-hover:text-emerald-600 transition-colors">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600 group-hover:bg-emerald-700 transition-colors">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  Community Focused
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">
                    We're proud to be part of the Calgary community and support local businesses and artisans whenever possible.
                  </p>
                </dd>
              </div>
              
              <div className="flex flex-col group">
                <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-slate-900 group-hover:text-emerald-600 transition-colors">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600 group-hover:bg-emerald-700 transition-colors">
                    <Trees className="h-6 w-6 text-white" />
                  </div>
                  Quality Craftsmanship
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">
                    Every piece is handcrafted with attention to detail, ensuring that our customers receive the highest quality products.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-emerald-600">Our Process</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              From tree to treasure
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                  <span className="text-2xl font-bold text-emerald-600">1</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">Source</h3>
                <p className="mt-2 text-sm text-slate-600">
                  We carefully select sustainable hardwoods from local suppliers
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                  <span className="text-2xl font-bold text-emerald-600">2</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">Design</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Each piece is thoughtfully designed with modern aesthetics
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                  <span className="text-2xl font-bold text-emerald-600">3</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">Craft</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Expert craftsmanship brings each design to life
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                  <span className="text-2xl font-bold text-emerald-600">4</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">Deliver</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Carefully packaged and delivered to your door
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Location & Hours */}
      <div className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Visit Our Workshop
              </h2>
              <div className="mt-8 space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-emerald-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Location</h3>
                    <p className="text-slate-600">Calgary, Alberta, Canada</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-emerald-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Hours</h3>
                    <p className="text-slate-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-slate-600">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-slate-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-slate-100 to-emerald-50 border border-slate-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-24 w-24 text-slate-600 mx-auto mb-6" />
                  <span className="text-slate-700 text-xl font-medium">Calgary, AB</span>
                  <p className="text-slate-500 mt-2">Heart of the Rockies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to explore our collection?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Discover handcrafted pieces that bring the beauty of the Canadian Rockies into your home.
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
                Get in Touch <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
