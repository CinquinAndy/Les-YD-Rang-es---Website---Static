// import Splide from "@splidejs/splide";

let menuIcon = document.getElementById("plate2");
let navLinks = document.getElementById("navLinks");

if (navigator.userAgent.indexOf("Firefox") != -1) {
    menuIcon.classList.remove("burger");
}

menuIcon.addEventListener("click", function () {
    navLinks.classList.toggle("_yd_fade_visible");
    navLinks.classList.toggle("_yd_fade_invisible");
});

// document.addEventListener( "DOMContentLoaded", function () {
//     var secondarySlider = new Splide( "#secondary-slider", {
//         fixedWidth  : 100,
//         height      : 60,
//         gap         : 10,
//         cover       : true,
//         isNavigation: true,
//         pagination: false,
//         focus       : "center",
//         breakpoints : {
//             "600": {
//                 fixedWidth: 66,
//                 height    : 40,
//             }
//         },
//     } ).mount();
//
//     var primarySlider = new Splide( "#primary-slider", {
//         type       : "fade",
//         heightRatio: 0.5,
//         pagination : false,
//         arrows     : false,
//         cover      : true,
//     } ); // do not call mount() here.
//
//     primarySlider.sync( secondarySlider ).mount();
// } );
