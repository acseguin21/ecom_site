import { Heart, Award, Users, Globe } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-amber-50 to-orange-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Our Story
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Crafting beautiful, functional pieces that bring warmth and character to your home.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
              A Passion for Woodcraft
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Our journey began in a small workshop where we discovered the magic of transforming 
              raw timber into functional art. Each piece we create is a testament to the beauty 
              and durability of natural wood.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              We believe that the items in your home should not only serve a purpose but also 
              tell a story. Our serving boards and cutting boards are crafted with this philosophy 
              in mind, combining traditional woodworking techniques with modern design sensibilities.
            </p>
            <p className="text-lg text-gray-600">
              From selecting the finest hardwoods to the final finishing touches, every step 
              is performed with care and attention to detail. The result is pieces that are 
              both beautiful and built to last.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-amber-200 to-orange-200 rounded-lg h-96 flex items-center justify-center">
            <span className="text-amber-600 text-xl font-medium text-center px-8">
              Workshop Image Placeholder
            </span>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center mb-16">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-lg bg-amber-600 mb-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Craftsmanship</h3>
              <p className="text-gray-600">
                Every piece is handcrafted with passion and precision, ensuring the highest quality.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-lg bg-amber-600 mb-4">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality</h3>
              <p className="text-gray-600">
                We use only the finest materials and traditional techniques to create lasting pieces.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-lg bg-amber-600 mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600">
                Building relationships with our customers and supporting local artisans.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-lg bg-amber-600 mb-4">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sustainability</h3>
              <p className="text-gray-600">
                Committed to responsible sourcing and environmentally conscious practices.
              </p>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center mb-16">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-amber-100 text-amber-600 text-2xl font-bold mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Material Selection</h3>
              <p className="text-gray-600">
                We carefully select premium hardwoods, considering grain patterns, color, and durability.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-amber-100 text-amber-600 text-2xl font-bold mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Crafting</h3>
              <p className="text-gray-600">
                Each piece is shaped, sanded, and finished by hand using traditional woodworking techniques.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-amber-100 text-amber-600 text-2xl font-bold mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Check</h3>
              <p className="text-gray-600">
                Every finished piece undergoes rigorous quality control before being shipped to you.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
            Ready to experience our craftsmanship?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Browse our collection of handcrafted serving boards and cutting boards, 
            and find the perfect piece for your home or as a gift.
          </p>
          <a
            href="/products"
            className="inline-flex items-center rounded-md bg-amber-600 px-8 py-3 text-lg font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
          >
            Shop Our Collection
          </a>
        </div>
      </div>
    </div>
  )
}
