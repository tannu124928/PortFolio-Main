document.addEventListener('DOMContentLoaded', () => {

    // ============================================
    // 1. SCROLL REVEAL ANIMATION
    // ============================================
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length > 0) {
        revealElements.forEach(el => {
            observer.observe(el);
        });
    }

    // ============================================
    // 2. DYNAMIC NAVBAR ON SCROLL
    // ============================================
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
            
            if (window.scrollY > 50) {
                navbar.style.height = '70px';
                navbar.style.background = isDarkMode ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = isDarkMode ? '0 4px 20px rgba(0,0,0,0.3)' : '0 4px 20px rgba(0,0,0,0.05)';
            } else {
                navbar.style.height = '80px';
                navbar.style.background = isDarkMode ? 'rgba(15, 23, 42, 0.85)' : 'rgba(255, 255, 255, 0.85)';
                navbar.style.boxShadow = 'none';
            }
        });
    }

    // ============================================
    // 3. SMOOTH SCROLL WITH OFFSET
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = target.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // 4. DARK MODE TOGGLE (LOCAL STORAGE)
    // ============================================
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        const themeIcon = themeToggle.querySelector('.theme-icon');
        
        // Load saved theme from local storage
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);

        // Toggle theme on button click
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
            
            // Update navbar background immediately based on scroll position
            if (navbar) {
                const isDarkMode = newTheme === 'dark';
                if (window.scrollY > 50) {
                    navbar.style.background = isDarkMode ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)';
                    navbar.style.boxShadow = isDarkMode ? '0 4px 20px rgba(0,0,0,0.3)' : '0 4px 20px rgba(0,0,0,0.05)';
                } else {
                    navbar.style.background = isDarkMode ? 'rgba(15, 23, 42, 0.85)' : 'rgba(255, 255, 255, 0.85)';
                }
            }
        });

        function updateThemeIcon(theme) {
            if (themeIcon) themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
        }
    }

    // ============================================
    // 5. FORM VALIDATION WITH ERROR MESSAGES
    // ============================================
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    if (contactForm && nameInput && emailInput && messageInput) {
        // Real-time validation
        nameInput.addEventListener('blur', () => validateName());
        emailInput.addEventListener('blur', () => validateEmail());
        messageInput.addEventListener('blur', () => validateMessage());

        // Form submission
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const isNameValid = validateName();
            const isEmailValid = validateEmail();
            const isMessageValid = validateMessage();

            if (isNameValid && isEmailValid && isMessageValid) {
                handleFormSubmit();
            }
        });
    }

    function validateName() {
        if (!nameInput) return false;
        const name = nameInput.value.trim();
        const errorElement = document.getElementById('nameError');
        
        if (name.length === 0) {
            showError(nameInput, errorElement, 'Name is required');
            return false;
        } else if (name.length < 2) {
            showError(nameInput, errorElement, 'Name must be at least 2 characters');
            return false;
        } else if (!/^[a-zA-Z\s]+$/.test(name)) {
            showError(nameInput, errorElement, 'Name can only contain letters');
            return false;
        } else {
            clearError(nameInput, errorElement);
            return true;
        }
    }

    function validateEmail() {
        if (!emailInput) return false;
        const email = emailInput.value.trim();
        const errorElement = document.getElementById('emailError');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (email.length === 0) {
            showError(emailInput, errorElement, 'Email is required');
            return false;
        } else if (!emailRegex.test(email)) {
            showError(emailInput, errorElement, 'Please enter a valid email address');
            return false;
        } else {
            clearError(emailInput, errorElement);
            return true;
        }
    }

    function validateMessage() {
        if (!messageInput) return false;
        const message = messageInput.value.trim();
        const errorElement = document.getElementById('messageError');
        
        if (message.length === 0) {
            showError(messageInput, errorElement, 'Message is required');
            return false;
        } else if (message.length < 10) {
            showError(messageInput, errorElement, 'Message must be at least 10 characters');
            return false;
        } else {
            clearError(messageInput, errorElement);
            return true;
        }
    }

    function showError(input, errorElement, message) {
        if (!input || !errorElement) return;
        input.style.borderColor = '#ef4444';
        errorElement.textContent = message;
        errorElement.style.color = '#ef4444';
    }

    function clearError(input, errorElement) {
        if (!input || !errorElement) return;
        input.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        errorElement.textContent = '';
    }

    function handleFormSubmit() {
        // Save form data to local storage
        const formData = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            message: messageInput.value.trim(),
            timestamp: new Date().toISOString()
        };

        let submissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
        submissions.push(formData);
        localStorage.setItem('formSubmissions', JSON.stringify(submissions));

        const successMessage = document.getElementById('formSuccess');
        if (successMessage) {
            successMessage.textContent = 'Thank you! Your message has been sent successfully.';
            successMessage.classList.add('show');
            setTimeout(() => successMessage.classList.remove('show'), 5000);
        }

        if (contactForm) contactForm.reset();
    }

    // ============================================
    // 6. SCROLL TO TOP BUTTON
    // ============================================
    const scrollToTopBtn = document.getElementById('scrollToTop');
    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ============================================
    // 7. PROJECT CARDS HOVER EFFECT
    // ============================================
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // ============================================
    // 8. SKILL CARDS ANIMATION ON HOVER
    // ============================================
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) rotate(2deg)';
            this.style.boxShadow = '0 15px 40px rgba(99, 102, 241, 0.25)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(0deg)';
            this.style.boxShadow = 'none';
        });
    });

    // ============================================
    // 9. LOG VISITOR COUNT (LOCAL STORAGE)
    // ============================================
    let visitorCount = parseInt(localStorage.getItem('visitorCount') || '0');
    visitorCount++;
    localStorage.setItem('visitorCount', visitorCount);
    console.log(`Welcome! You are visitor #${visitorCount} to this portfolio.`);

    // ============================================
    // 10. WELCOME BACK MESSAGE (RETURNING USERS)
    // ============================================
    const lastVisit = localStorage.getItem('lastVisit');
    const now = new Date();
    
    if (lastVisit) {
        const lastVisitDate = new Date(lastVisit);
        const daysSinceLastVisit = Math.floor((now - lastVisitDate) / (1000 * 60 * 60 * 24));
        if (daysSinceLastVisit > 0) {
            console.log(`Welcome back! It's been ${daysSinceLastVisit} day(s) since your last visit.`);
        }
    } else {
        console.log('Welcome to my portfolio for the first time!');
    }
    localStorage.setItem('lastVisit', now.toISOString());
});

// ============================================
// REUSABLE UTILITY FUNCTIONS
// ============================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function scrollToElement(elementId, offset = 80) {
    const element = document.getElementById(elementId);
    if (element) {
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}
