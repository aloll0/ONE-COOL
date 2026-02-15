# ONE COOL - Modern AC Sales Website

A professional, responsive Next.js-based website for AC sales and services featuring a modern design with Tailwind CSS.

## 🚀 Features

### ✨ Key Components

1. **Navbar**
   - Transparent by default, becomes solid white on scroll
   - Sticky navigation with smooth scroll behavior
   - "Call Now" button with direct phone integration
   - Responsive hamburger menu ready

2. **Hero Section**
   - Eye-catching gradient background with patterns
   - Compelling headline and subheading
   - Multiple CTA buttons
   - Trust badges (Experience, Customer Count, Support Hours)
   - Animated scroll indicator

3. **Services Grid**
   - 4 Service cards (Installation, Maintenance, Repair, Central AC)
   - Icon-based visual design
   - Hover animations with scale effect
   - Color-coded service cards

4. **Product Section** (The Core Feature)
   - Responsive grid layout (1 col mobile, 2 cols tablet, 3 cols desktop)
   - 6 Product cards with:
     - Product image placeholder with hover animation
     - Title and badge (e.g., "Best Seller", "New", "Premium")
     - Technical specifications display
     - Pricing with original price strikethrough
     - Quick View button
     - Integrated WhatsApp button

5. **WhatsApp Integration**
   - Direct WhatsApp button on each product card
   - Pre-filled message with product name
   - Opens: `https://wa.me/201007596703?text=Hi, I am interested in [Product Name] - please provide more details.`
   - Green styling matching WhatsApp brand

6. **Footer**
   - Company information
   - Quick links (Services, Products)
   - Contact information
   - Social media integration
   - Legal links

## 🎨 Color Palette

- **Primary Blue**: `bg-blue-600`, `bg-blue-700` (hover)
- **White**: Clean backgrounds and text
- **Light Gray**: `bg-gray-50`, `bg-gray-100` for sections
- **Dark Gray**: `bg-gray-900` for footer
- **Accent Green**: `bg-green-500` for WhatsApp button

## 📱 Responsive Design

- **Mobile-First Approach**: Designed for mobile devices first
- **Breakpoints Used**:
  - `sm:` - Small screens (640px)
  - `lg:` - Large screens (1024px)
- **Touch-Friendly**: Large tap targets on mobile
- **Flexible Grid**: Components adapt to all screen sizes

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.js          (Root layout with metadata)
│   ├── page.js            (Main page with all components)
│   └── globals.css        (Global Tailwind imports)
├── components/
│   ├── Navbar.jsx         (Header with scroll detection)
│   ├── Hero.jsx           (Hero section with CTA)
│   ├── Services.jsx       (Services grid)
│   ├── ProductCard.jsx    (Individual product card)
│   ├── Products.jsx       (Products grid container)
│   └── Footer.jsx         (Footer section)
```

## 🛠️ Tech Stack

- **Next.js 16.1.6** - React framework
- **React 19.2.3** - UI library
- **Tailwind CSS 4** - Utility-first CSS
- **JavaScript/JSX** - Language

## 🚀 Getting Started

### Development

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

### Production Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## 📦 Product Card Features

Each product card includes:

1. **Visual Appeal**
   - Hover scale animation (1.05x)
   - Shadow effect on hover
   - Smooth transitions

2. **Product Information**
   - Title
   - Badge (Best Seller, New, Premium, Budget, Eco Friendly, Popular)
   - Multiple specs displayed in an easy-to-read format
   - Price display with optional strikethrough original price

3. **Interaction**
   - Quick View button for product details
   - WhatsApp button that:
     - Opens WhatsApp directly with pre-filled message
     - Includes product name in the message
     - Works on desktop and mobile

## 🔧 Customization Guide

### Change Colors

All color classes use Tailwind color names. Update them in component JSX:

- `bg-blue-600` → Change to any Tailwind color
- `text-white` → Text colors
- `border-gray-200` → Border colors

### Update Contact Information

Replace phone number `+201007596703` in:

- `Navbar.jsx` - Call Now button
- `ProductCard.jsx` - WhatsApp links
- `Footer.jsx` - Contact section

### Add More Products

In `Products.jsx`, add new objects to the `products` array:

```javascript
{
  id: 7,
  title: 'Product Name',
  badge: 'Badge Name',
  specs: ['Spec 1', 'Spec 2', 'Spec 3'],
  price: 'EGP X,XXX',
  originalPrice: 'EGP Y,YYY', // optional
}
```

### Add More Services

In `Services.jsx`, add to the `services` array in a similar manner.

## 📊 Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔐 Performance

- Static generation where possible
- CSS preprocessing with Tailwind
- Optimized images with Image component
- Minimal JavaScript bundle

## 🎯 Features Roadmap

Future enhancements could include:

- Product detail pages
- Shopping cart functionality
- Customer testimonials section
- Blog/News section
- Image gallery for products
- Live chat integration
- Customer reviews/ratings

## 📞 Contact Information

**Phone**: +20 100 759 6703  
**WhatsApp**: Available on all product cards  
**Email**: info@onecool.com  
**Location**: Cairo, Egypt

## 📄 License

© 2024 ONE COOL. All rights reserved.
