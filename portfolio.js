// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Case Study Data
const caseStudies = {
    project1: {
        title: "E-commerce Platform Redesign",
        category: "UX/UI Design",
        duration: "3 months",
        role: "Lead Designer",
        overview: "Complete redesign of a fashion e-commerce platform that improved conversion rates by 40% and enhanced user experience across all touchpoints.",
        challenge: "The existing platform had poor user experience, low conversion rates, and outdated design that didn't reflect the brand's premium positioning.",
        solution: "Conducted extensive user research, created user personas, and designed a modern, intuitive interface with improved navigation and checkout flow.",
        process: [
            "User Research & Interviews",
            "Competitive Analysis",
            "Information Architecture",
            "Wireframing & Prototyping",
            "User Testing & Iteration",
            "Final Design & Handoff"
        ],
        results: [
            "40% increase in conversion rates",
            "25% reduction in cart abandonment",
            "60% improvement in mobile usability scores",
            "15% increase in average order value"
        ],
        tools: ["Figma", "Sketch", "InVision", "Hotjar", "Google Analytics"],
        images: [
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800&h=500&fit=crop"
        ]
    },
    project2: {
        title: "Fitness Tracking App",
        category: "Mobile Design",
        duration: "4 months",
        role: "Product Designer",
        overview: "Mobile app design for a fitness tracking platform with social features and gamification elements to increase user engagement.",
        challenge: "Create an engaging fitness app that motivates users to maintain healthy habits while building a community around fitness goals.",
        solution: "Designed an intuitive mobile interface with gamification elements, social features, and personalized workout recommendations.",
        process: [
            "User Research & Surveys",
            "Feature Prioritization",
            "Mobile-First Design",
            "Prototyping & Testing",
            "Motion Design",
            "Development Handoff"
        ],
        results: [
            "85% user retention after 30 days",
            "3.2M downloads in first year",
            "4.8/5 app store rating",
            "2.5x increase in daily active users"
        ],
        tools: ["Sketch", "Figma", "Principle", "Framer", "Zeplin"],
        images: [
            "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop"
        ]
    },
    project3: {
        title: "Tech Startup Brand Identity",
        category: "Brand Identity",
        duration: "2 months",
        role: "Brand Designer",
        overview: "Complete brand identity design including logo, color palette, typography, and visual guidelines for a growing tech startup.",
        challenge: "Create a distinctive brand identity that positions the startup as innovative and trustworthy in a competitive market.",
        solution: "Developed a modern, scalable brand system with a memorable logo and cohesive visual language across all touchpoints.",
        process: [
            "Brand Strategy & Positioning",
            "Logo Design & Iteration",
            "Color Palette Development",
            "Typography Selection",
            "Visual Guidelines",
            "Brand Asset Creation"
        ],
        results: [
            "Successful brand launch",
            "Increased brand recognition by 300%",
            "Consistent visual identity across platforms",
            "Positive feedback from stakeholders"
        ],
        tools: ["Adobe Illustrator", "Adobe Photoshop", "InDesign", "Brand Guidelines"],
        images: [
            "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop"
        ]
    },
    project4: {
        title: "Dashboard Design System",
        category: "Web Design",
        duration: "5 months",
        role: "Design Systems Lead",
        overview: "Comprehensive design system for a SaaS dashboard with 50+ reusable components, improving design consistency and development efficiency.",
        challenge: "Create a scalable design system that ensures consistency across a complex SaaS platform while enabling rapid development.",
        solution: "Built a comprehensive component library with detailed documentation, design tokens, and implementation guidelines.",
        process: [
            "Audit Existing Components",
            "Design Token Definition",
            "Component Library Creation",
            "Documentation & Guidelines",
            "Developer Handoff",
            "Implementation Support"
        ],
        results: [
            "50+ reusable components",
            "60% faster development time",
            "Consistent design across platform",
            "Improved developer experience"
        ],
        tools: ["Figma", "Storybook", "Design Tokens", "Component Library"],
        images: [
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop"
        ]
    }
};

// Modal functionality
const modal = document.getElementById('caseStudyModal');
const modalContent = document.querySelector('.case-study-content');
const closeBtn = document.querySelector('.close');

// Open modal when clicking on work items
document.querySelectorAll('.work-item').forEach(item => {
    item.addEventListener('click', () => {
        const projectId = item.getAttribute('data-project');
        const caseStudy = caseStudies[projectId];
        if (caseStudy) {
            openModal(caseStudy);
        }
    });
});

// Close modal
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});

function openModal(caseStudy) {
    modalContent.innerHTML = `
        <div class="case-study-header">
            <div class="case-study-meta">
                <span class="case-study-category">${caseStudy.category}</span>
                <span class="case-study-duration">${caseStudy.duration}</span>
                <span class="case-study-role">${caseStudy.role}</span>
            </div>
            <h2>${caseStudy.title}</h2>
            <p class="case-study-overview">${caseStudy.overview}</p>
        </div>

        <div class="case-study-gallery">
            ${caseStudy.images.map(img => `
                <div class="case-study-image">
                    <img src="${img}" alt="${caseStudy.title}">
                </div>
            `).join('')}
        </div>

        <div class="case-study-sections">
            <div class="case-study-section">
                <h3>The Challenge</h3>
                <p>${caseStudy.challenge}</p>
            </div>

            <div class="case-study-section">
                <h3>The Solution</h3>
                <p>${caseStudy.solution}</p>
            </div>

            <div class="case-study-section">
                <h3>Process</h3>
                <ul>
                    ${caseStudy.process.map(step => `<li>${step}</li>`).join('')}
                </ul>
            </div>

            <div class="case-study-section">
                <h3>Results</h3>
                <ul>
                    ${caseStudy.results.map(result => `<li>${result}</li>`).join('')}
                </ul>
            </div>

            <div class="case-study-section">
                <h3>Tools Used</h3>
                <div class="tools-list">
                    ${caseStudy.tools.map(tool => `<span class="tool-tag">${tool}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Contact form handling
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Simple validation
    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Simulate form submission
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        alert('Thank you for your message! I\'ll get back to you soon.');
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.work-item, .about-content, .contact-info');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Parallax effect for floating elements
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-element');
    
    parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-speed');
        const yPos = -(scrolled * speed / 10);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Smooth reveal animation for sections
const revealSections = () => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('revealed');
        }
    });
};

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);