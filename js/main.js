$(document).ready(function () {
  // Burger menu
  var menuButton = document.querySelector(".burger-button");
  menuButton.addEventListener("click", function () {
    document.querySelector(".menu").classList.toggle("menu_visible");
    document.querySelector("body").classList.toggle("overflow_hidden");
  });

  // Hero tab selector on the main page
  var tab = $(".hero-tab");
  var content = $(".hero-content");

  tab.on("click", function (event) {
    var activeContent = $(this).attr("data-target");
    content.removeClass("hero-content_active");
    tab.removeClass("hero-tab_active");
    $(activeContent).addClass("hero-content_active");
    $(this).addClass("hero-tab_active");
  });

  var heroSwiper = new Swiper(".swiper-container", {
    loop: true,
    effect: "fade",

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    autoplay: {
      delay: 3000,
    },
  });
});
