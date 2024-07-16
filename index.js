document.addEventListener('DOMContentLoaded', () => {
    // Utility function for simple animations
    const fadeInUp = (element, delay = 0, duration = 500) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = `opacity ${duration}ms ease, transform ${duration}ms ease`;
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, delay);
    };

    // Animate hero elements
    ['hero-title', 'hero-subtitle', 'cta-button', 'trust-indicators', 'hero-image'].forEach((id, index) => {
        fadeInUp(document.getElementById(id), index * 200);
    });

    // Floating elements animation
    const floatingContainer = document.getElementById('floating-elements');
    const floatingItems = ['🧠', '💡', '🌱', '🌈', '💪'];

    floatingItems.forEach((item, index) => {
        const element = document.createElement('div');
        element.textContent = item;
        element.style.cssText = `
            position: absolute;
            font-size: 24px;
            opacity: 0.7;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            transition: transform 3s ease-in-out;
        `;
        floatingContainer.appendChild(element);

        const animateFloat = () => {
            const yMove = -50 + Math.random() * 100;
            const xMove = -25 + Math.random() * 50;
            element.style.transform = `translate(${xMove}px, ${yMove}px)`;
            setTimeout(animateFloat, 3000 + Math.random() * 3000);
        };

        setTimeout(animateFloat, index * 1000);
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // CTA button hover effect
    const ctaButton = document.getElementById('cta-button');
    ctaButton.addEventListener('mouseenter', () => ctaButton.style.transform = 'scale(1.05)');
    ctaButton.addEventListener('mouseleave', () => ctaButton.style.transform = 'scale(1)');

    // Form submission
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add form submission logic here
        console.log('Form submitted');
        // You would typically send this data to a server
        alert('Thank you for your message. We will get back to you soon!');
        form.reset();
    });

    // Intersection Observer for fade-in animations
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        fadeInObserver.observe(section);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Typewriter effect
    const typewriter = (element, text, speed = 50) => {
        let i = 0;
        const type = () => {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        };
        type();
    };

    const subtitle = document.querySelector('.typewriter');
    typewriter(subtitle, "Begin your journey to happiness and personal growth with expert psychological guidance.");

    // Number counting effect
    const countUp = (element, target, duration = 2000) => {
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            element.textContent = Math.floor(start);
            if (start >= target) {
                clearInterval(timer);
                element.textContent = target;
            }
        }, 16);
    };

    const experienceYears = document.getElementById('experience-years');
    countUp(experienceYears, 10);

    // Fade-in animation
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section, #hero-image, #trust-indicators').forEach(el => {
        el.classList.add('transition', 'duration-1000', 'opacity-0', 'translate-y-10');
        fadeInObserver.observe(el);
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add form submission logic here
        alert('Thank you for your message. We will get back to you soon!');
        form.reset();
    });

    // Service card hover effect
    document.querySelectorAll('#services .bg-white').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('scale-105');
        });
        card.addEventListener('mouseleave', () => {
            card.classList.remove('scale-105');
        });
    });
});

