$(document).ready(function () {
  var carousel_items = $("#introCarousel .carousel-inner .carousel-item");
  if (carousel_items.length < 2) {
    $("#introCarousel .carousel-indicators").css("display", "none");
  }

  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    $(".main-menu-container").addClass("fixed-top");
  } else {
    $(".main-menu-container").removeClass("fixed-top");
  }

  var whatMenuHovered = "";
  $("#shop").mouseover(function () {
    $("#shop").addClass("active");
    $("#shopSubMenu").removeClass("hidden");
    $(".main-menu-container").addClass("active");
    $(".sub-menu-container").removeClass("hidden");
  });
  $("#shop").mouseout(function () {
    $("#shop").removeClass("active");
    $("#shopSubMenu").addClass("hidden");
    $(".main-menu-container").removeClass("active");
    $(".sub-menu-container").addClass("hidden");
    whatMenuHovered = "shop";
  });
  $("#plus").mouseover(function () {
    $("#plus").addClass("active");
    $("#plusSubMenu").removeClass("hidden");
    $(".main-menu-container").addClass("active");
    $(".sub-menu-container").removeClass("hidden");
  });
  $("#plus").mouseout(function () {
    $("#plus").removeClass("active");
    $("#plusSubMenu").addClass("hidden");
    $(".main-menu-container").removeClass("active");
    $(".sub-menu-container").addClass("hidden");
    whatMenuHovered = "plus";
  });
  $("#kuru").mouseover(function () {
    $("#kuru").addClass("active");
    $("#kuruSubMenu").removeClass("hidden");
    $(".main-menu-container").addClass("active");
    $(".sub-menu-container").removeClass("hidden");
  });
  $("#kuru").mouseout(function () {
    $("#kuru").removeClass("active");
    $("#kuruSubMenu").addClass("hidden");
    $(".main-menu-container").removeClass("active");
    $(".sub-menu-container").addClass("hidden");
    whatMenuHovered = "kuru";
  });
  $("#tasa").mouseover(function () {
    $("#tasa").addClass("active");
    $("#tasaSubMenu").removeClass("hidden");
    $(".main-menu-container").addClass("active");
    $(".sub-menu-container").removeClass("hidden");
  });
  $("#tasa").mouseout(function () {
    $("#tasa").removeClass("active");
    $("#tasaSubMenu").addClass("hidden");
    $(".main-menu-container").removeClass("active");
    $(".sub-menu-container").addClass("hidden");
    whatMenuHovered = "tasa";
  });
  $("#hakk").mouseover(function () {
    $("#hakk").addClass("active");
    $("#hakkSubMenu").removeClass("hidden");
    $(".main-menu-container").addClass("active");
    $(".sub-menu-container").removeClass("hidden");
  });
  $("#hakk").mouseout(function () {
    $("#hakk").removeClass("active");
    $("#hakkSubMenu").addClass("hidden");
    $(".main-menu-container").removeClass("active");
    $(".sub-menu-container").addClass("hidden");
    whatMenuHovered = "hakk";
  });

  $(".sub-menu-container").mouseover(function () {
    $(".main-menu-container").addClass("active");
    $(".sub-menu-container").removeClass("hidden");
    switch (whatMenuHovered) {
      case "shop":
        $(".main-menu-item").removeClass("active");
        $("#shop").addClass("active");
        $("#shopSubMenu").removeClass("hidden");
        break;
      case "plus":
        $(".main-menu-item").removeClass("active");
        $("#plus").addClass("active");
        $("#plusSubMenu").removeClass("hidden");
        break;
      case "kuru":
        $(".main-menu-item").removeClass("active");
        $("#kuru").addClass("active");
        $("#kuruSubMenu").removeClass("hidden");
        break;
      case "tasa":
        $(".main-menu-item").removeClass("active");
        $("#tasa").addClass("active");
        $("#tasaSubMenu").removeClass("hidden");
        break;
      case "hakk":
        $(".main-menu-item").removeClass("active");
        $("#hakk").addClass("active");
        $("#hakkSubMenu").removeClass("hidden");
        break;
    }
  });
  $(".sub-menu-container").mouseout(function () {
    $(".main-menu-container").removeClass("active");
    $(".sub-menu-container").addClass("hidden");
    $(".main-menu-item").removeClass("active");
    $(".sub-menu").addClass("hidden");
  });

  const subMenuItems = $(".sub-menu-item");
  for (let i = 0; i < subMenuItems.length; i++) {
    $(subMenuItems[i]).mouseover(function () {
      const subMenuImages = $(".sub-menu-image");
      if (i % 2 === 0) {
        for (let j = 0; j < subMenuImages.length; j++) {
          $(subMenuImages[j]).attr("src", `./assets/submenu_img${j}.png`);
        }
      } else {
        for (let j = 0; j < subMenuImages.length; j++) {
          $(subMenuImages[j]).attr(
            "src",
            `./assets/submenu_img${(j + 1) % 3}.png`
          );
        }
      }
    });
  }

  $(".collapse-toggle-btn").click(function () {
    if ($(".collapse-toggle-btn").hasClass("opened")) {
      $(".collapse-toggle-btn").removeClass("opened");
      $(".collapse-menu").removeClass("opened");
      $(".main-menu-container").removeClass("active");
    } else {
      $(".collapse-toggle-btn").addClass("opened");
      $(".collapse-menu").addClass("opened");
      $(".main-menu-container").addClass("active");
    }
  });

  $(".lightbox-point").mouseover(function () {
    $(".lightbox").addClass("show");
  });
  $(".lightbox-point").mouseout(function () {
    $(".lightbox").removeClass("show");
  });
  $(".lightbox-close").click(function () {
    $(".lightbox").removeClass("show");
  });
});

window.onscroll = function () {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    $(".main-menu-container").addClass("fixed-top");
  } else {
    $(".main-menu-container").removeClass("fixed-top");
  }
};

window.onresize = function () {
  if (
    $(".collapse-toggle-btn").hasClass("opened") &&
    document.body.offsetWidth < 800
  ) {
    $(".main-menu-container").addClass("active");
  }
};

function slide(wrapper, items, prev, next) {
  var posX1 = 0,
    posX2 = 0,
    posInitial,
    posFinal,
    threshold = 100,
    slides = items.getElementsByClassName("customSlide"),
    slidesLength = slides.length,
    slideSize = items.getElementsByClassName("customSlide")[0].offsetWidth,
    firstSlide = slides[0],
    lastSlide = slides[slidesLength - 1],
    // cloneFirst = firstSlide.cloneNode(true),
    cloneLast = lastSlide.cloneNode(true),
    index = 0,
    allowShift = true;

  var cloneList = [];
  for (let i = 0; i < slidesLength; i++) {
    cloneList.push(slides[i].cloneNode(true));
  }

  // Clone first and last slide
  // items.appendChild(cloneFirst);
  for (let i = 0; i < slidesLength; i++) {
    items.appendChild(cloneList[i]);
  }
  items.insertBefore(cloneLast, firstSlide);
  wrapper.classList.add("loaded");

  // Mouse and Touch events
  items.onmousedown = dragStart;

  // Touch events
  items.addEventListener("touchstart", dragStart);
  items.addEventListener("touchend", dragEnd);
  items.addEventListener("touchmove", dragAction);

  // Click events
  if (prev) {
    prev.addEventListener("click", function () {
      shiftSlide(-1);
    });
  }
  if (next) {
    next.addEventListener("click", function () {
      shiftSlide(1);
    });
  }

  // Transition events
  items.addEventListener("transitionend", checkIndex);

  function dragStart(e) {
    e = e || window.event;
    e.preventDefault();
    posInitial = items.offsetLeft;

    if (e.type == "touchstart") {
      posX1 = e.touches[0].clientX;
    } else {
      posX1 = e.clientX;
      document.onmouseup = dragEnd;
      document.onmousemove = dragAction;
    }
  }
  function dragAction(e) {
    e = e || window.event;

    if (e.type == "touchmove") {
      posX2 = posX1 - e.touches[0].clientX;
      posX1 = e.touches[0].clientX;
    } else {
      posX2 = posX1 - e.clientX;
      posX1 = e.clientX;
    }
    items.style.left = items.offsetLeft - posX2 + "px";
  }

  function dragEnd(e) {
    posFinal = items.offsetLeft;
    if (posFinal - posInitial < -threshold) {
      shiftSlide(1, "drag");
    } else if (posFinal - posInitial > threshold) {
      shiftSlide(-1, "drag");
    } else {
      items.style.left = posInitial + "px";
    }
    document.onmouseup = null;
    document.onmousemove = null;
  }

  function shiftSlide(dir, action) {
    items.classList.add("shifting");

    if (allowShift) {
      if (!action) {
        posInitial = items.offsetLeft;
      }
      if (dir == 1) {
        items.style.left = posInitial - slideSize + "px";
        index++;
      } else if (dir == -1) {
        items.style.left = posInitial + slideSize + "px";
        index--;
      }
    }

    allowShift = false;
  }

  function checkIndex() {
    items.classList.remove("shifting");
    if (index == -1) {
      items.style.left = -(slidesLength * slideSize) + "px";
      index = slidesLength - 1;
    }
    if (index == slidesLength) {
      items.style.left = -(1 * slideSize) + "px";
      index = 0;
    }

    allowShift = true;
  }
}
