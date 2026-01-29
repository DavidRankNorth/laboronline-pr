/**
 * LaborOnline PR - Internationalization (i18n) Module
 * Handles language switching between Spanish and English
 */

const translations = {
  es: {
    // Navigation
    nav_services: 'Servicios',
    nav_how_it_works: 'Como Funciona',
    nav_providers: 'Para Proveedores',
    nav_trust: 'Confianza',
    btn_login: 'Iniciar Sesion',
    btn_get_started: 'Comenzar',

    // Hero Section
    hero_badge: 'Servicio confiable en Puerto Rico',
    hero_title: 'Servicios del hogar, sin complicaciones',
    hero_subtitle: 'Reserva profesionales verificados en minutos. Disponibilidad el mismo dia.',
    search_service_placeholder: 'Que necesitas?',
    search_location_placeholder: 'Tu ubicacion',
    btn_search: 'Buscar',
    popular_label: 'Popular:',

    // Services Section
    section_services_title: 'Que necesitas hoy?',
    section_services_subtitle: 'Explora nuestros servicios mas populares',

    // Services
    service_cleaning: 'Limpieza',
    service_handyman: 'Handyman',
    service_moving: 'Mudanza',
    service_plumbing: 'Plomeria',
    service_electrical: 'Electricidad',
    service_painting: 'Pintura',
    service_landscaping: 'Jardineria',
    service_assembly: 'Ensamblaje',
    service_cleaning_desc: 'Limpieza profesional del hogar',
    service_handyman_desc: 'Reparaciones y mejoras',
    service_moving_desc: 'Mudanzas locales y ayuda',
    service_plumbing_desc: 'Reparaciones de plomeria',
    service_electrical_desc: 'Instalaciones electricas',
    service_painting_desc: 'Pintura interior y exterior',
    service_landscaping_desc: 'Cuidado del jardin',
    service_assembly_desc: 'Ensamblaje de muebles',
    btn_book_now: 'Reservar Ahora',

    // How It Works
    section_how_title: 'Tres pasos simples',
    section_how_subtitle: 'Reserva servicios del hogar en minutos, no horas.',
    step1_title: 'Dinos que necesitas',
    step1_desc: 'Describe tu proyecto y recibe cotizaciones de profesionales verificados.',
    step2_title: 'Conecta al instante',
    step2_desc: 'Revisa perfiles, comparas precios y elige el mejor profesional.',
    step3_title: 'Relajate, esta resuelto',
    step3_desc: 'Tu profesional completa el trabajo. Paga de forma segura cuando estes satisfecho.',

    // Trust Section
    section_trust_title: 'Miles confian en LaborOnline PR',
    section_trust_subtitle: 'Tu seguridad y satisfaccion son nuestra prioridad.',
    trust_verified_title: 'Profesionales Verificados',
    trust_verified_desc: 'Verificacion de antecedentes y resenas reales',
    trust_secure_title: 'Pagos Seguros',
    trust_secure_desc: 'Transacciones protegidas y encriptadas',
    trust_guarantee_title: 'Garantia de Satisfaccion',
    trust_guarantee_desc: 'Si no estas satisfecho, te devolvemos tu dinero',
    trust_support_title: 'Soporte 24/7',
    trust_support_desc: 'Estamos aqui para ayudarte en cualquier momento',

    // Stats
    stat_jobs: 'Trabajos Completados',
    stat_providers: 'Proveedores Verificados',
    stat_rating: 'Calificacion Promedio',

    // Testimonials
    section_testimonials_title: 'Lo que dicen nuestros clientes',
    testimonial1_text: 'Encontre un plomero excelente en menos de una hora. El servicio fue rapido, profesional y el precio justo. Definitivamente usare LaborOnline PR de nuevo.',
    testimonial1_name: 'Maria Rodriguez',
    testimonial1_service: 'Servicio de Plomeria',
    testimonial2_text: 'La mudanza fue perfecta. El equipo llego a tiempo, cuidaron mis muebles y terminaron antes de lo esperado. Muy recomendado!',
    testimonial2_name: 'Carlos Mendez',
    testimonial2_service: 'Servicio de Mudanza',
    testimonial3_text: 'Uso LaborOnline PR para limpieza semanal. Siempre envian profesionales confiables y mi casa queda impecable.',
    testimonial3_name: 'Ana Gutierrez',
    testimonial3_service: 'Servicio de Limpieza',

    // Provider CTA
    provider_title: 'Convierte tus habilidades en ingresos',
    provider_subtitle: 'Unete a cientos de profesionales que estan creciendo su negocio con LaborOnline PR.',
    provider_benefit1: 'Accede a nuevos clientes cada dia',
    provider_benefit2: 'Establece tu propio horario',
    provider_benefit3: 'Recibe pagos seguros y puntuales',
    provider_benefit4: 'Comision baja del 10%',
    btn_become_provider: 'Conviertete en Proveedor',

    // Footer
    footer_tagline: 'Conectando hogares con profesionales de confianza en todo Puerto Rico.',
    footer_services: 'Servicios',
    footer_company: 'Compania',
    footer_about: 'Sobre Nosotros',
    footer_careers: 'Carreras',
    footer_press: 'Prensa',
    footer_support: 'Soporte',
    footer_help: 'Centro de Ayuda',
    footer_contact: 'Contacto',
    footer_safety: 'Seguridad',
    footer_legal: 'Legal',
    footer_terms: 'Terminos de Servicio',
    footer_privacy: 'Politica de Privacidad',
    footer_cookies: 'Cookies',
    footer_copyright: '2025 LaborOnline PR. Todos los derechos reservados.'
  },
  en: {
    // Navigation
    nav_services: 'Services',
    nav_how_it_works: 'How It Works',
    nav_providers: 'For Providers',
    nav_trust: 'Trust & Safety',
    btn_login: 'Log In',
    btn_get_started: 'Get Started',

    // Hero Section
    hero_badge: 'Trusted service in Puerto Rico',
    hero_title: 'Home services made easy',
    hero_subtitle: 'Book verified professionals in minutes. Same-day availability.',
    search_service_placeholder: 'What do you need?',
    search_location_placeholder: 'Your location',
    btn_search: 'Search',
    popular_label: 'Popular:',

    // Services Section
    section_services_title: 'What do you need today?',
    section_services_subtitle: 'Explore our most popular services',

    // Services
    service_cleaning: 'Cleaning',
    service_handyman: 'Handyman',
    service_moving: 'Moving',
    service_plumbing: 'Plumbing',
    service_electrical: 'Electrical',
    service_painting: 'Painting',
    service_landscaping: 'Landscaping',
    service_assembly: 'Assembly',
    service_cleaning_desc: 'Professional home cleaning',
    service_handyman_desc: 'Repairs and improvements',
    service_moving_desc: 'Local moves and help',
    service_plumbing_desc: 'Plumbing repairs',
    service_electrical_desc: 'Electrical installations',
    service_painting_desc: 'Interior and exterior painting',
    service_landscaping_desc: 'Garden care',
    service_assembly_desc: 'Furniture assembly',
    btn_book_now: 'Book Now',

    // How It Works
    section_how_title: 'Three simple steps',
    section_how_subtitle: 'Book home services in minutes, not hours.',
    step1_title: 'Tell us what you need',
    step1_desc: 'Describe your project and receive quotes from verified professionals.',
    step2_title: 'Get matched instantly',
    step2_desc: 'Review profiles, compare prices, and choose the best professional.',
    step3_title: 'Relax, it\'s handled',
    step3_desc: 'Your professional completes the work. Pay securely when satisfied.',

    // Trust Section
    section_trust_title: 'Why thousands trust LaborOnline PR',
    section_trust_subtitle: 'Your safety and satisfaction are our priority.',
    trust_verified_title: 'Verified Professionals',
    trust_verified_desc: 'Background checks and real reviews',
    trust_secure_title: 'Secure Payments',
    trust_secure_desc: 'Protected and encrypted transactions',
    trust_guarantee_title: 'Satisfaction Guarantee',
    trust_guarantee_desc: 'Not satisfied? We\'ll refund your money',
    trust_support_title: '24/7 Support',
    trust_support_desc: 'We\'re here to help anytime',

    // Stats
    stat_jobs: 'Jobs Completed',
    stat_providers: 'Verified Providers',
    stat_rating: 'Average Rating',

    // Testimonials
    section_testimonials_title: 'What our customers say',
    testimonial1_text: 'Found an excellent plumber in less than an hour. The service was fast, professional, and fairly priced. Will definitely use LaborOnline PR again.',
    testimonial1_name: 'Maria Rodriguez',
    testimonial1_service: 'Plumbing Service',
    testimonial2_text: 'The move was perfect. The team arrived on time, took care of my furniture, and finished earlier than expected. Highly recommended!',
    testimonial2_name: 'Carlos Mendez',
    testimonial2_service: 'Moving Service',
    testimonial3_text: 'I use LaborOnline PR for weekly cleaning. They always send reliable professionals and my house is spotless.',
    testimonial3_name: 'Ana Gutierrez',
    testimonial3_service: 'Cleaning Service',

    // Provider CTA
    provider_title: 'Turn your skills into income',
    provider_subtitle: 'Join hundreds of professionals growing their business with LaborOnline PR.',
    provider_benefit1: 'Access new clients every day',
    provider_benefit2: 'Set your own schedule',
    provider_benefit3: 'Receive secure, timely payments',
    provider_benefit4: 'Low 10% commission',
    btn_become_provider: 'Become a Provider',

    // Footer
    footer_tagline: 'Connecting homes with trusted professionals across Puerto Rico.',
    footer_services: 'Services',
    footer_company: 'Company',
    footer_about: 'About Us',
    footer_careers: 'Careers',
    footer_press: 'Press',
    footer_support: 'Support',
    footer_help: 'Help Center',
    footer_contact: 'Contact',
    footer_safety: 'Safety',
    footer_legal: 'Legal',
    footer_terms: 'Terms of Service',
    footer_privacy: 'Privacy Policy',
    footer_cookies: 'Cookies',
    footer_copyright: '2025 LaborOnline PR. All rights reserved.'
  }
};

// Current language state
let currentLanguage = 'es';

/**
 * Initialize i18n module
 */
function initI18n() {
  // Check for saved language preference
  const savedLang = localStorage.getItem('laboronline_lang');
  if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
    currentLanguage = savedLang;
  }

  // Set up language toggle buttons
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      setLanguage(lang);
    });
  });

  // Apply initial language
  updateLanguageUI();
  translatePage();
}

/**
 * Set the current language
 * @param {string} lang - Language code ('es' or 'en')
 */
function setLanguage(lang) {
  if (lang !== 'es' && lang !== 'en') return;

  currentLanguage = lang;
  localStorage.setItem('laboronline_lang', lang);

  updateLanguageUI();
  translatePage();
}

/**
 * Update language toggle button states
 */
function updateLanguageUI() {
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    if (btn.dataset.lang === currentLanguage) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

/**
 * Translate all elements on the page
 */
function translatePage() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.dataset.i18n;
    if (translations[currentLanguage][key]) {
      el.textContent = translations[currentLanguage][key];
    }
  });

  // Handle placeholders
  const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
  placeholders.forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (translations[currentLanguage][key]) {
      el.placeholder = translations[currentLanguage][key];
    }
  });

  // Update HTML lang attribute
  document.documentElement.lang = currentLanguage;
}

/**
 * Get translation for a key
 * @param {string} key - Translation key
 * @returns {string} Translated text
 */
function t(key) {
  return translations[currentLanguage][key] || key;
}

/**
 * Get current language
 * @returns {string} Current language code
 */
function getCurrentLanguage() {
  return currentLanguage;
}

// Export functions for use in other modules
window.i18n = {
  init: initI18n,
  setLanguage,
  t,
  getCurrentLanguage
};
