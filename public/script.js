const products = [
  {
    id: 1,
    name: "Modern Coffee Maker",
    price: 89.99,
    category: "Kitchen Appliances",
    image:
      "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Automatic drip coffee maker with timer",
  },
  {
    id: 2,
    name: "Robot Vacuum Cleaner",
    price: 299.99,
    category: "Cleaning Supplies",
    image:
      "https://images.unsplash.com/photo-1589922585618-d053d9f6f58a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Smart robot vacuum with WiFi connectivity",
  },
  {
    id: 3,
    name: "Modern Wall Clock",
    price: 49.99,
    category: "Home Decor",
    image:
      "https://images.unsplash.com/photo-1589739900843-4b8e3bf5f320?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Minimalist design wall clock",
  },
  {
    id: 4,
    name: "Air Purifier",
    price: 199.99,
    category: "Home Appliances",
    image:
      "https://images.unsplash.com/photo-1589739900843-4b8e3bf5f320?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "HEPA filter air purifier for large rooms",
  },
  {
    id: 5,
    name: "Smart Thermostat",
    price: 159.99,
    category: "Smart Home",
    image:
      "https://images.unsplash.com/photo-1585593266439-8e6d4d96f8a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "WiFi enabled smart thermostat with app control",
  },
  {
    id: 6,
    name: "Blender",
    price: 79.99,
    category: "Kitchen Appliances",
    image:
      "https://images.unsplash.com/photo-1570222094114-d054a817e56b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "High-speed blender with multiple settings",
  },
  {
    id: 7,
    name: "LED Floor Lamp",
    price: 129.99,
    category: "Home Decor",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Modern LED floor lamp with adjustable brightness",
  },
  {
    id: 8,
    name: "Smart Doorbell",
    price: 149.99,
    category: "Smart Home",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Video doorbell with motion detection",
  },
  {
    id: 9,
    name: "Toaster Oven",
    price: 89.99,
    category: "Kitchen Appliances",
    image:
      "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Digital toaster oven with multiple cooking modes",
  },
  {
    id: 10,
    name: "Throw Pillows Set",
    price: 39.99,
    category: "Home Decor",
    image:
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Set of 4 decorative throw pillows",
  },
  {
    id: 11,
    name: "Wireless Speaker",
    price: 129.99,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Portable Bluetooth speaker with rich sound",
  },
  {
    id: 12,
    name: "Microwave Oven",
    price: 159.99,
    category: "Kitchen Appliances",
    image:
      "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "1000W microwave with smart sensors",
  },
  {
    id: 13,
    name: "Area Rug",
    price: 199.99,
    category: "Home Decor",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Modern geometric pattern area rug",
  },
  {
    id: 14,
    name: "Smart Light Bulbs",
    price: 49.99,
    category: "Smart Home",
    image:
      "https://images.unsplash.com/photo-1587037542794-6c5ef0fd8ac3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Set of 4 WiFi-enabled color changing bulbs",
  },
  {
    id: 15,
    name: "Stand Mixer",
    price: 279.99,
    category: "Kitchen Appliances",
    image:
      "https://images.unsplash.com/photo-1578598336003-71cd838e0c92?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Professional grade stand mixer with accessories",
  },
  {
    id: 16,
    name: "Security Camera",
    price: 89.99,
    category: "Smart Home",
    image:
      "https://images.unsplash.com/photo-1557324232-b8917d8c3427?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Indoor security camera with night vision",
  },
  {
    id: 17,
    name: "Desk Lamp",
    price: 44.99,
    category: "Home Decor",
    image:
      "https://images.unsplash.com/photo-1534105615256-13940a56ff44?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Adjustable LED desk lamp with USB port",
  },
  {
    id: 18,
    name: "Air Fryer",
    price: 119.99,
    category: "Kitchen Appliances",
    image:
      "https://images.unsplash.com/photo-1589369439406-6942a92a1518?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Digital air fryer with multiple presets",
  },
  {
    id: 19,
    name: "Smart Scale",
    price: 59.99,
    category: "Smart Home",
    image:
      "https://images.unsplash.com/photo-1578319439584-104c94d37305?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Bluetooth connected smart scale",
  },
  {
    id: 20,
    name: "Wall Art Set",
    price: 149.99,
    category: "Home Decor",
    image:
      "https://images.unsplash.com/photo-1582045253062-f63cfbd45bcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Set of 3 modern canvas prints",
  },
  {
    id: 21,
    name: "Food Processor",
    price: 169.99,
    category: "Kitchen Appliances",
    image:
      "https://images.unsplash.com/photo-1589731119540-c4c1a7a61c7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "10-cup food processor with multiple blades",
  },
  {
    id: 22,
    name: "Smart Plug",
    price: 24.99,
    category: "Smart Home",
    image:
      "https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "WiFi enabled smart plug with voice control",
  },
  {
    id: 23,
    name: "Mirror Set",
    price: 89.99,
    category: "Home Decor",
    image:
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Set of 3 decorative wall mirrors",
  },
  {
    id: 24,
    name: "Rice Cooker",
    price: 79.99,
    category: "Kitchen Appliances",
    image:
      "https://images.unsplash.com/photo-1589831494949-63e522dd63aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Digital rice cooker with steamer basket",
  },
];

// Add featured status to products
products.forEach((product) => {
  product.featured = Math.random() > 0.7; // Randomly assign featured status for demo
});

const ITEMS_PER_PAGE = 6; // 2 rows x 3 columns
let currentPage = 1;

document.addEventListener("DOMContentLoaded", function () {
  // Initial filter state
  let filters = {
    categories: [],
    minPrice: 0,
    maxPrice: 1000,
    sortBy: "newest",
  };

  // Update filters when checkboxes change
  document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        filters.categories.push(this.nextElementSibling.textContent.trim());
      } else {
        filters.categories = filters.categories.filter(
          (cat) => cat !== this.nextElementSibling.textContent.trim()
        );
      }
      applyFilters();
    });
  });

  // Update price range
  document.querySelectorAll('input[type="number"]').forEach((input) => {
    input.addEventListener("change", function () {
      if (this.previousElementSibling.textContent.includes("Min")) {
        filters.minPrice = Number(this.value);
      } else {
        filters.maxPrice = Number(this.value);
      }
      applyFilters();
    });
  });

  // Update sort option
  document.querySelector("select").addEventListener("change", function () {
    filters.sortBy = this.value.toLowerCase();
    applyFilters();
  });

  function applyFilters() {
    let filteredProducts = [...products]; // Create a copy to avoid modifying original array

    // Apply category filters
    if (filters.categories.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        filters.categories.includes(product.category)
      );
    }

    // Apply price filters
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.price >= filters.minPrice && product.price <= filters.maxPrice
    );

    // Apply sorting
    switch (filters.sortBy.toLowerCase()) {
      case "giá: thấp đến cao":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "giá: cao đến thấp":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case "tên a-z":
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "tên z-a":
        filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "mới nhất":
        filteredProducts.sort((a, b) => b.id - a.id);
        break;
      default:
        // Giữ nguyên thứ tự mặc định
        break;
    }

    displayProducts(filteredProducts);
  }

  function displayProducts(productsToShow) {
    const productsGrid = document.querySelector(".products-grid");
    if (!productsGrid) return;

    // Calculate pagination
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedProducts = productsToShow.slice(startIndex, endIndex);
    const totalPages = Math.ceil(productsToShow.length / ITEMS_PER_PAGE);

    // Display products for current page
    productsGrid.innerHTML = paginatedProducts
      .map(
        (product) => `
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="${product.image}" alt="${
          product.name
        }" class="w-full h-48 object-cover">
        <div class="p-4">
          <h3 class="font-semibold text-lg mb-2">${product.name}</h3>
          <p class="text-gray-600 mb-2 text-nowrap truncate">${
            product.description
          }</p>
          <p class="text-blue-600 font-bold">${product.price.toLocaleString(
            "vi-VN"
          )} ₫</p>
          <button onclick="addToCart(${product.id})" 
                  class="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Thêm vào giỏ
          </button>
        </div>
      </div>
    `
      )
      .join("");

    updatePagination(totalPages);
  }

  function updatePagination(totalPages) {
    const pageNumbers = document.getElementById("pageNumbers");
    const prevButton = document.getElementById("prevPage");
    const nextButton = document.getElementById("nextPage");

    // Update prev/next buttons
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;

    // Generate page numbers
    let pageNumbersHTML = "";
    for (let i = 1; i <= totalPages; i++) {
      pageNumbersHTML += `
      <button 
        class="px-4 py-2 ${
          currentPage === i ? "bg-blue-500 text-white" : "bg-gray-200"
        } rounded hover:bg-blue-300"
        onclick="goToPage(${i})"
      >
        ${i}
      </button>
    `;
    }
    pageNumbers.innerHTML = pageNumbersHTML;
  }

  function goToPage(pageNumber) {
    currentPage = pageNumber;
    applyFilters();
  }

  document.getElementById("prevPage").addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      applyFilters();
    }
  });

  document.getElementById("nextPage").addEventListener("click", () => {
    const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
    if (currentPage < totalPages) {
      currentPage++;
      applyFilters();
    }
  });

  // Initialize products display
  currentPage = 1;
  displayProducts(products);

  // Featured products carousel
  const featuredProducts = products
    .filter((p) => p.featured)
    .sort((a, b) => b.price - a.price); // Sort by price as featured metric

  let currentSlide = 0;
  const totalSlides = Math.ceil(
    featuredProducts.length / (window.innerWidth < 768 ? 1 : 3)
  );

  function updateFeaturedProducts() {
    const featuredGrid = document.querySelector(".featured-carousel");
    const isMobile = window.innerWidth < 768;
    const slidesPerView = isMobile ? 1 : 3;
    const start = currentSlide * slidesPerView;
    const end = start + slidesPerView;

    if (!featuredGrid) return;

    featuredGrid.innerHTML = featuredProducts
      .slice(start, end)
      .map(
        (product) => `
        <div class="p-4 border rounded-lg product-card">
          <img src="${product.image}" alt="${product.name}" 
               class="mb-4 w-full h-48 object-cover">
          <h3 class="font-semibold">${product.name}</h3>
          <p class="text-gray-600">${product.price.toLocaleString(
            "vi-VN"
          )} ₫</p>
          <button onclick="addToCart(${product.id})" 
                  class="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Thêm vào giỏ
          </button>
        </div>
      `
      )
      .join("");

    // Update carousel controls
    document.getElementById("prevSlide").disabled = currentSlide === 0;
    document.getElementById("nextSlide").disabled =
      currentSlide === totalSlides - 1;

    // Update mobile indicators
    const indicatorsContainer = document.getElementById("mobileIndicators");
    if (indicatorsContainer && isMobile) {
      indicatorsContainer.innerHTML = Array.from(
        { length: totalSlides },
        (_, i) => `
        <button 
          class="w-2 h-2 rounded-full ${
            currentSlide === i ? "bg-blue-500" : "bg-gray-300"
          }"
          onclick="goToSlide(${i})"
        ></button>
      `
      ).join("");
    }
  }

  function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateFeaturedProducts();
  }

  // Add touch handling for carousel
  let touchStartX = 0;
  let touchEndX = 0;

  const featuredCarousel = document.querySelector(".featured-carousel");

  featuredCarousel?.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.touches[0].clientX;
    },
    false
  );

  featuredCarousel?.addEventListener(
    "touchmove",
    (e) => {
      touchEndX = e.touches[0].clientX;
    },
    false
  );

  featuredCarousel?.addEventListener(
    "touchend",
    () => {
      handleSwipe();
    },
    false
  );

  function handleSwipe() {
    const swipeThreshold = 50; // minimum distance for swipe
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) < swipeThreshold) return; // Ignore if swipe too short

    if (diff > 0) {
      // Swiped left - go to next slide
      if (currentSlide < totalSlides - 1) {
        currentSlide++;
        updateFeaturedProducts();
      }
    } else {
      // Swiped right - go to previous slide
      if (currentSlide > 0) {
        currentSlide--;
        updateFeaturedProducts();
      }
    }
  }

  // Initialize carousel controls
  document.getElementById("prevSlide")?.addEventListener("click", () => {
    if (currentSlide > 0) {
      currentSlide--;
      updateFeaturedProducts();
    }
  });

  document.getElementById("nextSlide")?.addEventListener("click", () => {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
      updateFeaturedProducts();
    }
  });

  // Update on window resize
  window.addEventListener("resize", () => {
    const newSlidesPerView = window.innerWidth < 768 ? 1 : 3;
    if (newSlidesPerView !== slidesPerView) {
      currentSlide = 0;
      updateFeaturedProducts();
    }
  });

  // Initial render
  updateFeaturedProducts();
});

// Back to top functionality
document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.getElementById("backToTop");

  // Hiện nút khi cuộn xuống 100px
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      backToTopButton.classList.replace("opacity-0", "opacity-100");
    } else {
      backToTopButton.classList.replace("opacity-100", "opacity-0");
    }
  });

  // Xử lý sự kiện click
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  console.log(`Added to cart: ${product.name}`);
  // Implement cart functionality here
}
