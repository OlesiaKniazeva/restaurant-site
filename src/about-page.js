import siteContent from "./site-content.toml";
import {
  preparePage,
  createElementWithClassAndText,
  createAttributionElement,
  createImageElement,
  createSetOfParagraphs,
} from "./utils";

import Restaurant from "./images/restaurant-image.jpg";
import Leaves from "./images/branches.svg";
import Chef from "./images/chef.jpg";

export function getRestaurantAboutPage() {
  const mainPageContent = preparePage("content", "about");
  const footer = preparePage("footer", "about");

  const aboutImage = createImageElement(Restaurant, "background-image");
  mainPageContent.appendChild(aboutImage);

  const aboutHeader = createElementWithClassAndText(
    "h1",
    "about-header",
    siteContent.about.header
  );
  const aboutContent = createSetOfParagraphs(
    siteContent.about.content,
    "about-us-container",
    "about-us-data"
  );

  mainPageContent.appendChild(aboutHeader);

  const leavesImg = createImageElement(Leaves, "leaves-icon", 140);
  mainPageContent.appendChild(leavesImg);

  mainPageContent.appendChild(aboutContent);

  const chefContainer = createChefInfo();
  mainPageContent.appendChild(chefContainer);

  const contactsContainer = createContactInformation();
  mainPageContent.appendChild(contactsContainer);

  updateFooterContent(footer);
}

function createChefInfo() {
  const chefInfoContainer = document.createElement("div");

  const chefImg = createImageElement(Chef, "chef-image");
  const chefQuote = createElementWithClassAndText(
    "p",
    "chef-quote",
    siteContent.about.chef.quote
  );
  const chefName = createElementWithClassAndText(
    "p",
    "chef-name",
    siteContent.about.chef.name
  );

  [chefImg, chefQuote, chefName].forEach((el) =>
    chefInfoContainer.appendChild(el)
  );
  return chefInfoContainer;
}

function createContactInformation() {
  const contactsContainer = document.createElement("div");
  contactsContainer.classList.add("contacts-container");

  const contactHeader = createElementWithClassAndText(
    "h2",
    "header",
    siteContent.about.contact.header
  );
  const phone = createElementWithClassAndText(
    "p",
    "phone",
    `Phone: ${siteContent.about.contact.phone}`
  );
  const email = createElementWithClassAndText(
    "p",
    "email",
    `Email: ${siteContent.about.contact.email}`
  );
  const address = createElementWithClassAndText(
    "p",
    "addres",
    `Address: ${siteContent.about.contact.address}`
  );
  [contactHeader, phone, email, address].forEach((el) =>
    contactsContainer.appendChild(el)
  );
  return contactsContainer;
}

function updateFooterContent(footer) {
  const imageAttribution = createAttributionElement(
    siteContent.about.attribution.url,
    siteContent.about.attribution.text
  );

  const contentContainer = document.createElement("p");
  contentContainer.classList.add("attribution-content");

  contentContainer.appendChild(imageAttribution);
  footer.appendChild(contentContainer);
}
