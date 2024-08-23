
function showText(id) {
    document.getElementById(id).style.display = 'block';
}

function hideText(id) {
    document.getElementById(id).style.display = 'none';
}
        
let currentIndex = 0;

function updateCarousel() {
  const carousel = document.getElementById('customer-stories-carousel');
  const dots = document.getElementsByClassName('carousel-dot');
  const totalCards = document.getElementsByClassName('customer-stories-card').length;
  const cardWidth = document.getElementsByClassName('customer-stories-card')[0].offsetWidth + 10; // Including margin

  carousel.style.transform = `translateX(${-currentIndex * cardWidth}px)`;

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  dots[currentIndex].className += ' active';
}

function nextSlide() {
  const totalCards = document.getElementsByClassName('customer-stories-card').length;
  currentIndex = (currentIndex + 1) % totalCards;
  updateCarousel();
}

function prevSlide() {
  const totalCards = document.getElementsByClassName('customer-stories-card').length;
  currentIndex = (currentIndex - 1 + totalCards) % totalCards;
  updateCarousel();
}

function currentSlide(index) {
  currentIndex = index - 1;
  updateCarousel();
}

document.addEventListener('DOMContentLoaded', () => {
  updateCarousel();
});

/* -------------------------testimonials carousel------------------------- */

let currentTestimonialIndex = 0;

function updateTestimonialsCarousel() {
  const carousel = document.getElementById('testimonials-carousel');
  const dots = document.getElementsByClassName('testimonials-carousel-dot');
  const totalCards = document.getElementsByClassName('testimonials-card').length;
  const cardWidth = document.getElementsByClassName('testimonials-card')[0].offsetWidth + 10; // Including margin

  carousel.style.transform = `translateX(${-currentTestimonialIndex * cardWidth}px)`;

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  dots[Math.floor(currentTestimonialIndex / 2)].className += ' active';
}

function nextTestimonial() {
  const totalCards = document.getElementsByClassName('testimonials-card').length;
  currentTestimonialIndex = (currentTestimonialIndex + 2) % totalCards;
  updateTestimonialsCarousel();
}

function prevTestimonial() {
  const totalCards = document.getElementsByClassName('testimonials-card').length;
  currentTestimonialIndex = (currentTestimonialIndex - 2 + totalCards) % totalCards;
  updateTestimonialsCarousel();
}

function currentTestimonial(index) {
  currentTestimonialIndex = (index - 1) * 2;
  updateTestimonialsCarousel();
}

document.addEventListener('DOMContentLoaded', () => {
  updateTestimonialsCarousel();
});