import MainImg from "./images/main1.jpg";
import siteContent from "./site-content.toml";
import {
  preparePage,
  createElementWithClassAndText,
  createAttributionData,
  createImageElement
} from "./utils";

export function getRestaurantHomePage() {
  const mainPage = preparePage("content", "home");
  const footer = preparePage("footer", "home");
  updateMainPageContent(mainPage);
  
  const attributionData = createAttributionData(siteContent.main.attribution);
  footer.appendChild(attributionData);
}


function updateMainPageContent(mainPage) {
  const mainImage = createImageElement(MainImg, 'background-image');
  mainPage.appendChild(mainImage);

  const mainInvitiation = createMainInvitationElement();
  mainInvitiation.classList.add("invitation-container");
  mainPage.appendChild(mainInvitiation);
}

function createMainInvitationElement() {
  const div = document.createElement("div");

  const invitation = createElementWithClassAndText(
    "p",
    "invitation",
    siteContent.main.invitation
  );
  div.appendChild(invitation);

  const header = createElementWithClassAndText(
    "p",
    "header",
    siteContent.main.header
  );
  div.appendChild(header);

  const content = createElementWithClassAndText(
    "p",
    "content",
    siteContent.main.content
  );
  div.appendChild(content);

  const bookButton = createElementWithClassAndText(
    "button",
    "book",
    "Book a Table"
  );
  div.appendChild(bookButton);

  return div;
}
