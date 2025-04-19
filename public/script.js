const products = [
  {
    id: 1,
    name: "Máy pha cà phê hiện đại",
    price: 2190000,
    category: "Thiết bị nhà bếp",
    image:
      "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Máy pha cà phê tự động với hẹn giờ",
  },
  {
    id: 2,
    name: "Robot hút bụi",
    price: 6990000,
    category: "Dụng cụ vệ sinh",
    image:
      "https://i.pinimg.com/736x/c8/c4/33/c8c433247518603236856f3ac6621789.jpg",
    description: "Robot hút bụi thông minh kết nối WiFi",
  },
  {
    id: 3,
    name: "Đồng hồ treo tường hiện đại",
    price: 1190000,
    category: "Trang trí nhà cửa",
    image:
      "https://i.pinimg.com/736x/ca/9d/82/ca9d82472fee48a567205fc5eb1f9f64.jpg",
    description: "Đồng hồ treo tường thiết kế tối giản",
  },
  {
    id: 4,
    name: "Máy lọc không khí",
    price: 4990000,
    category: "Thiết bị gia dụng",
    image:
      "https://i.pinimg.com/736x/40/41/ee/4041eeed9d8a6946bf17d7d422648920.jpg",
    description: "Máy lọc không khí HEPA cho phòng lớn",
  },
  {
    id: 5,
    name: "Nhiệt kế thông minh",
    price: 3990000,
    category: "Nhà thông minh",
    image:
      "https://i.pinimg.com/736x/4e/d4/e2/4ed4e2a37ce4a5d5e26844b7bc2880fe.jpg",
    description: "Nhiệt kế thông minh kết nối WiFi với ứng dụng điều khiển",
  },
  {
    id: 6,
    name: "Máy xay sinh tố",
    price: 1990000,
    category: "Thiết bị nhà bếp",
    image:
      "https://images.unsplash.com/photo-1570222094114-d054a817e56b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Máy xay sinh tố tốc độ cao với nhiều chế độ",
  },
  {
    id: 7,
    name: "Đèn sàn LED",
    price: 3290000,
    category: "Trang trí nhà cửa",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Đèn sàn LED hiện đại với độ sáng điều chỉnh",
  },
  {
    id: 8,
    name: "Chuông cửa thông minh",
    price: 3790000,
    category: "Nhà thông minh",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Chuông cửa video với cảm biến chuyển động",
  },
  {
    id: 9,
    name: "Lò nướng bánh mì",
    price: 2190000,
    category: "Thiết bị nhà bếp",
    image:
      "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Lò nướng bánh mì kỹ thuật số với nhiều chế độ nấu",
  },
  {
    id: 10,
    name: "Bộ gối trang trí",
    price: 999000,
    category: "Trang trí nhà cửa",
    image:
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Bộ 4 gối trang trí",
  },
  {
    id: 11,
    name: "Loa không dây",
    price: 3290000,
    category: "Điện tử",
    image:
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Loa Bluetooth di động với âm thanh sống động",
  },
  {
    id: 12,
    name: "Lò vi sóng",
    price: 3990000,
    category: "Thiết bị nhà bếp",
    image:
      "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Lò vi sóng 1000W với cảm biến thông minh",
  },
  {
    id: 13,
    name: "Thảm trải sàn",
    price: 4990000,
    category: "Trang trí nhà cửa",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Thảm trải sàn họa tiết hình học hiện đại",
  },
  {
    id: 14,
    name: "Bóng đèn thông minh",
    price: 1190000,
    category: "Nhà thông minh",
    image:
      "https://i.pinimg.com/736x/d1/79/f4/d179f48d5a30819f4e7c7136bb14b119.jpg",
    description: "Bộ 4 bóng đèn đổi màu kết nối WiFi",
  },
  {
    id: 15,
    name: "Máy trộn bột",
    price: 6990000,
    category: "Thiết bị nhà bếp",
    image:
      "https://i.pinimg.com/736x/06/63/b3/0663b34dc008defba3ce76cd1d425b5b.jpg",
    description: "Máy trộn bột chuyên nghiệp với phụ kiện đi kèm",
  },
  {
    id: 16,
    name: "Camera an ninh",
    price: 2190000,
    category: "Nhà thông minh",
    image:
      "https://i.pinimg.com/736x/61/26/8d/61268de5c74c638bab5c431d5e12b494.jpg",
    description: "Camera an ninh trong nhà với chế độ nhìn đêm",
  },
  {
    id: 17,
    name: "Đèn bàn",
    price: 1090000,
    category: "Trang trí nhà cửa",
    image:
      "https://images.unsplash.com/photo-1534105615256-13940a56ff44?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Đèn bàn LED điều chỉnh được với cổng USB",
  },
  {
    id: 18,
    name: "Nồi chiên không dầu",
    price: 2990000,
    category: "Thiết bị nhà bếp",
    image:
      "https://i.pinimg.com/736x/28/8a/74/288a74ca157de712c14b0ed6ad22e56b.jpg",
    description: "Nồi chiên không dầu kỹ thuật số với nhiều chế độ",
  },
  {
    id: 19,
    name: "Cân thông minh",
    price: 1490000,
    category: "Nhà thông minh",
    image:
      "https://images.unsplash.com/photo-1578319439584-104c94d37305?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Cân thông minh kết nối Bluetooth",
  },
  {
    id: 20,
    name: "Bộ tranh treo tường",
    price: 3790000,
    category: "Trang trí nhà cửa",
    image:
      "https://images.unsplash.com/photo-1582045253062-f63cfbd45bcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Bộ 3 tranh canvas hiện đại",
  },
  {
    id: 21,
    name: "Máy xay thực phẩm",
    price: 4290000,
    category: "Thiết bị nhà bếp",
    image:
      "https://i.pinimg.com/736x/ca/a6/0e/caa60e5e3fe1f4c9753e0720606f1190.jpg",
    description: "Máy xay thực phẩm 10 cốc với nhiều lưỡi dao",
  },
  {
    id: 22,
    name: "Ổ cắm thông minh",
    price: 629000,
    category: "Nhà thông minh",
    image:
      "https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Ổ cắm thông minh kết nối WiFi với điều khiển giọng nói",
  },
  {
    id: 23,
    name: "Bộ gương treo tường",
    price: 2190000,
    category: "Trang trí nhà cửa",
    image:
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Bộ 3 gương treo tường trang trí",
  },
  {
    id: 24,
    name: "Nồi cơm điện",
    price: 1990000,
    category: "Thiết bị nhà bếp",
    image:
      "https://i.pinimg.com/736x/fe/18/78/fe18787d3b91bdb6cac79ac0f9a03b0a.jpg",
    description: "Nồi cơm điện kỹ thuật số với giỏ hấp",
  },
];

// Add featured status to products
products.forEach((product) => {
  product.featured = Math.random() > 0.7; // Randomly assign featured status for demo
});

const ITEMS_PER_PAGE = 6; // 2 rows x 3 columns
let currentPage = 1;

// Get unique categories from products
const categories = [...new Set(products.map((product) => product.category))];

document.addEventListener("DOMContentLoaded", function () {
  // Add categories to checkbox list
  const categoryList = document.querySelector(".bg-gray-50 ul");
  categoryList.innerHTML = categories
    .map(
      (category) => `
    <li>
      <label class="flex items-center space-x-2">
        <input type="checkbox" class="rounded" value="${category}"/>
        <span>${category}</span>
      </label>
    </li>
  `
    )
    .join("");

  // Initial filter state
  let filters = {
    categories: [],
    minPrice: 0,
    maxPrice: 10000000,
    sortBy: "mới nhất",
    searchQuery: "", // Add search query to filters
  };

  // Add search event listener
  document
    .getElementById("productSearch")
    ?.addEventListener("input", function (e) {
      filters.searchQuery = e.target.value.toLowerCase();
      currentPage = 1;
      applyFilters();
    });

  // Update filters when checkboxes change
  document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        filters.categories.push(this.value);
      } else {
        filters.categories = filters.categories.filter(
          (cat) => cat !== this.value
        );
      }
      currentPage = 1; // Reset to first page when filter changes
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

    // Apply search filter
    if (filters.searchQuery) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(filters.searchQuery) ||
          product.description.toLowerCase().includes(filters.searchQuery) ||
          product.category.toLowerCase().includes(filters.searchQuery)
      );
    }

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
  console.log(`Đã thêm vào giỏ hàng: ${product.name}`);
  // Implement cart functionality here
}
