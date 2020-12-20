$(document).ready(function () {
  // Burger menu
  var menuButton = document.querySelector(".burger-button");
  menuButton.addEventListener("click", function () {
    document.querySelector(".menu").classList.toggle("menu_visible");
    document.querySelector("body").classList.toggle("overflow_hidden");
  });

  //Bookmark hero
  document.getElementById("a1").onclick = function () {
    document.getElementById("a1").classList.toggle("a-bookmark-icon_active");
  };

  var swiperSlider = new Swiper(".article-slider", {
    loop: true,
    effect: "fade",

    navigation: {
      nextEl: ".article-slider__button_next",
      prevEl: ".article-slider__button_prev",
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });

  // Load more comments button
  var loadMoreButton = document.querySelector(".a-comments-button__more");
  var commentHidden = document.querySelectorAll(".a-comments-group_hidden");
  loadMoreButton.addEventListener("click", function () {
    $(commentHidden).removeClass("a-comments-group_hidden");
  });
});
