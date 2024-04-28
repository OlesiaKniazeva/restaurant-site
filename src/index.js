import { getRestaurantHomePage } from "./main-page.js";
import { getRestaurantMenuPage } from "./menu-page.js";
import { getRestaurantLocationPage } from "./location-page.js";
import { getRestaurantAboutPage } from "./about-page.js";
import "./styles/style.css";
import { createImageElement } from "./utils.js";

import Logo from "./images/logo2.svg";

console.log("Webpack started!");

const header = document.querySelector(".main-header");
const footer = document.getElementById("footer");

const mainButtons = document.querySelectorAll(".main-buttons-container button");
console.log(mainButtons);

const pageFunctions = {
  logo: getRestaurantHomePage,
  home: getRestaurantHomePage,
  menu: getRestaurantMenuPage,
  location: getRestaurantLocationPage,
  about: getRestaurantAboutPage,
};

setUpLogo();
let currentPage = 'home';
pageFunctions[currentPage]();

header.addEventListener("click", changePage);

function setUpLogo() {
  const logoButton = document.getElementById("logo");
  const logoImage = createImageElement(Logo, "logo", 140);

  logoButton.appendChild(logoImage);
}

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
