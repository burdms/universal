$(document).ready(function () {
  var toTop = $(".top");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(toTop).removeClass("top_hidden");
    } else if ($(this).scrollTop() < 100) {
      $(toTop).addClass("top_hidden");
    }
  });

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
  document.getElementById("bookmark-1").onclick = function () {
    document.getElementById("bookmark-1").classList.toggle("bookmark-icon_active");
  };
  document.getElementById("bookmark-2").onclick = function () {
    document.getElementById("bookmark-2").classList.toggle("bookmark-icon_active");
  };
  document.getElementById("bookmark-3").onclick = function () {
    document.getElementById("bookmark-3").classList.toggle("bookmark-icon_active");
  };
  document.getElementById("bookmark-4").onclick = function () {
    document.getElementById("bookmark-4").classList.toggle("bookmark-icon_active");
  };
  document.getElementById("bookmark-5").onclick = function () {
    document.getElementById("bookmark-5").classList.toggle("bookmark-icon_active");
  };
  document.getElementById("bookmark-6").onclick = function () {
    document.getElementById("bookmark-6").classList.toggle("bookmark-icon_active");
  };

  // Read more aside lates articles button
  var readMoreButton = document.querySelector(".latest-aside__more-button");
  var asideMainHidden = document.querySelectorAll(".aside-li_hidden");
  readMoreButton.addEventListener("click", function () {
    $(asideMainHidden).removeClass("aside-li_hidden");
  });

  // Modal open/close
  var modalButton = $('[data-toggle="modal"]');
  var closeModalButton = $(".modal__close");
  var closeOverlay = $(".modal__overlay");
  var body = $("body");
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);
  closeOverlay.on("click", closeModal);

  function openModal(event) {
    event.preventDefault();
    var targetModal = $(this).attr("data-href");
    body.addClass("overflow_hidden");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay_visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog_visible");
  }

  function closeModal(event) {
    event.preventDefault();
    body.removeClass("overflow_hidden");
    modalOverlay.removeClass("modal__overlay_visible");
    modalDialog.removeClass("modal__dialog_visible");
  }

  $(document).keydown(function (event) {
    if (event.keyCode == 27) {
      body.removeClass("overflow_hidden");
      modalOverlay.removeClass("modal__overlay_visible");
      modalDialog.removeClass("modal__dialog_visible");
    }
  });

  // Form validation
  $(".footer-subscribe__form").validate({
    messages: {
      email: {
        required: "Пример: name@domain.com",
        email: "Пример: name@domain.com",
      },
    },
  });

  $(".modal__form").validate({
    ignore: [],
    errorClass: "error error_modal",
    messages: {
      theme: {
        required: "Необходимо выбрать тему",
      },
      email: {
        required: "Необходимо указать email",
        email: "Пример: name@domain.com",
      },
      privacy: {
        required: "Необходимо принять условия",
      },
    },
  });

  // Custom select in modal *********************************************************
  var x, i, j, l, ll, selElmnt, a, b, c;
  /* Look for any elements with the class "custom-select": */
  x = document.getElementsByClassName("custom-select");
  l = x.length;
  for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
      /* For each option in the original select element,
    create a new DIV that will act as an option item: */
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function (e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
      /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  }

  function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
  except the current select box: */
    var x,
      y,
      i,
      xl,
      yl,
      arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i);
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }

  /* If the user clicks anywhere outside the select box,
then close all select boxes: */
  document.addEventListener("click", closeAllSelect);
});
