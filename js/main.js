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

  // Hero tab slider on the main page (mobile)
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

  // Bookmark icons in latest news section

  // var bookmarkMain = document.querySelector(".bookmark-icon");
  // bookmarkMain.addEventListener("click", function () {
  //   document.querySelector(".bookmark-icon").classList.toggle("bookmark-icon_active");
  // });

  // var bookmarkMain = $('[data-toggle="check"]');
  // bookmarkMain.on("click", function () {
  //   var targetBookmark = $(this).attr("id");
  //   $(bookmarkMain).find(".bookmark-icon").toggleClass("bookmark-icon_active");
  // });

  // Жесткий неадаптивный ужасный кривой невыносимый костыль. Не шарю в js, никак не могу (хоть и понимаю) связать через this. Но я сделаю : ))
  document.getElementById("1").onclick = function () {
    document.getElementById("1").classList.toggle("bookmark-icon_active");
  };
  document.getElementById("2").onclick = function () {
    document.getElementById("2").classList.toggle("bookmark-icon_active");
  };
  document.getElementById("3").onclick = function () {
    document.getElementById("3").classList.toggle("bookmark-icon_active");
  };
  document.getElementById("4").onclick = function () {
    document.getElementById("4").classList.toggle("bookmark-icon_active");
  };
  document.getElementById("5").onclick = function () {
    document.getElementById("5").classList.toggle("bookmark-icon_active");
  };
  document.getElementById("6").onclick = function () {
    document.getElementById("6").classList.toggle("bookmark-icon_active");
  };

  // Read more aside lates articles button
  var readMoreButton = document.querySelector(".latest-aside__more-button");
  var asideMainHidden = document.querySelector(".aside-li_hidden");
  readMoreButton.addEventListener("click", function () {
    $(asideMainHidden).removeClass("aside-li_hidden");
  });
});
