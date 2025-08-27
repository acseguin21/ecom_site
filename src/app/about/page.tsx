import Link from 'next/link'
import { Mountain, Trees, MapPin, Clock, Heart, Users, Scissors, Utensils, Palette, Star } from 'lucide-react'
import { getPhoto, photos } from '../../config/photos'

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50/40 to-amber-100/30">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #fbbf24 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-amber-900 sm:text-6xl">
              Our Story
            </h1>
            <p className="mt-6 text-xl leading-8 text-amber-800 max-w-3xl mx-auto">
              Hand crafted in our workshop in beautiful Calgary, AB, we craft wooden pieces that bring the beauty of Canadian hardwoods into your home.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-24 bg-gradient-to-br from-white via-amber-50/20 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-amber-900 sm:text-4xl">
                With a Distinct Canadian Contemporary Style
              </h2>
              <p className="mt-6 text-lg leading-8 text-amber-800">
                Alpine Woodworks YYC was born from our love for the natural beauty surrounding us in Canada. From Rocky Mountain Aspens to Eastern Hard Maple, we craft wooden pieces that bring the beauty of our natural woodlands into your home.
                We specialize in crafting premium heirloom quality cutting boards, charcuterie boards and serving trays that are timeless and elegant. We also are able to help finish your projects with a tastefully accented custom top.
              </p>
              <p className="mt-6 text-lg leading-8 text-amber-800">
                Our journey begins in a cozy workshop in Calgary, AB, inspired by our travels from coast to coast and our passion for woodworking. 
                We are proud to be a part of the Calgary community and support local businesses and artisans whenever possible. 
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 border-2 border-amber-200 flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <Mountain className="h-24 w-24 text-amber-700 mx-auto mb-6" />
                  <span className="text-amber-800 text-xl font-medium">Crafted in Calgary</span>
                  <p className="text-amber-700 text-sm mt-2">Inspired by nature and contemporary design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Specialties Section */}
      <div className="py-24 bg-gradient-to-b from-white to-amber-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-amber-600">Our Specialties</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-amber-900 sm:text-4xl">
              Premium edge grain and end grain boards for every occasion
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col group">
                <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-amber-900 group-hover:text-amber-700 transition-colors">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-600 group-hover:bg-amber-700 transition-colors">
                    <Scissors className="h-6 w-6 text-white" />
                  </div>
                  Cutting Boards
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-amber-800">
                  <p className="flex-auto">
                    Professional-grade edge grain and end grain cutting boards crafted from durable hardwoods like maple and walnut. Perfect for daily use or to impress your guests, these boards are designed to last generations while maintaining their beauty and functionality.
                  </p>
                </dd>
              </div>
              
              <div className="flex flex-col group">
                <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-amber-900 group-hover:text-amber-700 transition-colors">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-600 group-hover:bg-amber-700 transition-colors">
                    <Utensils className="h-6 w-6 text-white" />
                  </div>
                  Charcuterie Boards
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-amber-800">
                  <p className="flex-auto">
                    Elegant serving boards featuring contemporary accents. Perfect for entertaining and holiday gatherings, these boards showcase your charcuterie arrangements while adding sophistication to any gathering.
                  </p>
                </dd>
              </div>
              
              <div className="flex flex-col group">
                <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-amber-900 group-hover:text-amber-700 transition-colors">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-600 group-hover:bg-amber-700 transition-colors">
                    <Palette className="h-6 w-6 text-white" />
                  </div>
                  Serving Trays
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-amber-800">
                  <p className="flex-auto">
                    Beautiful serving trays that incorporate eye catching patterns and colours. These versatile pieces are perfect for coffee service, breakfast in bed, or as decorative elements in your home.
                  </p>
                </dd>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Projects Section */}
      <div className="py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div 
                className="aspect-square rounded-2xl border-2 border-amber-200 overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl"
                style={{
                  backgroundImage: 'url(/images/custom-tabletop.jpeg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  minHeight: '300px',
                  minWidth: '300px'
                }}
              />
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-amber-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-amber-900 sm:text-4xl">
                Custom Creations
              </h2>
              <p className="mt-6 text-lg leading-8 text-amber-800">
                Have a specific vision in mind? We love bringing custom projects to life! Whether it's a unique cutting board design, 
                a special serving piece for your restaurant, or a one-of-a-kind gift, we work closely with you to create exactly what you envision.
              </p>
              <p className="mt-6 text-lg leading-8 text-amber-800">
                We also specialize in custom tabletops and bench tops - perfect for side tables, front entry tables, or sitting benches. 
                These can be designed to work with metal legs for a modern industrial look, or as drop-in retrofits tops for existing furniture and cabinets. 
                From selecting the perfect combination of Canadian hardwoods to incorporating tropical accents, 
                every custom piece is a collaboration between your imagination and our expertise.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-24 bg-gradient-to-b from-amber-50/30 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-amber-600">Our Values</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-amber-900 sm:text-4xl">
              What drives us forward
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col group">
                <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-amber-900 group-hover:text-amber-700 transition-colors">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-600 group-hover:bg-amber-700 transition-colors">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  Sustainability First
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-amber-800">
                  <p className="flex-auto">
                    We source our Canadian hardwoods responsibly and use sustainable practices to protect the environment 
                    Nature inspires every element of our work and we are proud to help preserve it for future generations.
                  </p>
                </dd>
              </div>
              
              <div className="flex flex-col group">
                <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-amber-900 group-hover:text-amber-700 transition-colors">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-600 group-hover:bg-amber-700 transition-colors">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  Community Focused
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-amber-800">
                  <p className="flex-auto">
                    We're proud to be part of the Calgary community and support local businesses and artisans whenever possible.
                  </p>
                </dd>
              </div>
              
              <div className="flex flex-col group">
                <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-amber-900 group-hover:text-amber-700 transition-colors">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-600 group-hover:bg-amber-700 transition-colors">
                    <Trees className="h-6 w-6 text-white" />
                  </div>
                  Quality Craftsmanship
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-amber-800">
                  <p className="flex-auto">
                    Every piece is handcrafted with attention to detail, ensuring that our customers receive the highest quality products 
                    made from the finest Canadian hardwoods.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-24 bg-gradient-to-br from-white via-amber-50/20 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-amber-600">Our Process</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-amber-900 sm:text-4xl">
              From rough sawn hardwood to finished heirloom quality pieces
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 shadow-md">
                  <span className="text-2xl font-bold text-amber-700">1</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-amber-900">Source</h3>
                <p className="mt-2 text-sm text-amber-800">
                  We carefully select sustainablely harvested Canadian hardwoods from local suppliers
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 shadow-md">
                  <span className="text-2xl font-bold text-amber-700">2</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-amber-900">Design</h3>
                <p className="mt-2 text-sm text-amber-800">
                  Each piece is thoughtfully designed with contemporary aesthetics and functionality in mind
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 shadow-md">
                  <span className="text-2xl font-bold text-amber-700">3</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-amber-900">Craft</h3>
                <p className="mt-2 text-sm text-amber-800">
                  Expert craftsmanship brings each design to life using traditional woodworking techniques
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 shadow-md">
                  <span className="text-2xl font-bold text-amber-700">4</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-amber-900">Finish</h3>
                <p className="mt-2 text-sm text-amber-800">
                  Carefully finished and packaged to preserve the natural beauty of the Canadian hardwoods
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Location & Hours */}
      <div className="py-24 bg-gradient-to-b from-amber-50/30 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-amber-900 sm:text-4xl">
                Welcome to Our Virtual Workshop
              </h2>
              <div className="mt-8 space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-amber-900">Location</h3>
                    <p className="text-amber-800">Calgary, Alberta, Canada</p>
                    <p className="text-amber-700 text-sm">Gateway to the Canadian Rockies</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-amber-900">Virtual Workshop Consultation</h3>
                    <p className="text-amber-700 text-sm">Please contact us via email to schedule a virtual consultation</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 border-2 border-amber-200 flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <MapPin className="h-24 w-24 text-amber-700 mx-auto mb-6" />
                  <span className="text-amber-800 text-xl font-medium">Calgary, AB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-amber-900 via-orange-800 to-amber-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to explore our collection?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-amber-100">
              Discover handcrafted pieces that bring the beauty of Canadian woodland hardwoods and the spirit of the Rockies into your home.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link 
                href="/products"
                className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-amber-900 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Shop Now
              </Link>
              <Link 
                href="mailto:alpinewoodworksyyc@gmail.com"
                className="text-lg font-semibold leading-6 text-white hover:text-amber-200 transition-colors"
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
