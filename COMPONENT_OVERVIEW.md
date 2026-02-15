# Component Overview

## 📋 Component Structure

### 🔝 Navbar.jsx

**Location**: `src/components/Navbar.jsx`

**Features**:

- Transparent navbar that becomes solid white on scroll (50px threshold)
- Fixed positioning with z-50 to stay on top
- Dynamic navigation links (Services, Products, About)
- "Call Now" button with phone integration
- Smooth color transitions

**State Management**:

- Uses `useState` for scroll tracking
- Uses `useEffect` with window.scrollY listener

**Customization**:

- Change scroll threshold: Line 15 `if (window.scrollY > 50)`
- Update navigation links: Lines 35-45
- Change phone number: Line 51

**Responsive**:

- Hidden nav links on mobile (use `hidden md:flex`)
- Logo always visible
- Button always visible

---

### 🎯 Hero.jsx

**Location**: `src/components/Hero.jsx`

**Features**:

- Full-screen hero section (h-screen)
- Gradient background (blue to darker blue)
- SVG dot pattern background
- Compelling headline with color accent
- Multiple CTA buttons
- Three trust badges with icons
- Animated scroll indicator (bounce animation)

**Layout**:

- Flexbox centered content
- Responsive text sizes (sm:, lg: prefixes)
- Mobile-first padding

**Customization**:

- Headline: Line 24
- Subheading: Line 28
- Button texts: Lines 33, 40
- Trust badges: Lines 47-60
- Colors: Change `from-blue-600 to-blue-800`

**Interactive Elements**:

- Scroll indicator bounces continuously
- Buttons link to relevant sections

---

### 🛠️ Services.jsx

**Location**: `src/components/Services.jsx`

**Features**:

- Grid layout of 4 service cards
- Color-coded cards (blue, cyan, indigo)
- Hover scale animation (1.05x)
- Emoji-based icons
- "Learn More" links

**Layout**:

- `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`
- 6 units gap with responsive adjustment

**Services Included**:

1. Installation ⚙️
2. Maintenance 🔧
3. Repair 🛠️
4. Central AC ❄️

**Customization**:

- Add services: Modify `services` array (lines 3-21)
- Change emojis: Update `icon` property
- Change colors: Modify `color` property and `colorClasses` object
- Update descriptions: Edit `description` field

---

### 🛒 ProductCard.jsx

**Location**: `src/components/ProductCard.jsx`

**Features**:

- Individual product showcase
- Image placeholder with snowflake ice emoji
- Product badge (e.g., "Best Seller")
- Specs display in formatted list
- Price with optional original price strikethrough
- Quick View button
- **WhatsApp integration button**

**WhatsApp Integration**:

- Generates pre-filled message with product name
- Opens: `https://wa.me/201007596703?text=[message]`
- Opens in new tab with `target="_blank"`
- Green styling matching WhatsApp brand

**Images**:

- Uses gradient placeholder (gray to darker gray)
- Hover animation on emoji (scale-110)
- Ready for real images (just replace the emoji section)

**Responsive**:

- Image height: h-48 (mobile), h-56 (desktop)
- Padding adjusts with sm: prefix
- Font sizes responsive

**Customization**:

- Change WhatsApp number: Line 2
- Update message format: Line 3
- Change badge colors/position: Lines 13-15
- Modify specs display: Lines 23-32
- Change button text: Line 45

---

### 📦 Products.jsx

**Location**: `src/components/Products.jsx`

**Features**:

- Grid container for product cards
- 6 sample AC products
- Responsive grid (1-2-3 columns)
- Section title and description
- "View All Products" button

**Product Data Structure**:

```javascript
{
  id: number,
  title: string,
  badge: string,
  specs: string[],
  price: string,
  originalPrice: string (optional)
}
```

**Grid Layout**:

- Mobile: 1 column
- Tablet (sm): 2 columns
- Desktop (lg): 3 columns

**Sample Products**:

1. EcoMineral 1.5 HP (Best Seller)
2. CoolPro 2.0 HP (Popular)
3. AirMax 1.5 HP (Premium)
4. ChillBox 1 HP (Budget)
5. FrostMax 3 HP (New)
6. EcoCool 1.25 HP (Eco Friendly)

**Customization**:

- Add products: Extend `products` array (lines 3-42)
- Update featured products: Modify array content
- Change grid columns: Update `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- Adjust gap spacing: Change `gap-6 sm:gap-8`

---

### 👣 Footer.jsx

**Location**: `src/components/Footer.jsx`

**Features**:

- Dark gray footer (bg-gray-900)
- 4-column layout with company info, services, products, contact
- Contact integration (phone, WhatsApp, email)
- Links to privacy/terms
- Responsive grid layout

**Sections**:

1. **Company Info**: Logo and description
2. **Services**: Links to service cards
3. **Products**: Links to product section
4. **Contact**: Phone, WhatsApp, email, location

**Icons Used**:

- Phone: 📞
- WhatsApp: 💬
- Email: 📧
- Location: Text-based

**Layout**:

- Responsive grid: 1-2-4 columns
- Bottom section with copyright and links
- Divider line between sections

**Customization**:

- Company name: Line 15
- Description: Lines 16-19
- Phone: Line 42
- Email: Line 48
- Location: Line 51
- Social links: Lines 45-47

---

### 📄 page.js

**Location**: `src/app/page.js`

**Purpose**: Main page that imports and renders all components

**Component Order**:

1. Navbar
2. Hero
3. Services
4. Products
5. Footer

**Structure**:

```jsx
<main className="w-full">
  <Navbar />
  <Hero />
  <Services />
  <Products />
  <Footer />
</main>
```

---

### 🎨 layout.js

**Location**: `src/app/layout.js`

**Purpose**: Root layout for all pages

**Configuration**:

- Imports Geist fonts
- Sets global metadata
- Implements viewport settings
- Applies global CSS (Tailwind)

**Metadata**:

- Title: "ONE COOL - AC Sales & Installation"
- Description: SEO-friendly description
- Viewport: Responsive device settings

---

## 🔄 Data Flow

```
page.js (imports all components)
├── Navbar (state: isScrolled, effect: scroll listener)
├── Hero (static content)
├── Services (static array of services)
├── Products
│   └── ProductCard (receives product prop, renders WhatsApp link)
└── Footer (static content)
```

## 🎯 Component Dependencies

- **No external component dependencies**
- Each component is self-contained
- Only dependency: React 19+
- All styling via Tailwind CSS

## 💡 Key Implementation Details

### Scroll Detection (Navbar)

```javascript
useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 50) setIsScrolled(true);
    else setIsScrolled(false);
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
```

### WhatsApp Integration (ProductCard)

```javascript
const whatsappMessage = `Hi, I am interested in ${product.title} - please provide more details.`;
const whatsappLink = `https://wa.me/201007596703?text=${encodeURIComponent(whatsappMessage)}`;
```

### Responsive Grid (Products)

```javascript
className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6";
```

### Conditional Styling (Navbar)

```javascript
className={`${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}
```

---

## 🚀 Performance Optimization Tips

1. **Image Optimization**: Replace emoji placeholders with optimized images
2. **Lazy Loading**: Add `loading="lazy"` to Image components
3. **Code Splitting**: Components already split into separate files
4. **Font Loading**: Fonts are Google Fonts (optimized)
5. **CSS Purging**: Tailwind automatically purges unused styles

## 🧪 Testing Checklist

- [ ] Navbar scroll transition works
- [ ] All navigation links work
- [ ] Call Now button opens phone dialer
- [ ] Services display correctly on all screens
- [ ] Products grid is responsive
- [ ] WhatsApp links open correctly
- [ ] Footer links are functional
- [ ] Mobile layout is usable (no horizontal scroll)
- [ ] Animations are smooth
- [ ] Colors match brand guidelines
