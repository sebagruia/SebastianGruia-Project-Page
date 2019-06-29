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

});

document.addEventListener('DOMContentLoaded', (ev1)=>{
    console.log('Loaded the DOM');
    const up = document.querySelector('.move-up');
    const down = document.querySelector('.move-down');
    const doubleDown = document.querySelectorAll('.double-down');
    const doubleUp = document.querySelectorAll('.double-up');
    const contactUp = document.querySelector('.contact-up');
    
        up.addEventListener('click', ()=>{
                contactUp.setAttribute('style', 'bottom:0px; transition: bottom 0.8s; -webkit-transition:bottom 0.8s; transition-timing-function:ease; -webkit-transition-timing-function:ease;');
        });
       

        down.addEventListener('click', ()=>{
                contactUp.setAttribute('style', 'bottom:-1000px; transition: bottom 0.8s; -webkit-transition:bottom 0.8s; transition-timing-function:ease; -webkit-transition-timing-function:ease;');
        });
        
        for(let i=0; i<2;i++){
            doubleUp[i].addEventListener('click', ()=>{
                contactUp.setAttribute('style', 'bottom:0px; transition: bottom 0.8s; -webkit-transition:bottom 0.8s; transition-timing-function:ease; -webkit-transition-timing-function:ease;');
        });
        doubleDown[i].addEventListener('click', ()=>{
            contactUp.setAttribute('style', 'bottom:-1000px; transition: bottom 0.8s; -webkit-transition:bottom 0.8s; transition-timing-function:ease; -webkit-transition-timing-function:ease;');
    });

        }
  
   

   








});