let swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  speed: 800,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
  },
});

// Function to update the slider's settings based on the screen width
function updateSliderSettings() {
  let windowWidth = window.innerWidth;

  if (windowWidth <= 800) {
    swiper.params.slidesPerView = 1;
    swiper.params.spaceBetween = 10;
    swiper.params.slidesPerGroup = 1;
  } else if (windowWidth <= 1200) {
    swiper.params.slidesPerView = 2;
    swiper.params.spaceBetween = 20;
    swiper.params.slidesPerGroup = 2;
  } else {
    swiper.params.slidesPerView = 3;
    swiper.params.spaceBetween = 30;
    swiper.params.slidesPerGroup = 3;
  }

  swiper.update();
}

// Call the updateSliderSettings function initially
updateSliderSettings();

// Add an event listener to the window's resize event
window.addEventListener("resize", updateSliderSettings);
