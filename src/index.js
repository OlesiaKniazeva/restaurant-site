import { getRestaurantHomePage } from "./main-page.js";
import { getRestaurantMenuPage } from "./menu-page.js";
import { getRestaurantLocationPage } from "./location-page.js";
import { getRestaurantAboutPage } from "./about-page.js";
import { setUpLogo } from "./utils.js";
import { getMobileLayout } from "./mobile-layout.js";

import "./styles/style.css";

import Logo from "./images/logo-desktop.svg";

const header = document.querySelector(".main-header");
const footer = document.getElementById("footer");

const mainButtons = document.querySelectorAll(".main-buttons-container button");

const pageFunctions = {
  logo: getRestaurantHomePage,
  home: getRestaurantHomePage,
  menu: getRestaurantMenuPage,
  location: getRestaurantLocationPage,
  about: getRestaurantAboutPage,
};

setUpLogo(Logo, 140);
getMobileLayout();
let currentPage = 'home';
pageFunctions[currentPage]();

header.addEventListener("click", changePage);


function changePage(event) {
  const clickedId = event.target.id;

  if (!pageFunctions.hasOwnProperty(clickedId)) {
    return;
  }

  if (currentPage === clickedId) {
    return;
  }

  currentPage = clickedId;
  changeActiveButton(event.target);
  resetFooter(footer);

  const pageFunction = pageFunctions[currentPage];
  pageFunction();
}

function resetFooter(footer) {
  while (footer.firstChild) {
    footer.removeChild(footer.firstChild);
  }
}

function changeActiveButton(currentButton) {
  mainButtons.forEach((button) => {
    button.classList.remove("active");
  });
  currentButton.classList.add("active");
}
