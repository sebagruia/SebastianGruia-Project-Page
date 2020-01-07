
document.addEventListener('DOMContentLoaded', () => {

    /*Scroll on buttons using Jquery*/
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



    /*Calls the Intro.Js plugin to the Page*/
    //  introJs().start();
    //  introJs.fn.oncomplete(function() { document.querySelector('.navbar').classList.add('.fixed-top')});

    //===== Form Animation =======
    console.log('DOM loaded');
    const up = document.querySelector('.move-up');
    const down = document.querySelector('.move-down');
    const doubleDown = document.querySelectorAll('.double-down');
    const doubleUp = document.querySelectorAll('.double-up');
    const contactUp = document.querySelector('.contact-up');
    const mask = document.querySelectorAll('.mask');
    const textArea = document.querySelector('.textarea');
    const formInput = document.querySelectorAll('.form-control');

    function bringContactFormUp() {
        contactUp.setAttribute('style', 'bottom:0px; transition: bottom 0.8s; -webkit-transition:bottom 0.8s; transition-timing-function:ease; -webkit-transition-timing-function:ease;');
    }

    function bringContactFormDown() {
        contactUp.setAttribute('style', 'bottom:-1000px; transition: bottom 0.8s; -webkit-transition:bottom 0.8s; transition-timing-function:ease; -webkit-transition-timing-function:ease;');
    }

    function makeWidth20(event) {
        event.target.setAttribute('style', 'width:20%; transition: width 0.5s; -webkit-transition: width 0.5s; transition-timing-function:ease; -webkit-transition-timing-function:ease; ');
    }

    function contactTransition() {
        up.addEventListener('click', bringContactFormUp);
        down.addEventListener('click', bringContactFormDown);

        for (let i = 0; i < 2; i++) {
            doubleUp[i].addEventListener('click', bringContactFormUp);
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

    //=============================================


    // Adds/Removes the 'active' class to the "li" in the 'recent-projects' 'nav'
    // Filters the "Cards" according to their class Name
    const activateLink = (event) => {
        const recentProjectsLinks = document.querySelectorAll('.recent-projects .nav .nav-link');
        const allCardsContainer = document.querySelectorAll('.card-container');

        recentProjectsLinks.forEach((link) => {
            link.addEventListener('click', (event) => {
                recentProjectsLinks.forEach((link) => {
                    link.classList.remove('active');
                })
                event.target.classList.add('active');
                if (event.target.innerHTML === 'All') {
                    allCardsContainer.forEach((cardContainer) => {
                        cardContainer.classList.remove('hidden','flipInX','flipOutX');
                        cardContainer.classList.add('flipInX');
                    });
                }
                else if (event.target.innerHTML === 'React Apps') {
                    allCardsContainer.forEach((cardContainer) => {
                        if (cardContainer.classList.contains('react')) {
                            // cardContainer.classList.remove('hidden');
                            cardContainer.classList.remove('hidden','flipInX','flipOutX');
                            cardContainer.classList.add('flipInX');
                        }
                        else {
                            cardContainer.classList.add('hidden','flipOutX');
                            // cardContainer.classList.add('hidden');
                        }
                    });
                }
                else if (event.target.innerHTML === 'Javascript/Html/Css') {
                    allCardsContainer.forEach((cardContainer) => {
                        if (cardContainer.classList.contains('javascript-html-css')) {
                            // cardContainer.classList.remove('hidden');
                            cardContainer.classList.remove('hidden','flipInX','flipOutX');
                            cardContainer.classList.add('flipInX');
                        }
                        else {
                            cardContainer.classList.add('hidden','flipOutX');
                            // cardContainer.classList.add('hidden');

                        }
                    });
                }
            });
        });
    }


    contactTransition();
    inputTransition();
    activateLink();


    // Background Parallax 
    const header = document.querySelector('.js-home');
    window.addEventListener('scroll', (e) => {
            if (header.getAttribute("data-type") === 'background') {
                const test = header.getAttribute('data-speed');
                let yPos = -(window.pageYOffset / parseInt(test));
                // Put together our final background position
                let coords = `50% ${yPos}px`;
                // Move the background
                header.setAttribute("style", `background-position: ${coords};`);
            }
    });
});