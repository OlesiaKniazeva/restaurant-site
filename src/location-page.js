import { preparePage } from "./utils";
import siteContent from "./site-content.toml";
import { createElementWithClassAndText } from "./utils";

export function getRestaurantLocationPage() {
  const mainPageContent = preparePage("content", "location");
  const location = siteContent.location;

  const headerElement = createElement("header", [{ tag: "h1", className: "header", text: location.header }]);

  const operationElement = createElement("operation-container", [
    { tag: "h2", className: "header", text: location.operation.header },
    { tag: "p", className: "operation", text: location.operation.content },
  ]);

  const addressElement = createElementWithClassAndText('p', 'address', `Address: ${location.address.content}`)
  const mapElement = createMapElement(addressElement);
  
  const directionsElement = createElement("directions-container", [
    { tag: "h2", className: "header", text: location.directions.header },
    { tag: "p", className: "directions", text: location.directions.content },
    { tag: "p", className: "car-route", text: location.directions["car-route"]},
    { tag: "p", className: "public-transport-route", text: location.directions["public-transport-route"]},
  ]);

  mainPageContent.appendChild(headerElement);
  mainPageContent.appendChild(directionsElement);
  mainPageContent.appendChild(mapElement);
  mainPageContent.appendChild(operationElement);

  return mainPageContent;
}

function createElement(header, content) {
  const element = document.createElement("div");
  element.classList.add(header);

  content.forEach(({ tag, className, text }) => {
    const childElement = createElementWithClassAndText(tag, className, text);
    element.appendChild(childElement);
  });

  return element;
}

function createMapElement(addressName) {
  const mapContainer = document.createElement("div");
  mapContainer.classList.add("map-container");

  mapContainer.appendChild(addressName);

  const iframe = document.createElement("iframe");

  iframe.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.841542977714!2d8.354361838161157!3d47.037811161643575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478ff96529d8886d%3A0x665941ef81712940!2sRippertschwandstrasse%2026!5e0!3m2!1sen!2sjp!4v1714286073083!5m2!1sen!2sjp";
  iframe.width = "600";
  iframe.height = "450";
  iframe.style.border = "0";
  iframe.allowFullscreen = "";
  iframe.loading = "lazy";
  iframe.referrerPolicy = "no-referrer-when-downgrade";

  mapContainer.appendChild(iframe);

  return mapContainer;
}
