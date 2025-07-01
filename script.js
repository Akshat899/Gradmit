document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");
    const applyBtn = document.getElementById("applyBtn");
    const popup = document.getElementById("popup");
    const closeBtn = document.getElementById("closePopup");
    const form = document.getElementById("applicationForm");
    const responseText = document.getElementById("formResponse");
  
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
    applyBtn.addEventListener("click", () => {
        popup.style.display = "flex";
      });
    
      closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
        responseText.textContent = "";
        form.reset();
      });
});
let testimonials = document.querySelectorAll('.testimonial');
let index = 0;
let interval = null;

function showTestimonial(i) {
  testimonials.forEach((t, idx) => {
    t.classList.remove('active');
    if (idx === i) {
      t.classList.add('active');
    }
  });
}

function startCarousel() {
  interval = setInterval(() => {
    index = (index + 1) % testimonials.length;
    showTestimonial(index);
  }, 4000);
}

function stopCarousel() {
  clearInterval(interval);
}

document.querySelector('.testimonial-carousel').addEventListener('mouseenter', stopCarousel);
document.querySelector('.testimonial-carousel').addEventListener('mouseleave', startCarousel);

// Initialize
showTestimonial(index);
startCarousel();
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    item.classList.toggle('active');

    // Close other items
    document.querySelectorAll('.accordion-item').forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
      }
    });
  });
});
function openPopup() {
  document.getElementById("popup").style.display = "flex";
} 
var undergradSwiper = new Swiper('.undergrad-swiper', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

var postgradSwiper = new Swiper('.postgrad-swiper', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

// Pause on hover functionality
document.querySelectorAll('.swiper').forEach(swiperEl => {
  swiperEl.addEventListener('mouseenter', () => {
    swiperEl.swiper.autoplay.stop();
  });
  swiperEl.addEventListener('mouseleave', () => {
    swiperEl.swiper.autoplay.start();
  });
});