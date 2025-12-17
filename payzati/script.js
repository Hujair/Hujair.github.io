// Slideshow functionality
let slideIndex = 1;

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    dots.forEach(dot => {
        dot.classList.remove('active');
    });

    slides[slideIndex - 1].style.display = 'block';
    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].classList.add('active');
    }
}

// Auto advance slides every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);

// Initialize first slide
document.addEventListener('DOMContentLoaded', function() {
    showSlide(slideIndex);

    // Button click handlers
    const downloadBtn = document.querySelector('.btn-download');
    const learnMoreBtn = document.querySelector('.btn-learn');

    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            console.log('Download button clicked');
            // Add download functionality here
        });
    }

    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function() {
            console.log('Learn more button clicked');
            // Add learn more functionality here
        });
    }

    // Page indicator functionality
    const sections = document.querySelectorAll('.section');
    const dots = document.querySelectorAll('.page-indicator .dot');

    // Update indicator on scroll
    window.addEventListener('scroll', () => {
        let currentSection = 1;
        
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2) {
                currentSection = index + 1;
            }
        });

        // Update dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        if (dots[currentSection - 1]) {
            dots[currentSection - 1].classList.add('active');
        }
    });

    // Click dots to navigate
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            if (sections[index]) {
                sections[index].scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Optional: Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe feature sections
    const features = document.querySelectorAll('.feature');
    features.forEach(feature => {
        feature.style.opacity = '0';
        feature.style.transform = 'translateY(20px)';
        feature.style.transition = 'all 0.6s ease-out';
        observer.observe(feature);
    });
});
