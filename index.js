const settingSlider = {
    dots: true,
    arrows: false,
    infinite: true,
    lazyLoad: 'ondemand',
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    focusOnSelect: true,
    autoplaySpeed: 2000,
    mobileFirst: true,
    responsive:[
        {
            breakpoint:600,
            settings: {
                slidesToShow: 1,
            }
        },

        // {
        //     breakpoint: 1200,
        //     settings: 'unslick'
        // }
    ]
}

const settingSliderabout = {
    dots: true,
    arrows: false,
    infinite: true,
    lazyLoad: 'ondemand',
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    focusOnSelect: true,
    autoplaySpeed: 2000,
    mobileFirst: true,
    responsive:[
        {
            breakpoint:768,
            settings: {
                slidesToShow: 3,
            }
        },
    ]
}

$(document).ready(function(){
    $('.slider-mb-sec-2').slick(settingSlider);
    $('.slider').slick(settingSlider);
    $('.slider-mb-sec-3').slick(settingSlider);
    $('.slider-mb-about').slick(settingSliderabout);
    $('.slider-about').slick(settingSliderabout);
});


    $(".arrow").on("click", function (event) {
    event.preventDefault();
    const id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
});


    $(function () {
    $(".tabs").tabs();
});

document.addEventListener("submit", formSubmit);

function formSubmit(event) {
    event.preventDefault()
    console.log(event, 'event')
    document.querySelector('.contact-form').reset();
    alert('Повідомлення надіслано')
}


// $(window).on('resize', function () {
//     if ($(window).width() > 320 && !$('.slider').hasClass('slick-initialized')) {
//         $('.slider').slick(settingSlider);
//     }
//     if ($(window).width() >= 1025 && $('.slider').hasClass('slick-initialized')) {
//         $('.slider').slick('unslick');
//     }
// });