const hamburger = document.querySelector("nav img");
const nav = document.querySelector("nav");

let navtoggle = false;
hamburger.addEventListener("click", () => {
    if (navtoggle == false) {
        navtoggle = true
        nav.className = "responsive";
    } else {
        navtoggle = false
        nav.className = "";
    }
    console.log(navtoggle)
    
});

