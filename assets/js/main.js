// show menu
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// menu show
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// menu hidden
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// remove menu mobile
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

// change header background
const bgHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", bgHeader);

// GSAP animation
gsap.from(".home__shadow", 1.5, { opacity: 0, y: -300, delay: 0.2 });
gsap.from(".home__points", 1.5, { opacity: 0, y: -300, delay: 0.4 });
gsap.from(".home__grass", 1.5, {
  opacity: 0,
  y: 300,
  delay: 0.2,
  ease: "elastic.out(1, .5)",
});
gsap.from(".home__pumpkin", 1.5, {
  opacity: 0,
  y: -300,
  delay: 0.6,
  ease: "bounce.out",
});
gsap.from(".home__stone", 1.5, {
  opacity: 0,
  y: 300,
  delay: 0.8,
  ease: "elastic.out(1, .5)",
});
gsap.from(".home__moon", 1.5, {
  opacity: 0,
  y: 300,
  delay: 1.5,
  ease: "elastic.out(1, .5)",
});
gsap.from(".home__titles", 1.5, {
  opacity: 0,
  y: -300,
  delay: 1.5,
  ease: "elastic.out(1, .5)",
});
gsap.from(".home__tree", 1.5, {
  opacity: 0,
  y: 300,
  delay: 2,
  ease: "elastic.out(1, .5)",
});
gsap.from(".home__data", 1.5, {
  opacity: 0,
  y: 200,
  delay: 2,
  ease: "elastic.out(1, .5)",
});
