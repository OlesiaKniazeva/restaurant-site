import siteContent from "./site-content.toml";
import {
  preparePage,
  createElementWithClassAndText,
  createAttributionData,
  createImageElement,
  createSetOfParagraphs,
} from "./utils";

import Restaurant from "./images/restaurant-image.jpg";
import Leaves from "./images/branches.svg";
import Chef from "./images/chef.jpg";

export function getRestaurantAboutPage() {
  const mainPageContent = preparePage("content", "about");
  const footer = preparePage("footer", "about");

  const about = siteContent.about;

  const aboutImage = createImageElement(Restaurant, "background-image");

  const aboutHeader = createElementWithClassAndText(
    "h1",
    "header",
    about.header
  );

  const aboutContent = createSetOfParagraphs(
    about.content,
    "about-us-container",
    "about-us-data"
  );

  const leavesImg = createImageElement(Leaves, "leaves-icon", 140);
  const chefContainer = createChefInfo(about);
  const contactsContainer = createContactInformation(about);

  mainPageContent.appendChild(aboutImage);
  mainPageContent.appendChild(aboutHeader);
  mainPageContent.appendChild(leavesImg);
  mainPageContent.appendChild(aboutContent);
  mainPageContent.appendChild(chefContainer);
  mainPageContent.appendChild(contactsContainer);

  const attributionData = createAttributionData(about.attribution);
  footer.appendChild(attributionData);
}

function createChefInfo(about) {
  const chefInfoContainer = document.createElement("div");
  chefInfoContainer.classList.add("chef-info-container");

  const chefImg = createImageElement(Chef, "chef-image", 300);
  const chefQuote = createElementWithClassAndText(
    "p",
    "chef-quote",
    about.chef.quote
  );
  const chefName = createElementWithClassAndText(
    "p",
    "chef-name",
    about.chef.name
  );
  const chefTitle = createElementWithClassAndText(
    "p",
    "chef-title",
    about.chef.title
  );

  [chefImg, chefQuote, chefName, chefTitle].forEach((el) =>
    chefInfoContainer.appendChild(el)
  );
  return chefInfoContainer;
}

function createContactInformation(about) {
  const contactsContainer = document.createElement("div");
  contactsContainer.classList.add("contacts-container");

  const contactHeader = createElementWithClassAndText(
    "h2",
    "header",
    about.contact.header
  );
  const phone = createElementWithClassAndText(
    "p",
    "phone",
    `Phone: ${about.contact.phone}`
  );
  const email = createElementWithClassAndText(
    "p",
    "email",
    `Email: ${about.contact.email}`
  );
  const address = createElementWithClassAndText(
    "p",
    "addres",
    `Address: ${about.contact.address}`
  );
  [contactHeader, phone, email, address].forEach((el) =>
    contactsContainer.appendChild(el)
  );
  return contactsContainer;
}