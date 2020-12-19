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
});
