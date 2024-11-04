document.addEventListener('DOMContentLoaded', function () {
    const cartButton = document.querySelector('.cart');
    const cartDropdown = document.querySelector('.cart-dropdown');

    // Toggle cart dropdown visibility
    cartButton.addEventListener('click', function () {
        cartDropdown.classList.toggle('open');
        
        // Close dropdown if it's already open (optional)
        if (cartDropdown.classList.contains('open')) {
            cartDropdown.style.opacity = '1';
            cartDropdown.style.visibility = 'visible';
        } else {
            cartDropdown.style.opacity = '0';
            cartDropdown.style.visibility = 'hidden';
        }
    });

    // Optional: Close dropdown when clicking outside of it
    document.addEventListener('click', function (event) {
        if (!cartButton.contains(event.target) && !cartDropdown.contains(event.target)) {
            cartDropdown.classList.remove('open');
            cartDropdown.style.opacity = '0';
            cartDropdown.style.visibility = 'hidden';
        }
    });
});

// slide1
var swiper = new Swiper(".slide-content", {
     slidesPerView: 4,
     spaceBetween: 25,
     loop: true,
     
     navigation: {
       nextEl: ".swiper-navBtn-next",
       prevEl: ".swiper-navBtn-prev",
     },
 
     breakpoints:{
         0: {
             slidesPerView: 1,
         },
         450:{
             slidesPerView: 2,
         },
         950: {
             slidesPerView: 3,
         },
         1000: {
             slidesPerView: 4,
         },

     },
   });