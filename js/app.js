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

document.addEventListener('DOMContentLoaded', function transform(ev1){
    console.log('Loaded the DOM');
    const up = document.querySelector('.move-up');
    const down = document.querySelector('.move-down');
    const contactDown = document.querySelector('.contact-down');
    const contactUp = document.querySelector('.contact-up');
    
        up.addEventListener('click', ()=>{
            
                contactDown.classList.add('hidden');
                contactUp.classList.remove('hidden');
                
            
        });


    

    
        down.addEventListener('click', ()=>{
            
                contactDown.classList.remove('hidden');
                contactUp.classList.add('hidden');
            
        });

  
   

   








});