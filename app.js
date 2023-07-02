// scroll to top functionality
// scroll to top button selected with the id attribute attached to html. Used the querySelector but could also use getElementByID.
const scrollUp = document.querySelector("#scroll-up");

// Nav hamburger menu selections
// burger variable selects hamburger menu bars
// ul variable selects the list items(nav links altogether)
//nav variable selects the nav element container itself
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

//click eventListener wait for user's click action and uses scrollTo part of windows object to make button functional.
scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});
//Toggles the nav ul.show class when the user clicks hamburger menu bar.
//Add event listener with click and toggle method to add and remove class of show.
burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});

//Close hamburger menu when a link is clicked

//Select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    })
);