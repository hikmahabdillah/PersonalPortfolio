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

// EXPERIENCES LI
var listItems = document.querySelectorAll(".employment li");
let smkn4 = document.getElementById("smkn4");
let polinema = document.getElementById("polinema");
let skipper = document.getElementById("skipperwebs");
let liSmkn4 = document.getElementById("liSmkn4");
let liPolinema = document.getElementById("liPolinema");
let liSkipper = document.getElementById("liSkipper");

// Menambahkan event listener untuk setiap elemen <li>
window.onload = function () {
  liSmkn4.click();

  tech.click();
  ltool.style.transform = "scale(0)";
};

liSmkn4.addEventListener("click", function () {
  smkn4.classList.add("act");
  polinema.classList.remove("act");
  skipper.classList.remove("act");
});

liPolinema.addEventListener("click", function () {
  smkn4.classList.remove("act");
  polinema.classList.add("act");
  skipper.classList.remove("act");
});

liSkipper.addEventListener("click", function () {
  smkn4.classList.remove("act");
  polinema.classList.remove("act");
  skipper.classList.add("act");
});

listItems.forEach(function (li) {
  li.addEventListener("click", function () {
    // Menghapus kelas "active" dari semua elemen <li>
    listItems.forEach(function (item) {
      item.classList.remove("active");
    });

    // Menambahkan kelas "active" pada elemen <li> yang diklik
    this.classList.add("active");
  });
});

// Project Event
const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

const removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};

// POPUP CARD
function togglePopup(popupId) {
  const popup = document.getElementById(popupId);
  if (popup) {
    popup.classList.toggle("active");
  }
}

// Add event listeners for each popup button
document.querySelectorAll(".popup-btn").forEach((link) => {
  link.addEventListener("click", function () {
    const popupId = this.getAttribute("data-popup-id");
    togglePopup(popupId);
  });
});

// Menambahkan event listeners untuk close button di setiap popup
document.querySelectorAll(".close-btn").forEach((closeButton) => {
  closeButton.addEventListener("click", function () {
    const popupId = this.closest(".popup-").id;
    togglePopup(popupId);
  });
});
