// NAVBAR
const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");
menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

// SKILL SPAN
function handleClick() {
  var spans = document.querySelectorAll(".clickable-span");

  spans.forEach(function (span) {
    span.classList.remove("selected");
  });
  event.currentTarget.classList.add("selected");
}
let tech = document.getElementById("techS");
let tool = document.getElementById("tools");
let ltech = document.getElementById("listTech");
let ltool = document.getElementById("listTools");
let lall = document.getElementById("listAll");

window.onload = function () {
  tech.click();
  // ltool.style.display = 'none';
  ltool.style.transform = "scale(0)";
};

tech.addEventListener("click", function () {
  // ltool.style.display = 'none';
  // ltech.style.display = 'flex';
  ltech.style.transform = "scale(1)";
  ltool.style.transform = "scale(0)";
  ltool.style.filter = "opacity(0)";
  ltech.style.filter = "opacity(1)";
});

tool.addEventListener("click", function () {
  // ltech.style.display = 'none';
  // ltool.style.display = 'flex';
  ltech.style.transform = "scale(0)";
  ltool.style.transform = "scale(1)";
  ltool.style.filter = "opacity(1)";
  ltech.style.filter = "opacity(0)";
});

// ANIMATION EFFECT ON SCROLL AT NAV
window.addEventListener("scroll", function () {
  let header = document.querySelector("nav");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const navbar = document.getElementById("navbar");
let prevScrollPos = window.pageYOffset;

window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // Munculkan navbar saat scroll ke atas
    navbar.style.transform = "translateY(0)";
  } else {
    // Hilangkan navbar saat scroll ke bawah
    navbar.style.transform = "translateY(-100%)";
  }

  prevScrollPos = currentScrollPos;
};
