let menuIcon = document.getElementById("plate2");
let navLinks = document.getElementById("navLinks");
let nav = document.getElementById("nav");

if (navigator.userAgent.indexOf("Firefox") != -1) {
    menuIcon.classList.remove("burger");
}

menuIcon.addEventListener("click", function () {
    navLinks.classList.toggle("_yd_fade_visible");
    navLinks.classList.toggle("_yd_fade_invisible");
});

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () {
    scrollFunction();
};
var flag = false;

function scrollFunction() {
    console.log(document.body.scrollTop);
    console.log(document.documentElement.scrollTop);
    if (flag === false) {
        if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
            nav.classList.toggle("scrolled");
            flag = true;
        }
    }
}
