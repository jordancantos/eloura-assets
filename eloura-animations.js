/* ═══════════════════════════════════════════════════════════════════════════════
   ELOURA WELLNESS - ANIMATION SYSTEM
   Generated: December 2025
   Motion System: Vibrant-inspired (Dramatic, refined, intentional)
   ═══════════════════════════════════════════════════════════════════════════════ */

// ───────────────────────────────────────────────────────────────────────────────
// CONFIGURATION
// ─────────────────────────────────────────────────────────────────────────────── 

const ANIMATION_CONFIG = {
  // Use GSAP for best results (Vibrant's exact implementation)
  // Set to false to use simpler Intersection Observer approach
  useGSAP: true,
  
  // Scroll trigger threshold (0.1 = trigger when 10% visible)
  threshold: 0.1,
  
  // Vibrant's exact specifications
  vibrant: {
    easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    headlineDuration: 0.9,
    blockDuration: 1.2,
    stagger: 0.3,
    riseDistance: '4rem',
    blurAmount: '20px',
    scrollStart: 'top 90%'
  }
};

// ───────────────────────────────────────────────────────────────────────────────
// OPTION 1: INTERSECTION OBSERVER (SIMPLER, NO EXTERNAL LIBRARIES)
// ─────────────────────────────────────────────────────────────────────────────── 

function initIntersectionObserver() {
  // Observer configuration
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: ANIMATION_CONFIG.threshold
  };

  // Create observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add visible class to trigger CSS transition
        entry.target.classList.add('is-visible', 'animate-visible');
        
        // Optional: stop observing after animation (one-time only)
        // Uncomment the line below if you want animations to trigger only once
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Apply to all animated elements
  const animatedElements = document.querySelectorAll(
    '.animate-fade-rise, .animate-blur-in, .animate-fade, .animate-scale'
  );

  animatedElements.forEach(element => {
    observer.observe(element);
  });

  console.log(`✓ Intersection Observer initialized: ${animatedElements.length} elements`);
}

// ───────────────────────────────────────────────────────────────────────────────
// OPTION 2: GSAP + SCROLLTRIGGER (VIBRANT'S EXACT IMPLEMENTATION)
// ─────────────────────────────────────────────────────────────────────────────── 

function initGSAPAnimations() {
  // Check if GSAP is loaded
  if (typeof gsap === 'undefined') {
    console.error('GSAP not loaded. Include GSAP CDN in page head.');
    console.log('Add to <head>: <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.0/dist/gsap.min.js"></script>');
    console.log('Add to <head>: <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.0/dist/ScrollTrigger.min.js"></script>');
    return;
  }

  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  const config = ANIMATION_CONFIG.vibrant;

  // ═══ HERO SECTION ANIMATIONS (Page Load) ═══
  const heroSection = document.querySelector('.hero-section, .section-gradient');
  
  if (heroSection) {
    const heroHeadline = heroSection.querySelector('.animate-blur-in, .c-headline');
    const heroSubtext = heroSection.querySelector('.c-paragraph');
    const heroButton = heroSection.querySelector('.c-button');

    if (heroHeadline) {
      gsap.set(heroHeadline, {
        opacity: 0,
        y: config.riseDistance,
        filter: `blur(${config.blurAmount})`
      });

      gsap.to(heroHeadline, {
        opacity: 1,
        y: '0',
        filter: 'blur(0)',
        duration: config.headlineDuration,
        ease: config.easing,
        delay: 0.2
      });
    }

    if (heroSubtext) {
      gsap.set(heroSubtext, {
        opacity: 0,
        y: config.riseDistance
      });

      gsap.to(heroSubtext, {
        opacity: 1,
        y: '0',
        duration: config.blockDuration,
        ease: config.easing,
        delay: 0.5
      });
    }

    if (heroButton) {
      gsap.set(heroButton, {
        opacity: 0,
        y: config.riseDistance
      });

      gsap.to(heroButton, {
        opacity: 1,
        y: '0',
        duration: config.blockDuration,
        ease: config.easing,
        delay: 0.8
      });
    }
  }

  // ═══ HEADLINE REVEALS (Scroll-triggered with blur) ═══
  const headlines = gsap.utils.toArray('.animate-blur-in:not(.hero-section .animate-blur-in)');
  
  headlines.forEach(headline => {
    gsap.set(headline, {
      opacity: 0,
      y: config.riseDistance,
      filter: `blur(${config.blurAmount})`
    });
    
    gsap.to(headline, {
      opacity: 1,
      y: '0',
      filter: 'blur(0)',
      duration: config.headlineDuration,
      ease: config.easing,
      scrollTrigger: {
        trigger: headline,
        start: config.scrollStart,
        toggleActions: 'play none none none'
      }
    });
  });

  // ═══ CONTENT BLOCKS (Scroll-triggered with stagger) ═══
  const contentSections = document.querySelectorAll('[class*="content-section"], .c-section');
  
  contentSections.forEach(section => {
    const blocks = section.querySelectorAll('.animate-fade-rise:not(.hero-section .animate-fade-rise)');
    
    if (blocks.length > 0) {
      gsap.set(blocks, {
        opacity: 0,
        y: config.riseDistance
      });
      
      gsap.to(blocks, {
        opacity: 1,
        y: '0',
        duration: config.blockDuration,
        stagger: config.stagger,  // Vibrant's 0.3s stagger
        ease: config.easing,
        scrollTrigger: {
          trigger: section,
          start: config.scrollStart,
          toggleActions: 'play none none none'
        }
      });
    }
  });

  // ═══ FADE IN ANIMATIONS (Simple, no movement) ═══
  const fadeElements = gsap.utils.toArray('.animate-fade');
  
  fadeElements.forEach(element => {
    gsap.set(element, {
      opacity: 0
    });
    
    gsap.to(element, {
      opacity: 1,
      duration: config.blockDuration,
      ease: config.easing,
      scrollTrigger: {
        trigger: element,
        start: config.scrollStart,
        toggleActions: 'play none none none'
      }
    });
  });

  // ═══ SCALE IN ANIMATIONS (Cards, images) ═══
  const scaleElements = gsap.utils.toArray('.animate-scale');
  
  scaleElements.forEach(element => {
    gsap.set(element, {
      opacity: 0,
      scale: 0.95
    });
    
    gsap.to(element, {
      opacity: 1,
      scale: 1,
      duration: config.blockDuration,
      ease: config.easing,
      scrollTrigger: {
        trigger: element,
        start: config.scrollStart,
        toggleActions: 'play none none none'
      }
    });
  });

  console.log('✓ GSAP animations initialized (Vibrant specifications)');
  console.log(`  - ${headlines.length} headlines with blur`);
  console.log(`  - ${contentSections.length} content sections with stagger`);
}

// ───────────────────────────────────────────────────────────────────────────────
// MOBILE MENU TOGGLE
// ─────────────────────────────────────────────────────────────────────────────── 

function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const body = document.body;

  if (!menuToggle || !mobileMenu) {
    console.log('Mobile menu elements not found');
    return;
  }

  // Toggle menu
  menuToggle.addEventListener('click', (e) => {
    e.preventDefault();
    mobileMenu.classList.toggle('is-open');
    body.style.overflow = mobileMenu.classList.contains('is-open') ? 'hidden' : '';
    
    // Animate hamburger icon
    menuToggle.classList.toggle('is-active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (mobileMenu.classList.contains('is-open') && 
        !mobileMenu.contains(e.target) && 
        !menuToggle.contains(e.target)) {
      mobileMenu.classList.remove('is-open');
      menuToggle.classList.remove('is-active');
      body.style.overflow = '';
    }
  });

  // Close menu when clicking a link
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
      menuToggle.classList.remove('is-active');
      body.style.overflow = '';
    });
  });

  console.log('✓ Mobile menu initialized');
}

// ───────────────────────────────────────────────────────────────────────────────
// SMOOTH SCROLL FOR ANCHOR LINKS
// ─────────────────────────────────────────────────────────────────────────────── 

function initSmoothScroll() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      // Skip if href is just "#" or empty
      if (!href || href === '#') return;
      
      const target = document.querySelector(href);
      
      if (target) {
        e.preventDefault();
        
        // Calculate offset for sticky header
        const headerHeight = document.querySelector('.site-header, .c-nav-menu-v2, .c-nav-menu')?.offsetHeight || 80;
        const targetPosition = target.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  console.log(`✓ Smooth scroll initialized: ${anchorLinks.length} anchor links`);
}

// ───────────────────────────────────────────────────────────────────────────────
// INITIALIZATION
// ─────────────────────────────────────────────────────────────────────────────── 

function init() {
  console.log('═══════════════════════════════════════════════════════');
  console.log('Eloura Wellness - Animation System');
  console.log('Motion: Vibrant-inspired (Dramatic, refined, intentional)');
  console.log('═══════════════════════════════════════════════════════');

  // Initialize animations based on configuration
  if (ANIMATION_CONFIG.useGSAP && typeof gsap !== 'undefined') {
    initGSAPAnimations();
  } else {
    if (ANIMATION_CONFIG.useGSAP) {
      console.warn('⚠ GSAP not found, falling back to Intersection Observer');
    }
    initIntersectionObserver();
  }

  // Initialize other features
  initMobileMenu();
  initSmoothScroll();

  console.log('✓ All systems initialized');
}

// ───────────────────────────────────────────────────────────────────────────────
// AUTO-RUN ON DOM READY
// ─────────────────────────────────────────────────────────────────────────────── 

// DOM Ready check
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Export functions for manual initialization if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    init,
    initGSAPAnimations,
    initIntersectionObserver,
    initMobileMenu,
    initSmoothScroll,
    ANIMATION_CONFIG
  };
}
