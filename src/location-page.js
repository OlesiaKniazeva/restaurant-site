import { preparePage } from "./utils";
import siteContent from "./site-content.toml";
import { createElementWithClassAndText } from "./utils";
import { Loader } from "@googlemaps/js-api-loader";


export function getRestaurantLocationPage() {
  const mainPageContent = preparePage("content", "location");

  const locationHeader = createElementWithClassAndText(
    "h1",
    "header",
    siteContent.location.header
  );

  const mapElement = createMapElement();

  const address = createElementWithClassAndText(
    "p",
    "address",
    siteContent.location.address
  );

  const directions = createElementWithClassAndText(
    "p",
    "directions-info",
    siteContent.location.directions
  );
  const carRoute = createElementWithClassAndText(
    "p",
    "car-route",
    siteContent.location["car-route"]
  );
  const publicRoute = createElementWithClassAndText(
    "p",
    "public-transport-route",
    siteContent.location["public-transport-route"]
  );

  [
    locationHeader,
    mapElement,
    address,
    directions,
    carRoute,
    publicRoute,
  ].forEach((el) => mainPageContent.appendChild(el));
}


function createMapElement() {
  const mapContainer = document.createElement("div");
  mapContainer.id = "map";
  
  let map;
  initMap();

  return mapContainer;
}

async function initMap() {
  const loader = new Loader({
    apiKey: "AIzaSyBaRiF5acvfVfe22mZznBPvIMAEhjBVBqA",
    version: "weekly",
    libraries: ["places"]
  });

  const mapOptions = {
    center: {
      lat: 47.03707660326528,
      lng:  8.35477054603888
    },
    zoom: 4
  };

  loader
  .importLibrary('maps')
  .then(({Map}) => {
    new Map(document.getElementById("map"), mapOptions);
  })
  .catch((e) => {
    // do something
  });
  

}
