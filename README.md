"# MITTIBAZAAR

A beautiful, handcrafted e-commerce website celebrating artisanal earthenware and sustainable home goods.

## 📋 Project Overview

MittiBazaar is a modern e-commerce platform dedicated to bringing eco-friendly, handmade pottery and artisanal crafts directly to customers. The site features a clean, professional design with an earthy color palette inspired by traditional craftsmanship.

## 🎨 Design Highlights

**Color Palette:**
- **Tan (#D2B48C)** - Navbar and form backgrounds
- **Cream (#FFF5E1)** - Primary body and section backgrounds
- **Clay Brown (#4B2E1E)** - Headings and text accents
- **Muted Green (#9BB286)** - Accent color
- **Light Beige (#F5F5DC)** - Secondary sections

**Typography:**
- Headings: Georgia font (elegant, timeless)
- Body Text: Arial (clean, readable)

## 📄 Pages Built

### 1. **Homepage** (home.html)
- Eye-catching hero section with tagline
- Featured products grid (3 items)
- About MittiBazaar section
- Customer testimonials (3 reviews)
- Footer with contact info and social links

### 2. **Products Page** (products.html)
- Responsive grid layout (3 columns → 2 on tablet → 1 on mobile)
- 6 product cards with images, names, prices
- Add to Cart functionality
- localStorage integration for cart persistence

### 3. **Shopping Cart** (cart.html)
- Dynamic cart display
- Quantity selector for each item
- Real-time total price calculation
- Remove item functionality
- Checkout button (demo)
- Continue Shopping link

### 4. **Contact Page** (contact.html)
- Contact form with fields: Name, Email, Message
- Form validation:
  - Name: min 3 characters
  - Email: valid format check
  - Message: min 10 characters
- Success/error messages
- Direct contact information section

### 5. **About Page** (about.html)
- Company story and mission
- Core values list (Sustainability, Authenticity, Fair Trade, Community, Quality)
- Professional formatting

### 6. **Login Page** (login.html)
- Username/Email and Password fields
- Form validation:
  - Username: min 3 characters
  - Password: min 6 characters
- Error messages
- Link to Sign Up page
- Professional styling with tan form background

### 7. **Sign Up Page** (signup.html)
- Comprehensive registration form
- Fields: Full Name, Username, Email, Phone Number, Password, Confirm Password
- Advanced validation:
  - Full name: min 3 characters
  - Username: min 3 characters
  - Email: valid format validation
  - Phone: min 10 digits
  - Password: min 6 characters
  - Password match validation
- Individual error messages for each field
- Link to Login page

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Responsive design with media queries
- **JavaScript** - Client-side functionality and form validation
- **localStorage** - Cart persistence without backend

## 📦 File Structure

```
MITTIBAZAAR/
├── home.html              # Homepage
├── products.html          # Products page
├── cart.html              # Shopping cart
├── contact.html           # Contact form
├── about.html             # About company
├── login.html             # Login page
├── signup.html            # Registration page
├── styles.css             # Main stylesheet
├── cart.js                # Cart functionality
├── login-page-style.css   # Legacy (not used)
├── signupstyles.css       # Legacy (not used)
├── PICTURES/
│   ├── NAVBAR_LOGO.png    # Logo
│   └── PRODUCTS/          # Product images
└── README.md              # This file
```

## ✨ Key Features

### Cart Management
- Add items to cart from Products page
- Update quantities in cart
- Remove items
- Calculate totals dynamically
- Persistent storage using browser localStorage
- Cart link in navbar for easy access

### Form Validation
- Real-time error messaging
- Email format validation
- Password match confirmation
- Phone number validation
- User-friendly error display

### Responsive Design
**Breakpoints:**
- Desktop (900px+): Full grid layout
- Tablet (768px - 899px): 2-column grid
- Mobile (480px - 767px): 1-column stack
- Small Mobile (<480px): Single column with adjusted fonts

### Navigation
- Consistent navbar across all pages
- Links: Home, About, Products, Contact, Login, SignUp, Cart
- Smooth navigation between pages

## 🎯 How to Use

1. **View Products:** Click "Products" or "Shop Now" to browse items
2. **Add to Cart:** Click "Add to Cart" on any product
3. **Manage Cart:** Visit Cart page to update quantities or remove items
4. **Create Account:** Click "SignUp" and fill in your details
5. **Login:** Use your credentials on Login page
6. **Contact:** Fill out the Contact form for inquiries

## 🚀 Getting Started

1. Open `home.html` in your web browser
2. Navigate using the navbar
3. Test cart functionality - items persist in localStorage
4. Try form validation on Contact, Login, and Sign Up pages
5. Test responsive design by resizing your browser

## 📱 Responsive Features

- Flexible grid layouts
- Optimized font sizes for mobile
- Touch-friendly button sizes
- Mobile navbar optimization
- Adjusted padding/margins for small screens

## 🎨 Styling Features

- Hover effects on buttons and product cards
- Shadow effects for depth
- Border radius for modern look
- Color-coded messages (green success, red error)
- Smooth transitions and animations
- Professional form styling

## 💡 Browser Compatibility

Works on all modern browsers:
- Chrome/Edge
- Firefox
- Safari
- Opera

## 📝 Form Validation Details

### Signup Form
✅ Full Name validation
✅ Username availability check (length)
✅ Email format verification
✅ Phone number format
✅ Password strength (min 6 chars)
✅ Password confirmation match

### Login Form
✅ Username/Email validation
✅ Password validation

### Contact Form
✅ Name validation
✅ Email format check
✅ Message length verification

## 🎁 Products Included

1. Handmade Clay Pot - $25
2. Terracotta Vase - $40
3. Ceramic Bowl - $18
4. Clay Mug - $12
5. Serving Plate - $30
6. Decorative Tile - $15

## 🔐 Security Notes

- Client-side validation for user experience
- localStorage used for demo cart (not for sensitive data)
- No backend integration yet (demo mode)
- Passwords shown in error messages (demo only - use HTTPS + backend in production)

## 🚀 Future Enhancements

- Backend integration for user accounts
- Payment gateway integration
- Product search and filtering
- User reviews and ratings
- Wishlist functionality
- Order history
- Admin dashboard
- Email notifications

## 📧 Contact Information

**Email:** hello@mittibazaar.example
**Phone:** +1 (555) 123-4567
**Address:** 123 Artisan Lane, Creative City, CC 12345

## 📄 License

© 2025 MittiBazaar. All rights reserved.
" 
