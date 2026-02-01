# Green Jobs Galore Website Clone

A pixel-perfect, fully responsive clone of the Green Jobs Galore handyman services website.

## Files Included

### Main Files
- **index.html** - Complete standalone HTML website (open this in your browser)
- **greenjobsgalore.jsx** - React component version for integration into React projects
- **logo.png** - Company logo
- **All project images** - 16+ project photos from various jobs

## Quick Start

### Option 1: View the Standalone HTML Version
1. Simply open `index.html` in any modern web browser
2. All images should be in the same folder as the HTML file
3. No installation or build process required!

### Option 2: Use the React Component
1. Copy `greenjobsgalore.jsx` into your React project
2. Install required dependencies:
   ```bash
   npm install lucide-react
   ```
3. Make sure Tailwind CSS is configured in your project
4. Import and use the component:
   ```jsx
   import GreenJobsGalore from './greenjobsgalore';
   
   function App() {
     return <GreenJobsGalore />;
   }
   ```

## Features

### ✅ Fully Responsive Design
- Mobile-first approach
- Adapts beautifully to all screen sizes
- Optimized for phones, tablets, and desktops

### ✅ Contact Form
- Client-side validation
- Sends email via mailto link to info@greenjobsgalore.com
- Error handling and user feedback
- Required field validation

### ✅ Service Cards
Four distinct service categories:
- **INSIDE** - Framing, kitchens, bathrooms
- **OUTSIDE** - Decks, fences, sheds, siding
- **HANDYMAN** - Quick fixes to save money
- **RECORD** - Before/after documentation

### ✅ Project Gallery
- 16 high-quality project photos
- Responsive grid layout
- Hover effects for enhanced UX
- Showcases real completed work

### ✅ Professional Styling
- Color scheme: Green (#2d7a2e), Light Green (#c4d79b), Dark Gray (#2a2a2a)
- Clean, modern design
- Consistent branding throughout
- Professional typography

## Customization

### Update Contact Information
To change the phone number, edit these sections:
```html
<!-- In the header -->
<div class="text-2xl md:text-3xl font-bold">289-903-3128</div>
```

### Update Email Address
To change the contact email, find and replace:
```javascript
mailto:info@greenjobsgalore.com
```

### Add/Remove Gallery Images
Edit the gallery section in the HTML:
```html
<div class="gallery-item"><img src="your-image.jpg" alt="Project"></div>
```

### Modify Colors
The main brand colors are:
- Primary Green: `#2d7a2e`
- Light Green Background: `#c4d79b`
- Dark Gray: `#2a2a2a`
- Accent Orange: `#f5a623`

Search and replace these hex codes to rebrand.

## Technical Details

### Technologies Used
- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework (loaded via CDN)
- **Vanilla JavaScript** - Form handling and interactivity
- **React** - Alternative component version
- **Lucide Icons** - Modern icon library

### Browser Compatibility
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance
- Lightweight and fast loading
- Optimized images recommended
- No external dependencies for HTML version (except Tailwind CDN)
- Minimal JavaScript for better performance

## Form Functionality

The contact form collects:
- First Name (required)
- Last Name (required)
- Email (required, validated)
- Phone (required)
- Message (required)

On submission, it opens the user's default email client with pre-filled information. For production use, consider integrating with:
- EmailJS
- Formspree
- Custom backend API
- Netlify Forms

## Deployment

### Static Hosting (Recommended for HTML version)
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

### Steps to Deploy:
1. Upload all files (HTML + images) to your hosting provider
2. Ensure all images are in the same directory as index.html
3. Configure custom domain if desired
4. Test form functionality

## Image Optimization Tips

For faster loading, consider:
1. Compress images using tools like TinyPNG or Squoosh
2. Convert to modern formats (WebP)
3. Implement lazy loading for gallery images
4. Use responsive image techniques (srcset)

## SEO Recommendations

To improve search engine visibility:
1. Add meta description tag
2. Include Open Graph tags for social sharing
3. Add structured data (JSON-LD) for local business
4. Optimize image alt text
5. Add XML sitemap
6. Submit to Google My Business

## Support & Contact

For questions about this clone or to hire for web development services:
- Website: greenjobsgalore.ca
- Phone: 289-903-3128
- Email: info@greenjobsgalore.com

## License

This is a clone created for Green Jobs Galore. All rights reserved.

## Credits

- Original Design: Green Jobs Galore
- Clone Implementation: Professional Web Development
- Icons: Lucide Icons
- Framework: Tailwind CSS

---

**Note**: This is a static website clone. For dynamic features (database, user accounts, payment processing), additional backend development would be required.
