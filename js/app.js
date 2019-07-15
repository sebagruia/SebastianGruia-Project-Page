$(document).ready(function () {

    /*Scroll on buttons*/
    $('.js--scroll-to-home').click(function () {

        $('html, body').animate({
            scrollTop: $('.js-home').offset().top
        }, 1000);

    });


    $('.js--scroll-to-photography').click(function () {

        $('html, body').animate({
            scrollTop: $('.js-photography').offset().top
        }, 1000);

    });

    $('.js--scroll-to-developer').click(function () {

        $('html, body').animate({
            scrollTop: $('.js-developer').offset().top
        }, 1000);

    });

});

document.addEventListener('DOMContentLoaded', (ev1) => {
    console.log('DOM loaded');
    const up = document.querySelector('.move-up');
    const down = document.querySelector('.move-down');
    const doubleDown = document.querySelectorAll('.double-down');
    const doubleUp = document.querySelectorAll('.double-up');
    const contactUp = document.querySelector('.contact-up');
    const mask = document.querySelectorAll('.mask');
    const textArea = document.querySelector('.textarea');
    const formInput = document.querySelectorAll('.form-control');

    function bringContactFormUp(){
        contactUp.setAttribute('style', 'bottom:0px; transition: bottom 0.8s; -webkit-transition:bottom 0.8s; transition-timing-function:ease; -webkit-transition-timing-function:ease;');

    }
    function bringContactFormDown(){
        contactUp.setAttribute('style', 'bottom:-1000px; transition: bottom 0.8s; -webkit-transition:bottom 0.8s; transition-timing-function:ease; -webkit-transition-timing-function:ease;');

    }
 
    function makeWidth20(event){
        event.target.setAttribute('style', 'width:20%; transition: width 0.5s; -webkit-transition: width 0.5s; transition-timing-function:ease; -webkit-transition-timing-function:ease; ');


    }

     function contactTransition() {
        up.addEventListener('click',bringContactFormUp);


        down.addEventListener('click',bringContactFormDown);

        for (let i = 0; i < 2; i++) {
            doubleUp[i].addEventListener('click',bringContactFormUp);
            doubleDown[i].addEventListener('click', bringContactFormDown);
        }
    }


    function inputTransition() {
        for (let i = 0; i < 3; i++) {
            mask[i].addEventListener('mouseover', makeWidth20);
        }

        textArea.addEventListener('click', () => {
            textArea.setAttribute('rows', '5');

        });
    }

    contactTransition();
    inputTransition();

});