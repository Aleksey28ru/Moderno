$(function() {

    // Mixitup
    var mixer = mixitup(".products__inner-box");

    // rateYo
    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true
    });

    $(".products-slider__inner").slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4
    });

});
