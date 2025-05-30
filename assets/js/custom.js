// AOS Initialization
AOS.init({
  duration: 1000 // animation duration
});

// Mobile Menu Toggle
document.querySelector('.menu_icon')?.addEventListener('click', () => {
  document.body.classList.toggle('open');
});

// Scroll Event - Add class on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY >= 100) {
    document.body.classList.add('scroll_start');
  } else {
    document.body.classList.remove('scroll_start');
  }
});

// Highlight Active Nav Link
const links = document.querySelectorAll(".navbar ul li a");
const currentUrl = window.location.href;

links.forEach(link => {
  if (currentUrl.includes(link.getAttribute("href"))) {
    link.classList.add("active");
  }
});

// Slick Slider Initialization (after jQuery is loaded)
$(document).ready(function () {
  $('.image-slider').each(function () {
    const $slider = $(this);

    $slider.slick({
      infinite: true,
      dots: false,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 4000,
      fade: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            adaptiveHeight: true,
            slidesToShow: 2
          }
        }
      ]
    });
  });
});

// Scroll to top on page reload
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

 var s = skrollr.init({
    smoothScrolling: true,    // Scroll smooth banata hai
    forceHeight: false,       // Page ki height ko force mat karo (scroll rukne se bachayega)
    mobileCheck: function() {
        return false;         // Mobile/tablet pe scroll enable rahe
    }
});

 

