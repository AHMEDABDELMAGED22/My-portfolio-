# Ahmed Mohamed - Professional Portfolio

A modern, responsive portfolio website showcasing skills, projects, and experience.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Hover effects, smooth scrolling, and animated counters
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Loading Animation**: Professional preloader with your name
- **SEO Optimized**: Proper meta tags and semantic HTML

## Sections Included

1. **Hero Section**: Introduction with call-to-action buttons
2. **About**: Personal description and key statistics
3. **Skills**: Categorized skills with icons
4. **Projects**: Project showcase with links
5. **Experience & Education**: Timeline layout
6. **Certificates**: Achievement showcase
7. **Contact**: Contact information and social links

## Customization Guide

### Adding Your Profile Picture

Replace the placeholder in the hero section:

```html
<!-- In index.html, around line 60 -->
<div class="hero-image">
    <img src="your-photo.jpg" alt="Ahmed Mohamed" class="profile-image">
</div>
```

Add this CSS to `styles.css`:

```css
.profile-image {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid rgba(255, 255, 255, 0.2);
}
```

### Adding Social Media Links

Update the social links in the contact section:

```html
<!-- In index.html, around line 280 -->
<div class="contact-links">
    <a href="https://linkedin.com/in/your-profile" class="social-link" target="_blank">
        <i class="fab fa-linkedin"></i>
        <span>LinkedIn</span>
    </a>
    <a href="https://github.com/your-username" class="social-link" target="_blank">
        <i class="fab fa-github"></i>
        <span>GitHub</span>
    </a>
    <a href="https://twitter.com/your-handle" class="social-link" target="_blank">
        <i class="fab fa-twitter"></i>
        <span>Twitter</span>
    </a>
</div>
```

### Adding More Projects

Add new project cards in the projects section:

```html
<!-- In index.html, around line 150 -->
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-project-icon"></i>
    </div>
    <div class="project-content">
        <h3>Project Name</h3>
        <p>Project description goes here...</p>
        <div class="project-tech">
            <span class="tech-tag">React</span>
            <span class="tech-tag">Node.js</span>
            <span class="tech-tag">MongoDB</span>
        </div>
        <div class="project-links">
            <a href="https://project-demo.com" class="project-link" target="_blank">
                <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
            <a href="https://github.com/username/project" class="project-link" target="_blank">
                <i class="fab fa-github"></i> Code
            </a>
        </div>
    </div>
</div>
```

### Adding More Skills

Add new skill categories or tags:

```html
<!-- In index.html, around line 120 -->
<div class="skill-category">
    <h3><i class="fas fa-database"></i> Backend</h3>
    <div class="skill-tags">
        <span class="skill-tag">Node.js</span>
        <span class="skill-tag">Express</span>
        <span class="skill-tag">MongoDB</span>
        <span class="skill-tag">PostgreSQL</span>
    </div>
</div>
```

### Adding More Certificates

Add new certificate cards:

```html
<!-- In index.html, around line 220 -->
<div class="certificate-card">
    <div class="certificate-icon">
        <i class="fas fa-certificate-icon"></i>
    </div>
    <h3>Certificate Name</h3>
    <p>Issuing Organization</p>
    <span class="certificate-date">Month Year</span>
</div>
```

### Changing Colors

Update the color scheme in `styles.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1d4ed8;
    --gradient-start: #667eea;
    --gradient-end: #764ba2;
    --text-dark: #1f2937;
    --text-light: #6b7280;
    --bg-light: #f8fafc;
}
```

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── README.md           # This file
└── assets/             # Optional: for images, icons, etc.
    ├── profile.jpg
    └── project-images/
```

## Deployment

### GitHub Pages

1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select source as "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Your portfolio will be available at `https://username.github.io/repository-name`

### Netlify

1. Drag and drop your portfolio folder to [Netlify](https://netlify.com)
2. Your site will be deployed instantly
3. You can customize the URL in the site settings

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your portfolio directory
3. Follow the prompts to deploy

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Optimized images and assets
- Minified CSS and JavaScript (for production)
- Lazy loading for better performance
- Smooth animations with hardware acceleration

## Contact

For any questions or customization help, feel free to reach out!

## License

This portfolio template is free to use and modify for personal and commercial projects.
