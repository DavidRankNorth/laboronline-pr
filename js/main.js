/**
 * LaborOnline PR - Main JavaScript
 * Core interactions and functionality
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initScrollAnimations();
  initSearchBox();
  initTestimonialCarousel();

  // Initialize i18n
  if (window.i18n) {
    window.i18n.init();
  }
});

/**
 * Navbar scroll behavior
 */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add shadow when scrolled
    if (currentScroll > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  });
}

/**
 * Mobile menu toggle
 */
function initMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const body = document.body;

  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  });

  // Close menu when clicking on links
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.classList.remove('active');
      mobileMenu.classList.remove('active');
      body.style.overflow = '';
    });
  });

  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
      menuBtn.classList.remove('active');
      mobileMenu.classList.remove('active');
      body.style.overflow = '';
    }
  });
}

/**
 * Scroll-triggered animations
 */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');

  if (!animatedElements.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => {
    observer.observe(el);
  });
}

/**
 * Search box interactions
 */
function initSearchBox() {
  const searchBox = document.querySelector('.search-box');
  if (!searchBox) return;

  const serviceSelect = searchBox.querySelector('select');
  const locationInput = searchBox.querySelector('input[type="text"]');
  const searchBtn = searchBox.querySelector('.btn');

  if (searchBtn) {
    searchBtn.addEventListener('click', (e) => {
      e.preventDefault();

      const service = serviceSelect ? serviceSelect.value : '';
      const location = locationInput ? locationInput.value : '';

      if (!service) {
        serviceSelect?.focus();
        showSearchHint(searchBox, 'Por favor selecciona un servicio');
        return;
      }

      // Simulate search action
      console.log('Searching for:', { service, location });

      // Show loading state
      searchBtn.innerHTML = `
        <svg class="animate-spin" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
          <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
        </svg>
        <span data-i18n="btn_search">Buscando...</span>
      `;

      // Reset after demo
      setTimeout(() => {
        searchBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
          <span data-i18n="btn_search">${window.i18n ? window.i18n.t('btn_search') : 'Buscar'}</span>
        `;
      }, 1500);
    });
  }

  // Service pills click handler
  const servicePills = document.querySelectorAll('.service-pill');
  servicePills.forEach(pill => {
    pill.addEventListener('click', () => {
      const service = pill.dataset.service;
      if (serviceSelect && service) {
        serviceSelect.value = service;
        // Highlight the search box
        searchBox.style.boxShadow = '0 0 0 3px rgba(135, 206, 250, 0.5)';
        setTimeout(() => {
          searchBox.style.boxShadow = '';
        }, 1000);
      }
    });
  });
}

/**
 * Show search hint message
 */
function showSearchHint(searchBox, message) {
  // Remove existing hint
  const existingHint = searchBox.parentNode.querySelector('.search-hint');
  if (existingHint) existingHint.remove();

  const hint = document.createElement('p');
  hint.className = 'search-hint';
  hint.textContent = message;
  hint.style.cssText = `
    color: var(--color-accent-coral);
    font-size: 0.875rem;
    margin-top: 0.5rem;
    text-align: center;
  `;

  searchBox.parentNode.insertBefore(hint, searchBox.nextSibling);

  setTimeout(() => {
    hint.remove();
  }, 3000);
}

/**
 * Testimonial carousel (auto-rotate on mobile)
 */
function initTestimonialCarousel() {
  const container = document.querySelector('.testimonials-container');
  if (!container) return;

  const cards = container.querySelectorAll('.testimonial-card');
  if (cards.length <= 1) return;

  let currentIndex = 0;
  let intervalId = null;

  function isMobile() {
    return window.innerWidth < 1024;
  }

  function showCard(index) {
    if (!isMobile()) return;

    cards.forEach((card, i) => {
      card.style.display = i === index ? 'block' : 'none';
    });
  }

  function nextCard() {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
  }

  function startCarousel() {
    if (isMobile()) {
      showCard(currentIndex);
      intervalId = setInterval(nextCard, 5000);
    }
  }

  function stopCarousel() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
    cards.forEach(card => {
      card.style.display = '';
    });
  }

  // Handle resize
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      if (isMobile()) {
        if (!intervalId) startCarousel();
      } else {
        stopCarousel();
      }
    }, 250);
  });

  // Initial setup
  if (isMobile()) {
    startCarousel();
  }
}

/**
 * Smooth scroll to section
 */
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
    const targetPosition = section.offsetTop - navbarHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
}

/**
 * Service card hover effects
 */
document.addEventListener('mouseover', (e) => {
  const card = e.target.closest('.service-card');
  if (card) {
    const icon = card.querySelector('.service-card-icon');
    if (icon) {
      icon.style.transform = 'scale(1.1) rotate(5deg)';
    }
  }
});

document.addEventListener('mouseout', (e) => {
  const card = e.target.closest('.service-card');
  if (card) {
    const icon = card.querySelector('.service-card-icon');
    if (icon) {
      icon.style.transform = '';
    }
  }
});

// Add CSS for spin animation
const style = document.createElement('style');
style.textContent = `
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  .animate-spin {
    animation: spin 1s linear infinite;
  }
`;
document.head.appendChild(style);
