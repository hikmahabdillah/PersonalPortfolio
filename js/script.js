// NAVBAR
const menuToggle = document.querySelector(".menu-toggle input");
const menutoggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav ul");
menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
  menutoggle.classList.toggle("openNav");
});

// SKILL SPAN
const spans = document.querySelectorAll(".clickable-span");
spans.forEach(function (span) {
  span.addEventListener("click", function (event) {
    spans.forEach(function (span) {
      span.classList.remove("selected");
    });
    event.currentTarget.classList.add("selected");
  });
});

// event when li on nav ul has clicked
const menu = document.querySelectorAll("nav ul li");
menu.forEach(function (item) {
  item.addEventListener("click", function () {
    if (menuToggle.click()) {
      nav.classList.remove("slide");
      menutoggle.classList.remove("openNav");
    }
  });
});

// get element at skills page
let tech = document.getElementById("techS");
let tool = document.getElementById("tools");
let ltech = document.getElementById("listTech");
let ltool = document.getElementById("listTools");

tech.addEventListener("click", function () {
  ltech.style.transform = "scale(1)";
  ltool.style.transform = "scale(0)";
  ltool.style.filter = "opacity(0)";
  ltech.style.filter = "opacity(1)";
});

tool.addEventListener("click", function () {
  ltech.style.transform = "scale(0)";
  ltool.style.transform = "scale(1)";
  ltool.style.filter = "opacity(1)";
  ltech.style.filter = "opacity(0)";
});

// ANIMATION EFFECT ON SCROLL AT NAV
const navbar = document.getElementById("navbar");

// const ulSlide = document.getElementById("");
let prevScrollPos = window.scrollY;

const handleLoad = () => {
  let header = document.querySelector("nav");
  header.style.transform = "translateY(0)";
};

const handleScroll = () => {
  let header = document.querySelector("nav");
  header.classList.toggle("sticky", window.scrollY > 0);

  calcScrollValue();
  // Your existing scroll code here
  const currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    navbar.style.transform = "translateY(0)";
    nav.style.transform = "translateY(0)";
  } else {
    navbar.style.transform = "translateY(-100%)";
    nav.style.transform = "translateY(-100%)";
  }

  prevScrollPos = currentScrollPos;

  // Call the common scroll value calculation
  calcScrollValue();
};

// Assign the combined function to both window.onscroll and window.onload
window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleLoad, handleScroll);

// EXPERIENCES LI
var listItems = document.querySelectorAll(".employment li");
var listContent = document.querySelectorAll(".content-employ .content");

// Menambahkan event listener untuk setiap elemen <li>
window.onload = function () {
  // liSmkn4.click();
  tech.click();
  ltool.style.transform = "scale(0)";
};

listItems.forEach(function (li) {
  li.addEventListener("click", function () {
    // untuk mendapatkan id dari li yang ada pada ul lisExpe
    // dimana id yang ada pada li dan content sama
    let liSelectedId = li.getAttribute("id");
    // console.log(liSelectedId);

    // Menghapus kelas "active" dari semua elemen <li>
    listItems.forEach(function (item) {
      item.classList.remove("active");
    });

    // Menambahkan kelas "active" pada elemen <li> yang diklik
    this.classList.add("active");

    listContent.forEach(function (itemCont) {
      // Menghapus kelas "act" dari semua elemen content
      itemCont.classList.remove("act");

      // jika item Cont memiliki atribut id yg sama dengan li selected id, maka dia akan menjadi act
      if (itemCont.getAttribute("id") === liSelectedId) {
        // Menampilkan konten yang cocok
        itemCont.classList.add("act");
      }
    });
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
    navbar.style.transform = "translateY(-100%)";
    nav.style.transform = "translateY(-100%)";
  });
});

// Menambahkan event listeners untuk close button di setiap popup
document.querySelectorAll(".close-btn").forEach((closeButton) => {
  closeButton.addEventListener("click", function () {
    const popupId = this.closest(".popup-").id;
    togglePopup(popupId);
  });
});

document.querySelectorAll(".overlay").forEach((overlays) => {
  overlays.addEventListener("click", function () {
    const popupId = this.closest(".popup-").id;
    togglePopup(popupId);
  });
});

// Scroll ON Top
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;

  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#00327c ${scrollValue}%,#29cbef ${scrollValue}%)`;
};

let brand = document.getElementById("brand");

brand.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});

// GSAP ANIMATION
const boxIntro = document.querySelector(".box-intro");
const logoIntro = document.querySelector(".box-intro img");

const intro = () => {
  setTimeout(() => {
    gsap.to(boxIntro, { opacity: 0, onComplete: hidePreloader });
    gsap.to(logoIntro, { opacity: 0, onComplete: hidePreloader });
  }, 1500);
};

window.addEventListener("load", () => {
  // if page is fully loaded, remove preloader
  intro();
});

const hidePreloader = () => {
  boxIntro.style.display = "none";
  logoIntro.style.display = "none";
};
