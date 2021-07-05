// let menuIcon = document.getElementById("menuIcon");
// let mobileNav = document.getElementById("mobileNav");
//
// menuIcon.addEventListener("click", function () {
//     menuIcon.classList.toggle("menuActive");
//     menuIcon.classList.toggle("menuActiveCross");
//     mobileNav.classList.toggle("activeFlex");
// });


let menuIcon = document.getElementById("plate2");
let navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", function () {
    navLinks.classList.toggle("_yd_fade_visible");
    navLinks.classList.toggle("_yd_fade_invisible");
});
