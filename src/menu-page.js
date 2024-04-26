import Bruschetta from "./images/bruschetta.jpg";
import CheesePlate from "./images/cheese-plate.jpg";
import MeatSalad from "./images/meat-salad.jpg";

import siteContent from "./site-content.toml";
import { preparePage } from "./utils";


export function getRestaurantMenuPage() {
  const mainPageContent = preparePage('content', 'menu');

  const menu = document.createElement("h1");
  menu.textContent = "Menu";
  menu.classList.add("menu-header");
  mainPageContent.appendChild(menu);

  const appetizers = createMenuSection(
    "Appetizers",
    Object.values(siteContent.menu.appetizers)
  );
  appetizers.forEach((element) => mainPageContent.appendChild(element));

  const bruschettaImage = createImage(Bruschetta);
  const cheesePlateImage = createImage(CheesePlate);
  const meatSaladImage = createImage(MeatSalad);

  mainPageContent.appendChild(cheesePlateImage);
  mainPageContent.appendChild(bruschettaImage);
  mainPageContent.appendChild(meatSaladImage);


}

function createImage(image) {
  const img = new Image();
  img.src = image;

  return img;
}

function createMenuItem(text) {
  const [name, description] = text.split(":");

  const nameElement = document.createElement("span");
  nameElement.textContent = name;
  nameElement.classList.add("menu-name");

  const descriptionElement = document.createElement("span");
  descriptionElement.textContent = description;
  descriptionElement.classList.add("menu-description");

  const menuItemElement = document.createElement("li");
  menuItemElement.appendChild(nameElement);
  menuItemElement.appendChild(document.createTextNode(": "));
  menuItemElement.appendChild(descriptionElement);

  return menuItemElement;
}

function createMenuSection(title, items) {
  const sectionHeader = document.createElement("h2");
  sectionHeader.textContent = title;
  sectionHeader.classList.add("menu-subheader");

  const sectionList = document.createElement("ul");
  items.forEach((item) => {
    sectionList.appendChild(createMenuItem(item));
  });

  return [sectionHeader, sectionList];
}
