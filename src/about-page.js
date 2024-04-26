import siteContent from "./site-content.toml";
import { preparePage } from "./utils";

export function getRestaurantAboutPage() {
  const mainPageContent = preparePage('content', "about");

  const aboutHeader = document.createElement("h1");
  aboutHeader.classList.add("about-header");
  aboutHeader.textContent = siteContent.about.header;

  const aboutContent = document.createElement("p");
  aboutContent.classList.add("about-content");
  aboutContent.textContent = siteContent.about.content;

  mainPageContent.appendChild(aboutHeader);
  mainPageContent.appendChild(aboutContent);

  const contactHeader = document.createElement("h1");
  contactHeader.textContent = siteContent.about.contact.header;

  const phone = document.createElement("p");
  phone.textContent = `Phone: ${siteContent.about.contact.phone}`;

  const email = document.createElement("p");
  email.textContent = `Email: ${siteContent.about.contact.email}`;

  const address = document.createElement("p");
  address.textContent = `Address: ${siteContent.about.contact.address}`;

  mainPageContent.appendChild(contactHeader);
  mainPageContent.appendChild(phone);
  mainPageContent.appendChild(email);
  mainPageContent.appendChild(address);
}
