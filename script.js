const hamburgerIcon = document.querySelector("#hamburger-icon");
const closeIcon = document.querySelector("#close-icon");
const hamburgerDiv = document.querySelector("#hamburger-div");

hamburgerIcon.addEventListener("click", () => {
    closeIcon.classList.toggle("hidden");
    
    hamburgerIcon.classList.toggle("hidden");

    hamburgerDiv.classList.toggle("hidden");
});

closeIcon.addEventListener("click", () => {
    closeIcon.classList.toggle("hidden");
    
    hamburgerIcon.classList.toggle("hidden");

    hamburgerDiv.classList.toggle("hidden");
});


const navLinks = document.querySelectorAll("#nav-link");

navLinks.forEach((navLinkEl) => {
    navLinkEl.addEventListener("click", () => {
        hamburgerDiv.classList.add("hidden");

        hamburgerIcon.classList.remove("hidden");

        closeIcon.classList.add("hidden");
    })
});

let nav2 = document.querySelector("nav");
window.onscroll = () => {
    if(document.documentElement.scrollTop > 50){
        nav2.classList.add("scroll-on");
    } else {
        nav2.classList.remove("scroll-on")
    }
};
  

// slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});