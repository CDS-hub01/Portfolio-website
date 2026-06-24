// GET ALL ELEMENTS — in same order as HTML
// =====================================================

const navbar = document.getElementById("navbar");
const navLinks = document.getElementById("navLinks");
const hamburger = document.getElementById("hamburger");

// =====================================================
// HAMBURGER MENU
// Type: classList toggle + click outside to close
// Rule 12 — no aria, no overlay, click outside closes
// =====================================================

const initHamburger = () => {
  if (!hamburger || !navLinks) return;

  // Toggle menu open/close on hamburger click
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = hamburger.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
  });

  // Close menu when any nav link is clicked
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      const icon = hamburger.querySelector("i");
      icon.classList.add("fa-bars");
      icon.classList.remove("fa-times");
    });
  });

  // Close menu when clicking anywhere outside navbar
  document.addEventListener("click", (e) => {
    if (!navbar.contains(e.target)) {
      navLinks.classList.remove("active");
      const icon = hamburger.querySelector("i");
      icon.classList.add("fa-bars");
      icon.classList.remove("fa-times");
    }
  });
};

// =====================================================
// NAVBAR SCROLL EFFECT
// Type: scroll event listener
// WHEN: User scrolls the page
// WHY: Adds shadow to navbar when scrolled
// =====================================================

const initNavScroll = () => {
  if (!navbar) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
};

// =====================================================
// ACTIVE NAV LINK ON SCROLL
// Type: scroll event + querySelectorAll + forEach
// WHEN: User scrolls through sections
// WHY: Highlights correct nav link as user scrolls
// =====================================================

const initActiveNav = () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinkItems = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let currentSection = "";

    // Find which section is currently in view
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 150;
      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute("id");
      }
    });

    // Update active class on nav links
    navLinkItems.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  });
};

// =====================================================
// SET CURRENT YEAR IN FOOTER
// WHY: Always shows correct year automatically!
// =====================================================

const setCurrentYear = () => {
  document.querySelectorAll(".current-year").forEach((span) => {
    span.textContent = new Date().getFullYear();
  });
};

// =====================================================
// INITIALIZE — Runs when page loads
// =====================================================

initHamburger();
initNavScroll();
initActiveNav();
setCurrentYear();
