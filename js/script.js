// NAVBAR
const menuToggle = document.querySelector(".menu-toggle input");
const menutoggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav ul");
let isMenuCheck = false;
menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
  menutoggle.classList.toggle("openNav");
  nav.style.transform = "translateY(0)";
  isMenuCheck = !isMenuCheck;

  if (isTabletView()) {
    isMenuCheck
      ? (nav.style.transform = "translateY(0)")
      : (nav.style.transform = "translateY(-100%)");
  }
});

function isTabletView() {
  // Gunakan media query untuk memeriksa lebar layar
  return window.matchMedia("(max-width: 768px)").matches;
}

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

const handleLoad = () => {
  let header = document.querySelector("nav");
  header.style.transform = "translateY(0)";
};
let prevScrollPos = window.scrollY;

const handleScroll = () => {
  let header = document.querySelector("nav");
  header.classList.toggle("sticky", window.scrollY > 0);

  calcScrollValue();
  // existing scroll code here
  let currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    navbar.style.transform = "translateY(0)";
    nav.style.transform = "translateY(0)";
    if (isTabletView()) {
      isMenuCheck
        ? (nav.style.transform = "translateY(0)")
        : (nav.style.transform = "translateY(-100%)");
    }
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
const overlayPanel = document.querySelector(".gradient-overlay");

panels.forEach((panel) => {
  const isTablet = () => {
    if (isTabletView()) {
      const popupId = panel
        .querySelector(".popup-btn")
        .getAttribute("data-popup-id");
      togglePopup(popupId);
      console.log(true);
    }
  };
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
  panel.querySelector(".gradient-overlay").addEventListener("click", () => {
    isTablet();
    // setTimeout(isTablet, 500);
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

function togglePopupClick(element) {
  const popupId = element.getAttribute("data-popup-id");
  togglePopup(popupId);
}

// Add event listeners for each popup button
document.querySelectorAll(".popup-btn").forEach((link) => {
  link.addEventListener("click", function () {
    togglePopupClick(link);
    navbar.style.transform = "translateY(-100%)";
    nav.style.transform = "translateY(-100%)";
  });
});

// Menambahkan event listeners untuk close button di setiap popup
document.querySelectorAll(".close-btn").forEach((closeButton) => {
  closeButton.addEventListener("click", function () {
    togglePopupClick(closeButton);
  });
});

document.querySelectorAll(".overlay").forEach((overlays) => {
  overlays.addEventListener("click", function () {
    togglePopupClick(overlays);
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
    AOS.init({
        once: true,
        startEvent: 'DOMContentLoaded',
        offset: 120,
    });
  }, 1500);
};

gsap.registerPlugin(TextPlugin);
const role = document.querySelector(".role h2");
const roleLine = document.querySelectorAll(".role hr");

const changeRole = () => {
  gsap.to(role, {
    duration: 2,
    text: {
      value: "UI / UX DESIGNER",
      ease: "none",
    },
    repeatDelay: 4,
    repeat: -1,
    yoyo: true,
    delay: 4,
  });
  gsap.to(roleLine, {
    x: 0,
    duration: 2,
    width: "0",
    ease: "power2.inOut",
    repeat: -1,
    repeatDelay: 1,
    delay: 3,
    yoyo: true,
  });
};

window.addEventListener("load", () => {
  // if page is fully loaded, remove preloader
  intro();
  changeRole();
});

const hidePreloader = () => {
  boxIntro.style.display = "none";
  logoIntro.style.display = "none";
};
