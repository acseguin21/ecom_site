import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-amber-50 to-orange-100">
        <div className="absolute inset-0">
          <img 
            src="/images/serving-tray-featured.jpeg"
            alt="Alpine Woodworks Serving Tray"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/30 via-amber-800/20 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
                  <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-amber-900 sm:text-6xl">
            Get in Touch
          </h1>
          <p className="mt-6 text-lg leading-8 text-amber-800 max-w-3xl mx-auto">
            Have questions about our woodcrafts? Want to place a custom order? 
            We'd love to hear from you.
          </p>
        </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-amber-900 mb-6">
              Send us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                                    <label htmlFor="first-name" className="block text-sm font-medium text-amber-800 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    className="block w-full rounded-lg border-amber-200 shadow-sm focus:border-amber-500 focus:ring-amber-500/20 sm:text-sm bg-white/80"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-amber-800 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    className="block w-full rounded-lg border-amber-200 shadow-sm focus:border-amber-500 focus:ring-amber-500/20 sm:text-sm bg-white/80"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-amber-800 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-lg border-amber-200 shadow-sm focus:border-amber-500 focus:ring-amber-500/20 sm:text-sm bg-white/80"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-amber-800 mb-2">
                  Phone Number
                  </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="block w-full rounded-lg border-amber-200 shadow-sm focus:border-amber-500 focus:ring-amber-500/20 sm:text-sm bg-white/80"
                  placeholder="(555) 123-4567"
                  />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-amber-800 mb-2">
                  Subject
                </label>
                <select
                  name="subject"
                  id="subject"
                  className="block w-full rounded-lg border-amber-200 shadow-sm focus:border-amber-500 focus:ring-amber-500/20 sm:text-sm bg-white/80"
                >
                  <option>General Inquiry</option>
                  <option>Custom Order</option>
                  <option>Product Question</option>
                  <option>Wholesale Inquiry</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={6}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
                  placeholder="Tell us about your inquiry..."
                />
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-amber-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
              Contact Information
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-amber-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <p className="mt-1 text-gray-600">hello@artisanwoodcrafts.com</p>
                  <p className="text-sm text-gray-500">We typically respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-amber-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                  <p className="mt-1 text-gray-600">(555) 123-4567</p>
                  <p className="text-sm text-gray-500">Monday - Friday, 9 AM - 5 PM EST</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-amber-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Workshop</h3>
                  <p className="mt-1 text-gray-600">
                    123 Craftsmanship Lane<br />
                    Woodworking District<br />
                    Artisan City, AC 12345
                  </p>
                  <p className="text-sm text-gray-500">By appointment only</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Clock className="h-6 w-6 text-amber-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Business Hours</h3>
                  <p className="mt-1 text-gray-600">
                    Monday - Friday: 9:00 AM - 5:00 PM<br />
                    Saturday: 10:00 AM - 3:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-12">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">Do you ship internationally?</h4>
                  <p className="text-sm text-gray-600">
                    Currently, we ship within the continental United States. International shipping 
                    may be available for custom orders.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Can I request a custom design?</h4>
                  <p className="text-sm text-gray-600">
                    Absolutely! We love creating custom pieces. Contact us to discuss your vision 
                    and get a quote.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">What's your return policy?</h4>
                  <p className="text-sm text-gray-600">
                    We offer a 30-day return policy for unused items in original condition. 
                    Custom orders are non-returnable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
