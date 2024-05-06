import { createImageElement, setUpLogo } from "./utils";

import HamburgerImg from "./images/hamburger-icon.svg";
import LogoMobile from "./images/logo-mobile.svg";
import LogoDesktop from "./images/logo-desktop.svg";

const hamburgerButton = document.getElementById("hamburger");
const menu = document.querySelector(".main-buttons-container");
const navbar = document.querySelector(".restaurant-pages-nav");

const mediaQuery = window.matchMedia("screen and (max-width: 800px)");

export function getMobileLayout() {
  const img = createImageElement(HamburgerImg, "hamburger-icon", 60);
  hamburgerButton.appendChild(img);

  navbar.addEventListener("click", processClicks);

  toggleMobileDesktop(mediaQuery);
  mediaQuery.addEventListener("change", toggleMobileDesktop);
}

function processClicks(event) {
  const target = event.target;
  console.log(target);

  const id = target.id;
  console.log(id);
  console.log("here");
  console.log(target.type);

  if (id === "hamburger") {
    toggleDropdown();
  } else if (target.matches("button")) {
    toggleDropdown();
  }
}

function toggleMobileDesktop(event) {
  if (event.matches) {
    console.log("mobile");

    menu.classList.add("mobile");
    setUpLogo(LogoMobile, 250, 50);
  } else {
    menu.classList.remove("mobile");
    setUpLogo(LogoDesktop, 140);
  }
}

function toggleDropdown() {
  if (menu.classList.contains("visible")) {
    menu.classList.remove("visible");
  } else {
    menu.classList.add("visible");
  }
}
