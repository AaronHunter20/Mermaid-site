window.onload = () => {
    // Get document elements
    const nav = document.querySelector("nav");
    const hamburger = document.querySelector(".hamburger");
    const ul =  document.querySelector("nav ul");
    const a = document.querySelector("nav a");

    // Set up variables
    let linkHeight = parseInt(a.getBoundingClientRect().height) + "px";
    let navExtendHeight = parseInt(a.getBoundingClientRect().height * 4) + "px";

    // Set hamburger icon to the same height as the anchor links
    hamburger.style.width = linkHeight;

    // Listen for when the hamburger icon is clicked 
    let navToggle = false;

    function navOn() {
        navToggle = true;
        ul.style.height = navExtendHeight;
        console.log("expanded nav");
    }
    function navOff() {
        navToggle = false;
        ul.style.height = "0px";
        console.log("collapsed nav");
    }
    function toggleNav() {
        if (navToggle === false) {
            navOn();
        } else {
            navOff();
        }
    }
    window.onresize = () => {
        if (window.innerWidth > 500 && navToggle) {
            navOff();
            ul.style.height = "auto";
        }
    }
    hamburger.addEventListener("click", toggleNav);
}


