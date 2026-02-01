# Green Jobs Galore - Setup & Fix Guide

## ✅ All Issues Fixed

### 1. ✅ Copyright Updated
- Changed from 2022-2025 to **2022-2026**

### 2. ✅ Favicon Created and Implemented
- Created `favicon.ico` (32x32) from your logo
- Created `favicon.png` (192x192) for modern browsers
- Created `apple-touch-icon.png` (180x180) for iOS devices
- All favicon links added to HTML `<head>` section

### 3. ✅ Form Email Submission Fixed
- Created `submit-form.php` for reliable email delivery
- Form now sends to **info@greenjobsgalore.com**
- Includes success/error message feedback
- Works on any PHP-enabled hosting

### 4. ✅ Project Images Connected
All 16 project images are properly linked in the gallery:
- August2024_Bathroomupdate.jpg
- 2023041011_04.jpg
- 2024031915_53_04.jpg
- 20240319_15_53_25.jpg
- 20240319_15_53_46.jpg
- 2024050317_11.jpg
- 2024050GAZEBO.jpg
- 2023080515_42.jpg
- 20231206.jpg
- 2022120913_08.jpg
- 2022111011_23.jpg
- 2022101315_44.jpg
- 2022081220_38.png
- backdeack.jpg
- stairrailbalusterandpost.jpg
- ileachloe.jpg

### 5. ✅ Google Review Link
- Updated to: https://g.page/r/CQksu5s2oN8BEBM/review

---

## 📁 Files to Upload to Your Web Host

**IMPORTANT:** Upload ALL of these files to your web hosting:

```
✅ REQUIRED FILES:
├── index.html                      (Main website)
├── submit-form.php                 (Form handler - sends emails)
├── favicon.ico                     (Website icon in browser tab)
├── favicon.png                     (Modern browser icon)
├── apple-touch-icon.png           (iOS home screen icon)
├── logo.png                        (Header logo)
├── carpentersbagwithbeltfulloftoolslaidonwoodentableconstructionsiteSBI305222493.jpg (CTA section)
│
└── GALLERY IMAGES (16 total):
    ├── August2024_Bathroomupdate.jpg
    ├── 2023041011_04.jpg
    ├── 2024031915_53_04.jpg
    ├── 20240319_15_53_25.jpg
    ├── 20240319_15_53_46.jpg
    ├── 2024050317_11.jpg
    ├── 2024050GAZEBO.jpg
    ├── 2023080515_42.jpg
    ├── 20231206.jpg
    ├── 2022120913_08.jpg
    ├── 2022111011_23.jpg
    ├── 2022101315_44.jpg
    ├── 2022081220_38.png
    ├── backdeack.jpg
    ├── stairrailbalusterandpost.jpg
    └── ileachloe.jpg
```

---

## 🚀 Deployment Instructions

### STEP 1: Test Locally (Optional)
If you want to test the form locally, you need a PHP server:

```bash
# Navigate to the folder with your files
cd /path/to/your/files

# Start PHP built-in server
php -S localhost:8000

# Open browser to http://localhost:8000
```

### STEP 2: Upload to Web Host

#### Option A: Using cPanel (Most Common)
1. Log into your cPanel
2. Open "File Manager"
3. Navigate to `public_html` folder
4. Click "Upload" button
5. Select and upload ALL files listed above
6. Wait for upload to complete
7. Done! Visit your website

#### Option B: Using FTP (FileZilla, etc.)
1. Open your FTP client
2. Connect to your host using FTP credentials
3. Navigate to `public_html` or `www` folder
4. Drag and drop all files from your computer
5. Wait for upload to complete
6. Done! Visit your website

#### Option C: Netlify (Free Hosting)
**Note:** Netlify doesn't support PHP by default. For Netlify, you need to use their form handling:

1. Update the form in `index.html`:
   ```html
   <form name="contact" method="POST" data-netlify="true">
   ```

2. Go to https://app.netlify.com/drop
3. Drag and drop all files
4. Get instant free hosting URL
5. Configure form notifications in Netlify dashboard

---

## ✅ Testing Checklist

After uploading, test these features:

### Images
- [ ] Logo appears in header
- [ ] Favicon appears in browser tab
- [ ] All 16 gallery images load correctly
- [ ] Tools image appears in CTA section
- [ ] No broken image icons (red X)

### Links
- [ ] "CALL US NOW" button (should work on mobile)
- [ ] "Home" and "Contact" navigation links
- [ ] "GOOGLE REVIEW" button → goes to https://g.page/r/CQksu5s2oN8BEBM/review

### Contact Form
- [ ] Fill out all fields
- [ ] Click "Submit" button
- [ ] Button changes to "Sending..."
- [ ] Success message appears
- [ ] Email arrives at info@greenjobsgalore.com

**IMPORTANT:** The PHP form requires a PHP-enabled web host. Most hosts (GoDaddy, Bluehost, HostGator, etc.) support PHP by default.

---

## 🔧 Troubleshooting

### Form Not Sending Emails?

#### Problem 1: No PHP Support
**Solution:** Your host needs PHP. Check with your hosting provider.

#### Problem 2: Emails Going to Spam
**Solution:** Add SPF records to your domain DNS settings. Contact your hosting support for help.

#### Problem 3: Form Submits but No Email
**Solution:** Check your hosting control panel's email logs, or use an alternative form service:

**Alternative 1 - Use Formspree (Free):**
1. Go to https://formspree.io
2. Sign up for free account
3. Create new form, set email to info@greenjobsgalore.com
4. Replace form action in HTML:
   ```html
   <form action="https://formspree.io/f/YOUR-FORM-ID" method="POST">
   ```

**Alternative 2 - Use Netlify Forms (Free):**
1. Host on Netlify
2. Add `data-netlify="true"` to form tag
3. Configure email notifications in Netlify dashboard

### Images Not Loading?

**Check these:**
1. Are all image files uploaded?
2. Are they in the same folder as index.html?
3. Are filenames spelled exactly as shown (case-sensitive)?
4. Try clearing browser cache (Ctrl+F5 or Cmd+Shift+R)

### Favicon Not Showing?

1. Clear browser cache
2. Wait a few minutes (browsers cache favicons)
3. Try in private/incognito mode
4. On mobile, add site to home screen to see Apple icon

---

## 📱 Mobile Testing

Test on these devices:
- [ ] iPhone Safari
- [ ] Android Chrome
- [ ] iPad
- [ ] Desktop Chrome
- [ ] Desktop Firefox
- [ ] Desktop Safari

---

## 🎨 Customization Tips

### Change Phone Number
Find and replace: `289-903-3128`

### Change Email Address
1. In `submit-form.php`: Change `$recipient = "info@greenjobsgalore.com";`
2. Test form after changing

### Add More Gallery Images
1. Upload new image to server
2. Add to HTML gallery section:
   ```html
   <div class="gallery-item">
       <img src="your-new-image.jpg" alt="Project description">
   </div>
   ```

### Change Colors
Main colors used:
- Primary Green: `#2d7a2e`
- Light Green: `#c4d79b`
- Dark Gray: `#2a2a2a`
- Button Orange: `#f5a623`

Find and replace hex codes in HTML file.

---

## 📞 Support

If you have issues:
1. Check this guide's troubleshooting section
2. Contact your web hosting support (for PHP/email issues)
3. Verify all files are uploaded correctly
4. Test in different browsers

---

## ✅ Final Checklist Before Going Live

- [ ] All files uploaded to web host
- [ ] Website loads correctly
- [ ] All images display
- [ ] Favicon shows in browser tab
- [ ] Phone number is correct
- [ ] Email address is correct
- [ ] Form sends test email successfully
- [ ] Google Review link works
- [ ] Tested on mobile device
- [ ] Tested on desktop computer
- [ ] Domain name is pointed correctly (if using custom domain)

**You're ready to go live! 🚀**

---

## Quick Start Summary

1. **Upload** all files to your web host's public_html folder
2. **Test** the form by submitting a test message
3. **Verify** email arrives at info@greenjobsgalore.com
4. **Share** your website URL with customers!

The website is production-ready and all issues have been fixed!
