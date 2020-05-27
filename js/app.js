document.addEventListener("DOMContentLoaded", () => {
    /*Generating Projects and injecting them in "projects-container" div*/
    const projects = {
        crownClothing: {
            name: "CROWN Clothing",
            appType: "react",
            description: "E-Commerce App",
            imageLink: "./img/crown.svg",
            imageAlt: "a crown",
            codeLink: "https://github.com/sebagruia/crown-clothing",
            webLink: "https://crown-clothing-e.herokuapp.com/",
        },
        theArtifact: {
            name: "The Artifact",
            appType: "react",
            description: "News Feed App",
            imageLink: "./img/logo_black312x312.png",
            imageAlt: "a white cube",
            codeLink: "https://github.com/sebagruia/The-Artifact",
            webLink: "https://the-artifact-icuxpypqw.now.sh/",
        },

        wouldYouRather: {
            name: "Would you rather?",
            appType: "react",
            description: "React Game",
            imageLink: "./img/would_you_rather312x312.png",
            imageAlt: "game logo",
            codeLink: "https://github.com/sebagruia/react-would_you_rather",
            webLink: "https://sebagruia.github.io/react-would_you_rather/",
        },
        smartBrain: {
            name: "SmartBrain",
            appType: "react",
            description: "Face Recognition App",
            imageLink: "./img/smartbrain312x312.png",
            imageAlt: "a white cube",
            codeLink: "https://github.com/sebagruia/React-SmartBrain",
            webLink: "https://sebagruia.github.io/React-SmartBrain/",
        },
        myBooks: {
            name: "My Books",
            appType: "react",
            description: "Add-Organize your books",
            imageLink: "./img/my-books 312x312.png",
            imageAlt: "books",
            codeLink: "https://github.com/sebagruia/React-My-Books",
            webLink: "https://sebagruia.github.io/React-My-Books/",
        },
        arcadeGame: {
            name: "Arcade Game",
            appType: "javascript-html-css",
            description: "A simple Arcade Game",
            imageLink: "./img/Arcade 312x312.png",
            imageAlt: "computer",
            codeLink: "https://github.com/sebagruia/Project-3",
            webLink: "https://sebagruia.github.io/Project-3/",
        },
        omnifood: {
            name: "Omnifood",
            appType: "javascript-html-css",
            description: "A Food Delivery Site",
            imageLink: "./img/Omnifood312x312.png",
            imageAlt: "a table with dishes",
            codeLink: "#",
            webLink: "http://omnifood.sebastiangruia.ro/",
        },
        toDoList: {
            name: "ToDoList",
            appType: "react",
            description: "A ToDo List App",
            imageLink: "./img/toDoList312x312.png",
            imageAlt: "picture of a todo list",
            codeLink: "https://github.com/sebagruia/React---ToDoList",
            webLink: "https://sebagruia.github.io/React---ToDoList/",
        },
        ticTacToe: {
            name: "Tic Tac Toe",
            appType: "react",
            description: "Tic Tac Toe game",
            imageLink: "./img/TicTacToe 312x312.png",
            imageAlt: "tic tac toe game icon",
            codeLink: "https://github.com/sebagruia/TicTacToe---Game",
            webLink: "https://sebagruia.github.io/TicTacToe---Game/",
        },
        memoryGame: {
            name: "Memory Game",
            appType: "javascript-html-css",
            description: "Memory Game",
            imageLink: "./img/memory-game312x312.png",
            imageAlt: "memory game picture",
            codeLink: "https://github.com/sebagruia/Project-2",
            webLink: "https://sebagruia.github.io/Project-2/",
        },
        b2wTemplate: {
            name: "B2W Template",
            appType: "wordpress",
            description: "Wordpress Site",
            imageLink: "./img/Bootstrap2WordPress.png",
            imageAlt: "bootstrap to wordpress image",
            codeLink: "https://github.com/sebagruia/Bootstrap-to-Wordpress-Site",
            webLink: "http://bootstrap2wordpress.sebastiangruia.ro/",
        },
        transportSite: {
            name: "Transport Site",
            appType: "javascript-html-css",
            description: "Static Webpage",
            imageLink: "./img/transportation 312x312.png",
            imageAlt: "road sign",
            codeLink: "https://github.com/sebagruia/Transportation-Site",
            webLink: "https://sebagruia.github.io/Transportation-Site/",
        },
    };

    const generateProjectsHtml = () => {
        const projectsContainer = document.getElementById("projects-container");
        const allProjectsHtml = Object.values(projects)
            .map(
                (project) =>
                    `<div class="${project.appType} card-container col-sm-6 col-lg-4 col-xl-3">
                        <div class="card subsections">
                            <img src="${project.imageLink}" class="card-img-top"
                                alt="${project.imageAlt}">
                            <div class="card-body">
                                <h5 class="card-title">${project.name}</h5>
                                <p class="card-text">${project.description}</p>
                                <a href="${project.codeLink}"
                                    class="btn btn-outline-warning" role="button">Code</a>
                                <a href="${project.webLink}" class="btn btn-outline-warning" role="button"
                                    target="_blank">Link</a>
                            </div>
                        </div>
                    </div><!-- end of col-->`
            )
            .join(" ");

        projectsContainer.innerHTML = allProjectsHtml;
    };

    generateProjectsHtml();

    /*Scroll on buttons using Jquery*/
    const hamburger = document.querySelector(".hamburger");
    const navbarCollapse = document.getElementById('navbarCollapse');
    const activateHamburgerAndNavbarCollapse = ()=>{
        hamburger.classList.toggle("is-active");
        navbarCollapse.classList.toggle("show");
        bringContactFormDown();
    }

    $(".js--scroll-to-home").click(function () {
        $("html, body").animate(
            {
                scrollTop: $(".js-home").offset().top,
            },
            1000
        );
        activateHamburgerAndNavbarCollapse();
    });

    $(".js--scroll-to-photography").click(function () {
        $("html, body").animate(
            {
                scrollTop: $(".js-photography").offset().top -30,
            },
            1000
        );
        activateHamburgerAndNavbarCollapse();
    });

    $(".js--scroll-to-developer").click(function () {
        $("html, body").animate(
            {
                scrollTop: $(".js-developer").offset().top -50,
            },
            1000
        );
        activateHamburgerAndNavbarCollapse();
    });


    //===== Form Animation =======
    console.log("DOM loaded");
    const up = document.querySelector(".move-up");
    const down = document.querySelector(".move-down");
    const doubleDown = document.querySelectorAll(".double-down");
    const doubleUp = document.querySelectorAll(".double-up");
    const contactUp = document.querySelector(".contact-up");
    const mask = document.querySelectorAll(".mask");
    const textArea = document.querySelector(".textarea");
    const formInput = document.querySelectorAll(".form-control");

     const bringContactFormUp = ()=> {
        contactUp.setAttribute(
            "style",
            "bottom:0px; transition: bottom 0.8s; -webkit-transition:bottom 0.8s; transition-timing-function:ease; -webkit-transition-timing-function:ease;"
        );
    }

    const bringContactFormDown = ()=>{
        contactUp.setAttribute(
            "style",
            "bottom:-1000px; transition: bottom 0.8s; -webkit-transition:bottom 0.8s; transition-timing-function:ease; -webkit-transition-timing-function:ease;"
        );
    }

    const makeWidth20 = (event)=>{
        event.target.setAttribute(
            "style",
            "width:20%; transition: width 0.5s; -webkit-transition: width 0.5s; transition-timing-function:ease; -webkit-transition-timing-function:ease; "
        );
    }

    const contactTransition = ()=>{
        up.addEventListener("click", bringContactFormUp);
        down.addEventListener("click", bringContactFormDown);

        for (let i = 0; i < 2; i++) {
            doubleUp[i].addEventListener("click", bringContactFormUp);
            doubleDown[i].addEventListener("click", bringContactFormDown);
        }
    }

    const inputTransition = ()=>{
        for (let i = 0; i < 3; i++) {
            mask[i].addEventListener("mouseover", makeWidth20);
        }

        textArea.addEventListener("click", () => {
            textArea.setAttribute("rows", "5");
        });
    }

    //=============================================

    // Adds/Removes the 'active' class to the "li" in the 'recent-projects' 'nav'
    // Filters the "Cards" according to their class Name
    const activateLink = (event) => {

        const recentProjectsLinks = document.querySelectorAll(
            ".recent-projects .nav .nav-link"
        );
        const allCardsContainer = document.querySelectorAll(".card-container");

        const removeClases = (cardsContainer, string, className, event) => {
            if (event.target.innerHTML === string) {
                cardsContainer.forEach((cardContainer) => {
                    if (cardContainer.classList.contains(className)) {
                        cardContainer.classList.remove(
                            "hidden",
                            "slide-in-blurred-top",
                            "slide-out-blurred-top"
                        );
                        cardContainer.classList.add("slide-in-blurred-top");
                    } else {
                        setTimeout(() => {
                            cardContainer.classList.add("hidden");
                        }, 350);
                        cardContainer.classList.add("slide-out-blurred-top");
                    }
                });
            }
        };

        recentProjectsLinks.forEach((link) => {
            link.addEventListener("click", (event) => {

                recentProjectsLinks.forEach((link) => {
                    link.classList.remove("active");
                });
                event.target.classList.add("active");

                switch (event.target.innerHTML) {
                    case "All":
                        allCardsContainer.forEach((cardContainer) => {
                            cardContainer.classList.remove(
                                "hidden",
                                "slide-in-blurred-top",
                                "slide-out-blurred-top"
                            );
                            cardContainer.classList.add("slide-in-blurred-top");
                        });
                        break;
                    case "React Apps":
                        removeClases(allCardsContainer, "React Apps", "react", event);
                        break;
                    case "Javascript/Html/Css":
                        removeClases(allCardsContainer, "Javascript/Html/Css", "javascript-html-css", event);
                        break;
                    case "Wordpress":
                        removeClases(allCardsContainer, "Wordpress", "wordpress", event);
                        break;
                    default:
                        console.log("Something Went Wrong in The Switch Statement");
                }
            });
        });
    };



    contactTransition();
    inputTransition();
    activateLink();

    // Background Parallax
    const header = document.querySelector(".js-home");
    window.addEventListener("scroll", (e) => {
        if (header.getAttribute("data-type") === "background") {
            const test = header.getAttribute("data-speed");
            let yPos = -(window.pageYOffset / parseInt(test));
            // Put together our final background position
            let coords = `50% ${yPos}px`;
            // Move the background
            header.setAttribute("style", `background-position: ${coords};`);
        }
    });

    // Hamburger Functionality
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("is-active");
        });
    
});
