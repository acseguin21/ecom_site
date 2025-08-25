# Artisan Woodcrafts Ecommerce Platform

A modern, self-hosted ecommerce website built with Next.js for showcasing and selling handcrafted serving boards and cutting boards.

## 🚀 Features

- **Beautiful Homepage** - Showcases your woodcrafts with compelling copy and featured products
- **Product Catalog** - Grid layout with filtering by category and material
- **Shopping Cart** - Functional cart with quantity management and order summary
- **Responsive Design** - Mobile-first design that looks great on all devices
- **Modern UI** - Clean, professional design using Tailwind CSS
- **SEO Optimized** - Proper metadata and semantic HTML structure
- **Fast Performance** - Built with Next.js for optimal loading speeds

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript
- **Payment**: Stripe (ready for integration)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 18 or higher)
- npm or yarn package manager

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### 3. Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx          # Homepage
│   ├── products/         # Products page
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── cart/             # Shopping cart
│   └── layout.tsx        # Root layout with navigation
├── components/            # Reusable components
│   └── Navigation.tsx    # Header navigation component
└── globals.css           # Global styles and Tailwind CSS
```

## 🎨 Customization

### Branding
- Update the business name in `src/components/Navigation.tsx`
- Modify colors in `tailwind.config.js` (currently uses amber/orange theme)
- Update metadata in `src/app/layout.tsx`

### Products
- Replace mock product data in `src/app/products/page.tsx` with your actual products
- Add real product images (replace placeholder gradients)
- Update pricing and descriptions

### Content
- Customize the about page content in `src/app/about/page.tsx`
- Update contact information in `src/app/contact/page.tsx`
- Modify homepage copy in `src/app/page.tsx`

## 🔧 Next Steps

### 1. Add Real Product Images
Replace the placeholder gradients with actual photos of your woodcrafts:
- Use high-quality, well-lit images
- Show multiple angles of each piece
- Include close-ups of wood grain and craftsmanship

### 2. Integrate Payment Processing
Set up Stripe for secure payments:
```bash
npm install @stripe/stripe-js stripe
```
- Create a Stripe account
- Add your API keys to environment variables
- Implement checkout functionality

### 3. Add Product Management
Create an admin panel to:
- Add/edit products
- Manage inventory
- Process orders
- Upload product images

### 4. Database Integration
Consider adding a database for:
- Product catalog
- User accounts
- Order management
- Customer data

### 5. Email Integration
Set up email notifications for:
- Order confirmations
- Shipping updates
- Customer inquiries

### 6. Analytics
Add tracking for:
- Website traffic
- Product views
- Conversion rates
- Customer behavior

## 🌐 Deployment

### Self-Hosting Options

1. **VPS/Dedicated Server**
   - DigitalOcean, Linode, or AWS EC2
   - Install Node.js and PM2
   - Set up reverse proxy with Nginx

2. **Shared Hosting**
   - Many shared hosting providers support Node.js
   - Upload built files and configure

3. **Docker**
   - Create Dockerfile for containerized deployment
   - Easy scaling and management

### Environment Variables
Create a `.env.local` file for production:
```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_key
STRIPE_SECRET_KEY=your_stripe_secret
DATABASE_URL=your_database_url
```

## 📱 Mobile Optimization

The site is already mobile-responsive, but consider:
- Testing on various devices
- Optimizing images for mobile
- Ensuring fast loading on slower connections

## 🔒 Security Considerations

- Keep dependencies updated
- Use HTTPS in production
- Implement proper input validation
- Secure payment processing
- Regular security audits

## 📈 Performance Optimization

- Optimize images (WebP format, proper sizing)
- Implement lazy loading
- Use Next.js Image component
- Consider CDN for static assets
- Monitor Core Web Vitals

## 🆘 Support

For questions or issues:
1. Check the Next.js documentation
2. Review Tailwind CSS documentation
3. Check browser console for errors
4. Verify all dependencies are installed

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ for Artisan Woodcrafts**

Start selling your beautiful woodcrafts online today!
