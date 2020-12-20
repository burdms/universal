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
  // Comment validation
  $(".a-comments-new__form").validate({
    messages: {
      comment: {
        required: "Это поле обязательно",
        minlength: "Ваш комментарий должен содержать мин. 100 символов",
      },
    },
  });
  // Footer validation
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
