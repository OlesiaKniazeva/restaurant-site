import CheesePlate from "./images/cheese-plate.jpg";
import MenuBackground from "./images/menu-background.jpg";
import Leaves from "./images/branches.svg";
import Meat from "./images/meat.jpg"
import Dessert from "./images/dessert.jpg"
import Drinks from "./images/cocktails.jpg";

import siteContent from "./site-content.toml";
import {
  preparePage,
  createImageElement,
  createAttributionData,
  createElementWithClassAndText,
} from "./utils";

export function getRestaurantMenuPage() {
  const mainPageContent = preparePage("content", "menu");
  const footer = preparePage("footer", "menu");

  const menu = siteContent.menu;
  const menuImage = createImageElement(MenuBackground, "background-image");

  const headerElement = createElementWithClassAndText(
    "h1",
    "header",
    menu.header
  );
  const leavesImg = createImageElement(Leaves, "leaves-icon", 140);

  const appetizerSection = createSectionElement(menu.appetizers);
  const appetizersSectionImg = createImageElement(CheesePlate, "section-image");

  const mainCourseSection = createSectionElement(menu.entrees);
  const mainSectionImg = createImageElement(Meat, "section-image");

  const sweetSection = createSectionElement(menu.desserts);
  const sweetSectionImg = createImageElement(Dessert, "section-image");

  const drinksSection = createSectionElement(menu.drinks);
  const drinksSectionImg = createImageElement(Drinks, "section-image");


  mainPageContent.appendChild(menuImage);
  mainPageContent.appendChild(headerElement);

  mainPageContent.appendChild(leavesImg);

  mainPageContent.appendChild(appetizerSection);
  mainPageContent.appendChild(appetizersSectionImg);
  mainPageContent.appendChild(mainCourseSection);
  mainPageContent.appendChild(mainSectionImg);
  mainPageContent.appendChild(sweetSection);
  mainPageContent.appendChild(sweetSectionImg);
  mainPageContent.appendChild(drinksSection)
  mainPageContent.appendChild(drinksSectionImg);

  const attributionData = createAttributionData(menu.attribution);
  footer.appendChild(attributionData);
}


function createSectionElement(section) {
  const sectionContainer = document.createElement("div");
  sectionContainer.classList.add("section-container");

  const headerContainer = document.createElement('div');
  headerContainer.classList.add('header-container');

  const sectionSupheader = document.createElement("p");
  const sectionHeader = document.createElement("h2");

  sectionSupheader.textContent = section.supheader;
  sectionSupheader.classList.add("section-supheader");

  sectionHeader.textContent = section.header;
  sectionHeader.classList.add("section-subheader");

  headerContainer.appendChild(sectionSupheader);
  headerContainer.appendChild(sectionHeader);

  const menuListContainer = document.createElement('div');
  menuListContainer.classList.add('section-items-container');
  
  section.items.forEach((sectionData) => {
    const sectionItem = createSectionItem(sectionData);
    menuListContainer.appendChild(sectionItem);
  });

  sectionContainer.appendChild(headerContainer);
  sectionContainer.appendChild(menuListContainer);

  return sectionContainer;
}

function createSectionItem(sectionData) {
  const sectionItem = document.createElement("div");
  sectionItem.classList.add("section-item");

  const sectionRow = document.createElement('div');
  sectionRow.classList.add("section-row");

  const nameItem = createElementWithClassAndText(
    "p",
    "section-name",
    sectionData.name
  );
  const line = createElementWithClassAndText("span", "decorative-line", '');
  const priceItem = createElementWithClassAndText(
    "p",
    "section-price",
    sectionData.price + " CNF"
  );

  sectionRow.appendChild(nameItem);
  sectionRow.appendChild(line);
  sectionRow.appendChild(priceItem);

  const descriptionItem = createElementWithClassAndText(
    "p",
    "section-description",
    sectionData.description
  );

  sectionItem.appendChild(sectionRow);
  sectionItem.appendChild(descriptionItem);

  return sectionItem;
}
