# Designer Portfolio Website

A modern, interactive portfolio website for designers to showcase their work and case studies. Built with HTML, CSS, and JavaScript.

## Features

### 🎨 Modern Design
- Clean, minimalist design with beautiful gradients
- Responsive layout that works on all devices
- Smooth animations and transitions
- Professional typography using Inter font

### 📱 Interactive Elements
- **Mobile-friendly navigation** with hamburger menu
- **Smooth scrolling** between sections
- **Interactive case study modals** with detailed project information
- **Hover effects** on portfolio items
- **Parallax scrolling** effects
- **Form validation** and submission handling

### 🖼️ Portfolio Showcase
- **Project grid** with hover animations
- **Case study modals** containing:
  - Project overview and challenge
  - Detailed process breakdown
  - Results and metrics
  - Tools and technologies used
  - Image galleries
- **Category tags** for easy filtering
- **Responsive image galleries**

### 📋 Sections
1. **Hero Section** - Introduction with call-to-action buttons
2. **Work Section** - Portfolio projects with interactive case studies
3. **About Section** - Designer information and skills
4. **Contact Section** - Contact form and information
5. **Footer** - Social links and copyright

## Files Structure

```
├── portfolio.html      # Main HTML file
├── portfolio.css       # Styles and animations
├── portfolio.js        # Interactive functionality
└── README.md          # This file
```

## How to Use

### 1. Customize Content
- Replace "Alex Chen" with your name throughout the files
- Update the hero section with your own introduction
- Add your own projects to the work section
- Modify the about section with your skills and experience
- Update contact information and social links

### 2. Add Your Projects
In `portfolio.js`, add new case studies to the `caseStudies` object:

```javascript
const caseStudies = {
    yourProjectId: {
        title: "Your Project Title",
        category: "Project Category",
        duration: "Project Duration",
        role: "Your Role",
        overview: "Project overview...",
        challenge: "The challenge...",
        solution: "The solution...",
        process: ["Step 1", "Step 2", "Step 3"],
        results: ["Result 1", "Result 2"],
        tools: ["Tool 1", "Tool 2"],
        images: ["image1.jpg", "image2.jpg"]
    }
}
```

### 3. Customize Styling
- Modify colors in `portfolio.css` by changing the CSS custom properties
- Update gradients and animations
- Adjust spacing and typography
- Customize the color scheme to match your brand

### 4. Add Your Images
- Replace placeholder images with your own project screenshots
- Use high-quality images (recommended: 800x500px for project thumbnails)
- Optimize images for web performance

## Features in Detail

### Case Study Modals
- Click on any project to open a detailed case study
- Includes project metadata (category, duration, role)
- Image gallery with hover effects
- Structured sections: Challenge, Solution, Process, Results, Tools
- Close with X button, clicking outside, or pressing Escape

### Responsive Design
- Mobile-first approach
- Breakpoints at 768px and 480px
- Flexible grid layouts
- Touch-friendly interactions

### Performance Optimizations
- Lazy loading for images
- Smooth animations with CSS transforms
- Efficient event handling
- Minimal JavaScript footprint

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Customization Tips

### Colors
The main color scheme uses:
- Primary: `#667eea` (Blue)
- Secondary: `#764ba2` (Purple)
- Text: `#1a1a1a` (Dark gray)
- Background: `#f8f9fa` (Light gray)

### Typography
- Font: Inter (Google Fonts)
- Weights: 300, 400, 500, 600, 700
- Responsive font sizes using `clamp()`

### Animations
- Fade-in animations on scroll
- Hover effects on interactive elements
- Smooth transitions (0.3s ease)
- Parallax scrolling effects

## Deployment
1. Upload all files to your web hosting service
2. Ensure all file paths are correct
3. Test on different devices and browsers
4. Optimize images for faster loading

## License
This project is open source and available under the MIT License.

## Support
For questions or customization help, feel free to reach out!