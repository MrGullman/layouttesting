/**
 * Toggle Mobile Menu
 */

let menuBar = document.querySelector(".menu-toggle");
let menu = document.querySelector(".menu-container");

let show = false;

menuBar.addEventListener("click", function() {
  if (show === false) {
    menu.classList.add("show");

    show = true;
  } else {
    menu.classList.remove("show");

    show = false;
  }
});

/*
 * Scroll Event
 */

let data = document.querySelector("header");

// document.addEventListener("scroll", function(e) {
//   e.preventDefault();
//   console.log(e);
// });
