function preload() {
    bImg = loadImage('./Assets/Icons/bubble.png');
}

// Set up global variables
let container;
let hamburger;
let ul;
let a;
let linkHeight;
let navToggle;

function navOn() {
    navToggle = true;
    ul.style.height = "auto";
    console.log("expanded nav");
}
function navOff() {
    navToggle = false;
    ul.style.height = "0px";
    console.log("collapsed nav");
}

function setup() {
    // Get document elements
    body = document.querySelector("body");
    main = document.querySelector(".section-1 .main");
    container = document.getElementById('canvas-container');
    hamburger = document.querySelector(".hamburger");
    ul =  document.querySelector("nav ul");
    a = document.querySelector("nav a");

    // Get the anchor link height
    linkHeight = a.getBoundingClientRect().height;
   
    // Set variable 
    body.style.setProperty('--navHeight', "linkHeight");

    // Setup canvas
    let Canvas = createCanvas(windowWidth, windowHeight - linkHeight);
    Canvas.parent("canvas-container");

    // Setup grid width and height
    main.style.width = parseInt(windowWidth) + "px";
    main.style.height = parseInt(windowHeight - linkHeight + 1) + "px";

    // Set hamburger icon to the same height as the anchor links
    hamburger.style.width = parseInt(linkHeight) + "px";

    // Set up a variable to represent the toggle state of the nav bar
    navToggle = false;

    function toggleNav () {
        if (navToggle === false) {
            navOn();
        } else {
            navOff();
        }
    }
    hamburger.addEventListener("click", toggleNav);

    
}
function windowResized() {
    // update grid width and height
    main.style.width = parseInt(windowWidth) + "px";
    main.style.height = parseInt(windowHeight - linkHeight + 1) + "px";

    if (windowWidth < 501) {
        navOff();
    } else {
        navOn();
    }
    resizeCanvas(windowWidth, windowHeight - linkHeight);
}