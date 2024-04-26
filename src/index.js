import { getRestaurantHomePage } from "./main-page.js";
import { getRestaurantMenuPage } from "./menu-page.js";
import { getRestaurantLocationPage } from "./location-page.js";
import { getRestaurantAboutPage } from "./about-page.js";
import "./styles/style.css";

import Logo from "./images/logo2.svg";

console.log("Webpack started!");

const header = document.querySelector(".main-header");
const mainPageContent = document.getElementById("content");

const logoButton = document.getElementById("logo");

const logoImage = new Image();
logoImage.src = Logo;
logoImage.width = 140;
logoImage.height = 140;
logoButton.appendChild(logoImage);

const pageFunctions = {
  logo: getRestaurantHomePage,
  home: getRestaurantHomePage,
  menu: getRestaurantMenuPage,
  location: getRestaurantLocationPage,
  about: getRestaurantAboutPage
};

let currentPage = 'home';
// let currentPage = 'menu';
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

  const pageFunction = pageFunctions[currentPage];
  pageFunction();
}
