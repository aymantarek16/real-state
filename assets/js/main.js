// ====================================== Js  ====================================== //

// loading

window.onload = function () {
  let content = document.getElementById('content');

  content.style.display = 'none';

  setTimeout(() => { 
    let loading = document.getElementById('loader');
    loading.style.display = 'none';
    content.style.display = 'block';
 
  }, 1000)
}


// toogle bar click
let barIcon = document.querySelector(".barIcon i");
let pageLinksMob = document.querySelector(".pageLinksMob");

barIcon.addEventListener("click", function () {
  if (barIcon.classList.contains("fa-bars")) {
    barIcon.classList.remove("fa-bars");
    barIcon.classList.add("fa-xmark");
    pageLinksMob.style.display = "flex";
  } else {
    barIcon.classList.remove("fa-xmark");
    barIcon.classList.add("fa-bars");
    pageLinksMob.style.display = "none";
  }
});

// NavBar Fixed on Scroll
let navBar = document.querySelector("nav");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 0) {
    navBar.classList.add("navFixed");
  } else {
    navBar.classList.remove("navFixed");
  }
});

let pageLinksMobs = document.querySelector(".pageLinksMob a");

pageLinksMobs.addEventListener("click", function () {
  window.scrollTo(0, 0);
});


// ====================================== Jquery ====================================== //

// Move Scroll Element To Top And FadeOut
$(document).ready(
  $(window).scroll(function () {
    const scroll_top = $(window).scrollTop();
    if (scroll_top > 200) {
      $(".scroll").fadeIn();
      $(".scroll").css("display", "flex");
    } else {
      $(".scroll").fadeOut();
    }
  })
);


