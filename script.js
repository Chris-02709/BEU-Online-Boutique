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


// Products data
//added products with images and descriptions dynamically
const products = [
  {
    title: "Blouse & Suspender Pants",
    price: "KSH 2500",
    description: "Stylish blouse and suspender pants set.",
    image: "images/women fashion/1930s Solid Blouse & Suspender Pants.jpeg"
  },
  {
    title: "Men Official Wear",
    price: "KSH 6500",
    description: "Stylish combo.",
    image: "images/men wear no bg.png"
  },
  {
    title: "Summer Kids Fashion",
    price: "KSH 3500",
    description: "Stylish kids outfit.",
    image: "images/kids fashion/Get your little fashionista ready for the summer….jpeg"
  },
  {
    title: "Leather Jacket",
    price: "KSH 1500",
    description: "Stylish leather jacket.",
    image: "images/women fashion/Abercrombie & Fitch _ Authentic American clothing since 1892.jpeg"
  },
  {
    title: "Cotton Shirt",
    price: "KSH 1000",
    description: "White striped shirt.",
    image: "images/men fashion/Eleganz trifft Komfort - Ihr perfekter….jpeg"
  },
  {
    title: "Rugged Jeans",
    price: "KSH 1500",
    description: "Stylish rugged jeans.",
    image: "images/men fashion/Hign-concerned Chemical _ none Craft of Weaving… (1).jpeg"
  },
  {
    title: "Winter Outfits For Women",
    price: "KSH 5500",
    description: "Stylish winter set.",
    image: "images/women fashion/40+ Super Stylish Winter Outfits for Women 2024.jpeg"
  },
  {
    title: "Floral Lace Dress",
    price: "KSH 2500",
    description: "Stylish floral lace dress.",
    image: "images/women fashion/HomRain Women's Elegant Floral Lace Dress Off The Shoulder High Low Hem Dresses for Wedding for Cocktail for Party.jpeg"
  },
  {
    title: "Gorro Adidas Cuff Knit",
    price: "KSH 1000",
    description: "Cuff knit unisex.",
    image: "images/accessories/GORRO ADIDAS AC CUFF KNIT UNISEX.jpeg"
  },
  {
    title: "Kids Fashion",
    price: "KSH 3500",
    description: "Gray boys wear.",
    image: "images/kids fashion/4aace87d-4a20-4ff7-b3e0-ce58e6238462.jpeg"
  },
  {
    title: "Nike Sneaker",
    price: "KSH 4500",
    description: "Heart of basketball culture.",
    image: "images/shoes & footwear/Born from the heart of basketball culture and….jpeg"
  },
  {
    title: "Women Fashion",
    price: "KSH 6500",
    description: "Stylish set.",
    image: "images/women fashion/7559.jpg"
  },
  {
    title: "Trucker Cap",
    price: "KSH 500",
    description: "Black trucker cap with a mesh back.",
    image: "images/accessories/This six-panel trucker cap with a mesh back will….jpeg"
  },
  {
    title: "Dress",
    price: "KSH 1500",
    description: "Stylish dress.",
    image: "images/kids fashion/Brand Name_ jumping metersAge Range_ 13-24mAge….jpeg"
  },
  {
    title: "Gray Suit",
    price: "KSH 4500",
    description: "Stylish suit.",
    image: "images/men fashion/download.jpeg"
  },
  {
    title: "Adjustable Silver Rings",
    price: "KSH 5000",
    description: "Stainless steel jewelry for women.",
    image: "images/accessories/Chic Adjustable Silver Alphabet Rings - A-Z Initials, Stainless Steel Fashion Jewelry for Women - Resizable _ Platinum _ T.jpeg"
  },
  {
    title: "Men Shorts",
    price: "KSH 900",
    description: "Stylish shorts.",
    image: "images/men fashion/Product information_ Color_ black, gray, brown….jpeg"
  },
  {
    title: "Kids Fashion",
    price: "KSH 100",
    description: "stylish kids.",
    image: "images/kids fashion/4aace87d-4a20-4ff7-b3e0-ce58e6238462.jpeg"
  },
  {
    title: "Women Fashion",
    price: "KSH 6500",
    description: "Stylish set.",
    image: "images/women fashion/15668.jpg"
  },
  {
    title: "Designer Shirt",
    price: "KSH 2000",
    description: "Stylish designer shirt.",
    image: "images/men fashion/clothes.jpeg"
  },
  {
    title: "Elegant Leather Purse",
    price: "KSH 4000",
    description: "khaki colorblock square purse.",
    image: "images/accessories/Khaki Elegant Collar  PU Leather Colorblock Square….jpeg"
  },
  {
    title: "Track Pants",
    price: "KSH 1000",
    description: "gray track pants",
    image: "images/men fashion/Track pants featuring a grey cotton fabric with….jpeg"
  },
  {
    title: "Slides",
    price: "KSH 1500",
    description: "men slides",
    image: "images/shoes & footwear/Hign-concerned Chemical _ None Style _ LEISURE….jpeg"
  },
  {
    title: "Wood Watch",
    price: "KSH 3500",
    description: "Stylish wood watch.",
    image: "images/accessories/Product information_ Material_ Wood Target….jpeg"
  }
];

// Grab the container
const container = document.createElement('div');
container.classList.add('product-grid');
document.body.appendChild(container);

// Loop and render
products.forEach(product => {
  const productEl = document.createElement('div');
  productEl.classList.add('product');
  productEl.innerHTML = `
    <img src="${product.image}" alt="${product.title}" class="product-img">
    <div class="productdetails">
      <h3 class="product-title">${product.title}</h3>
      <h3 class="product-price">${product.price}</h3>
      <p class="product-description">${product.description}</p>
      <button class="btn btn-primary">BUY NOW</button>
    </div>
  `;
  container.appendChild(productEl);
});
