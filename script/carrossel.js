
let slidesPerViewValue = window.innerWidth <= 1200 ? 1 : 3; // Altere isso conforme necessário

const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView:slidesPerViewValue,
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets:true,
    
  },
  

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

