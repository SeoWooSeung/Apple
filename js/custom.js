$(function () {
  $(".promo_slide-").slick({
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
    dots: true,
    // fade: true,
  });

  $(".img_slide").slick({
    arrows: false,
    autoplay: false,
    pauseOnHover: false,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 4,
  });

  $(".main_visual .arrows .left").on("click", function () {
    $(".main_slide").slick("slickPrev");
  });

  $(".main_visual .arrows .right").on("click", function () {
    $(".main_slide").slick("slickNext");
  });

  $(".mopen").on("click", function () {
    $(".gnb").toggleClass("on");
  });

  $(".MainVisual").on("wheel", function (e) {
    if ($(".itm").hasClass("on")) e.preventDefault();
  });

  $(".mbtn").on("click", function () {
    $(".header").toggleClass("active");
    $(".gnb").toggleClass("on");
  });
});
