/* ============================================
   SAMSON CLEANING SUPPLY
   Minimal JavaScript — Mobile Menu & Smooth Scroll
   ============================================ */

   document.addEventListener('DOMContentLoaded', function() {
  
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    
    if (menuToggle && mobileNav) {
      menuToggle.addEventListener('click', function() {
        const isOpen = mobileNav.classList.contains('open');
        
        if (isOpen) {
          mobileNav.classList.remove('open');
          menuToggle.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        } else {
          mobileNav.classList.add('open');
          menuToggle.setAttribute('aria-expanded', 'true');
          document.body.style.overflow = 'hidden';
        }
      });
      
      // Close mobile nav when clicking a link
      mobileNav.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
          mobileNav.classList.remove('open');
          menuToggle.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        });
      });
    }
    
    // Close mobile menu on window resize if desktop
    window.addEventListener('resize', function() {
      if (window.innerWidth >= 768 && mobileNav.classList.contains('open')) {
        mobileNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
    
    // Header shadow on scroll
    const header = document.getElementById('header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 10) {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
      } else {
        header.style.boxShadow = 'none';
      }
      
      lastScroll = currentScroll;
    });
    
  });