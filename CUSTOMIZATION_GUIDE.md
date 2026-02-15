# Quick Customization Guide for ONE COOL Website

## 🎯 Quick Changes

### 1. Update Phone Number

Find and replace `+201007596703` with your phone number in:

- **Navbar.jsx** - Line 37 (Call Now button)
- **ProductCard.jsx** - WhatsApp link generation
- **Footer.jsx** - Contact section

### 2. Update Email

Replace `info@onecool.com` with your email in:

- **Footer.jsx** - Line 62

### 3. Change Company Name

Replace `ONE COOL` with your company name in:

- **Navbar.jsx** - Line 19 (Logo)
- **Footer.jsx** - Line 10

### 4. Update Website Title & Description

Edit in **layout.js**:

```javascript
export const metadata = {
  title: "YOUR COMPANY - AC Sales & Installation",
  description: "Your custom description here",
};
```

## 🎨 Color Customization

### Change Primary Color (Blue → Your Color)

Search and replace in all components:

- `bg-blue-600` → `bg-YOUR-COLOR-600`
- `bg-blue-700` → `bg-YOUR-COLOR-700`
- `text-blue-600` → `text-YOUR-COLOR-600`
- `border-blue-200` → `border-YOUR-COLOR-200`

**Example**: Change blue to green:

- `bg-blue-600` → `bg-green-600`
- `bg-blue-700` → `bg-green-700`

**Tailwind Color Options**:

- red, orange, yellow, green, teal, cyan, blue, indigo, purple, pink

### Change WhatsApp Button Color

In **ProductCard.jsx**, line 48:

```javascript
className = "... bg-green-500 ... bg-green-600";
```

Change `green` to any color for different appearance.

## 📝 Content Updates

### Update Hero Section Text

**Hero.jsx**:

- Line 24: Main headline
- Line 28: Subheading/description
- Line 33: CTA button text
- Line 40: Secondary button text

### Update Services

**Services.jsx** - Modify the `services` array:

```javascript
const services = [
  {
    id: 1,
    title: "Your Service",
    description: "Service description",
    icon: "⚙️", // Use any emoji
    color: "blue", // or 'cyan', 'indigo'
  },
  // ... more services
];
```

### Update Products

**Products.jsx** - Add or modify the `products` array:

```javascript
const products = [
  {
    id: 1,
    title: "Product Name",
    badge: "Badge Text",
    specs: ["Spec 1", "Spec 2", "Spec 3", "Spec 4"],
    price: "EGP PRICE",
    originalPrice: "EGP OLD_PRICE", // Remove this line for no discount
  },
];
```

## 🖼️ Product Image Placeholders

Current: Uses a snowflake emoji (❄️)  
To replace with real images:

In **ProductCard.jsx**, replace the placeholder section (lines 12-18):

```javascript
// Current (emoji):
<div className="text-6xl text-gray-400">❄️</div>;

// Replace with Image:
import Image from "next/image";

<Image
  src="/path/to/image.jpg"
  alt={product.title}
  width={300}
  height={200}
  className="w-full h-full object-cover"
/>;
```

## 📱 Add New Service

1. Open **Services.jsx**
2. Add to `services` array:

```javascript
{
  id: 5,
  title: 'New Service',
  description: 'Description here',
  icon: '🎯', // Your emoji
  color: 'blue',
}
```

## 📦 Add New Product

1. Open **Products.jsx**
2. Add to `products` array:

```javascript
{
  id: 7,
  title: 'Product Name',
  badge: 'New',
  specs: ['1HP', 'Inverter', 'Cold/Heat', 'Silent'],
  price: 'EGP 9,999',
  originalPrice: 'EGP 12,000', // optional
}
```

## 📞 Add WhatsApp Contact to Hero

In **Hero.jsx**, add to the CTA buttons section:

```javascript
<a
  href="https://wa.me/201007596703"
  className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600"
>
  Chat on WhatsApp
</a>
```

## 🔗 Add New Navigation Link

In **Navbar.jsx**, add to the links section (around line 30):

```javascript
<a href="#section-id" className={`transition-colors ...`}>
  Section Name
</a>
```

Then add the matching section ID to the page component.

## 🚀 Advanced Customization

### Responsive Breakpoints

Components use these Tailwind breakpoints:

- `sm:` (640px) - Tablets
- `lg:` (1024px) - Desktops

To adjust, modify all breakpoint prefixes in components.

### Animation Speeds

Hover animations and transitions use:

- `transition-all duration-300` - 300ms animations
- `hover:scale-105` - 5% scale on hover
- `animate-bounce` - Bouncing animation

Change `duration-300` to `duration-500` for slower animations.

### Font Sizes

Responsive font sizes are set in components:

- `text-3xl sm:text-5xl lg:text-6xl` - Scales based on screen size

## 🎯 SEO Updates

Update metadata in **layout.js**:

```javascript
export const metadata = {
  title: "Your Company - AC Services",
  description: "Description for search engines...",
};
```

Add schema markup for local business (optional):
Add in **layout.js** within `<head>`:

```javascript
<script type="application/ld+json">{
  "@context": "https://schema.org/",
  "@type": "LocalBusiness",
  "name": "ONE COOL",
  "telephone": "+201007596703"
}</script>
```

## 📞 Support

For template-specific questions or support, ensure all imports use:

```javascript
import ComponentName from "@/components/ComponentName";
```

The `@/` alias points to the `src/` directory automatically in Next.js.

---

**Happy Customizing!** 🎉
