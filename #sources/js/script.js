//@prepros-append slick.min.js
//@prepros-append ibg.js
//@prepros-append responsive.js
@@include("webp.js");
@@include("slick.min.js");
@@include("ibg.js");
@@include("forms.js");
@@include("responsive.js");

$(document).ready(function () {
  if ($(".slider__body").length > 0) {
    $(".slider__body").slick({
      // autoplay: true,
      // infinite: false,
      dots: true,
      arrows: false,
      accessibility: false,
      slidesToShow: 1,
      autoplaySpeed: 3000,
      adaptiveHeight: true,
      nextArrow: "<button type='button' class='slick-next'></button>",
      prevArrow: "<button type='button' class='slick-prev'></button>",
      responsive: [
        {
          breakpoint: 767,
          setings: {},
        },
      ],
    });
  }
});
