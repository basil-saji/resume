# Basil Saji - Resume

A clean, professional resume webpage with download functionality.

## Features

- **Responsive Design**: Optimized for all screen sizes
- **Download Button**: Allows visitors to download/print resume as PDF
- **Clean Typography**: Uses Inter font for professional appearance
- **Modern Styling**: Clean layout with subtle shadows and professional color scheme
- **Print-Optimized**: Special print styles for high-quality PDF generation

## How to Use

### Viewing Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/basil-saji/resume.git
   cd resume
   ```

2. Open `index.html` in your browser

### Deploying

#### GitHub Pages
1. Go to repository Settings
2. Navigate to Pages section
3. Select `main` branch as source
4. Your resume will be available at `https://basil-saji.github.io/resume/`

#### Vercel
1. Import the repository in Vercel
2. Deploy with default settings
3. Your resume will be live instantly

### Adding PDF Download

To enable actual PDF downloads:

1. Generate a PDF of your resume
2. Add the PDF file to the repository (e.g., `BASIL-SAJI-RESUME.pdf`)
3. Update `script.js` line 11 to:
   ```javascript
   window.location.href = 'BASIL-SAJI-RESUME.pdf';
   ```

## Customization

- **Content**: Edit `index.html` to update your information
- **Styling**: Modify `style.css` to change colors, fonts, spacing
- **Colors**: Main accent color is `#2563eb` (blue) - change this in CSS for different theme

## Technologies

- HTML5
- CSS3 (with Grid and Flexbox)
- JavaScript (ES6)
- Google Fonts (Inter)

## License

Feel free to fork and customize for your own resume!

---

© 2025 Basil Saji