$(document).ready(function () {

/*Scroll on buttons*/
$('.js--scroll-to-home').click(function () {

        $('html, body').animate({
            scrollTop: $('.js-home').offset().top
        }, 1000 /*(1000 de milisecunde, adica 1 secunda)*/ );

    });


    $('.js--scroll-to-photography').click(function () {

        $('html, body').animate({
            scrollTop: $('.js-photography').offset().top
        }, 1000 /*(1000 de milisecunde, adica 1 secunda)*/ );

    });

    $('.js--scroll-to-developer').click(function () {

        $('html, body').animate({
            scrollTop: $('.js-developer').offset().top
        }, 1000 /*(1000 de milisecunde, adica 1 secunda)*/ );

    });


/*For the sticky navigation*/

    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');


        } else {
            $('nav').removeClass('sticky');


        }
    }, {
        offset: '60px;'
    });
});