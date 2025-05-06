document.addEventListener('DOMContentLoaded', function() {
  // Slider functionality
  const sliderWrapper = document.querySelector('.slider-wrapper');
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const indicatorsContainer = document.querySelector('.slider-indicators');
  
  let currentIndex = 0;
  const slideCount = slides.length;
  let slideInterval;
  
  // Create indicators
  function createIndicators() {
    slides.forEach((_, index) => {
      const indicator = document.createElement('div');
      indicator.classList.add('indicator');
      if (index === 0) indicator.classList.add('active');
      indicator.addEventListener('click', () => goToSlide(index));
      indicatorsContainer.appendChild(indicator);
    });
  }
  
  // Update slider state
  function updateSlider() {
    sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    // Update active classes
    slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === currentIndex);
    });
    
    // Update indicators
    document.querySelectorAll('.indicator').forEach((indicator, index) => {
      indicator.classList.toggle('active', index === currentIndex);
    });
  }
  
  // Go to specific slide
  function goToSlide(index) {
    currentIndex = index;
    updateSlider();
    resetInterval();
  }
  
  // Next slide
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlider();
    resetInterval();
  }
  
  // Previous slide
  function prevSlide() {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    updateSlider();
    resetInterval();
  }
  
  // Reset auto-slide interval
  function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
  }
  
  // Initialize slider
  function initSlider() {
    createIndicators();
    updateSlider();
    slideInterval = setInterval(nextSlide, 5000);
    
    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    });
    
    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    
    sliderWrapper.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    sliderWrapper.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
      if (touchEndX < touchStartX - 50) nextSlide();
      if (touchEndX > touchStartX + 50) prevSlide();
    }
    
    // Pause on hover
    const slider = document.querySelector('.slider');
    slider.addEventListener('mouseenter', () => {
      clearInterval(slideInterval);
    });
    
    slider.addEventListener('mouseleave', () => {
      resetInterval();
    });
  }
  
  // Initialize the slider
  initSlider();
  
  // Search functionality
  const searchInput = document.querySelector('.search-input');
  const searchIcon = document.querySelector('.search-icon');
  
  searchIcon.addEventListener('click', () => {
    if (searchInput.value.trim() !== '') {
      performSearch(searchInput.value);
    }
  });
  
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && searchInput.value.trim() !== '') {
      performSearch(searchInput.value);
    }
  });
  
  function performSearch(query) {
    // Implement your search functionality here
    console.log('Searching for:', query);
    // This would typically filter products or redirect to a search results page
  }
 
  
  // Menu item hover effects
  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      // Add any additional hover effects here
    });
  });
});