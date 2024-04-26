export function preparePage(pageId, className) {
  const pageContent = document.getElementById(pageId);
  pageContent.innerHTML = "";
  pageContent.className = "";
  pageContent.classList.add(className);
  return pageContent;
}

export function createElementWithClassAndText(elementType, className, text) {
  const el = document.createElement(`${elementType}`);
  el.classList.add(className);
  el.textContent = text;
  return el;
}

export function createAttributionElement(url, text) {
  const attributionElement = document.createElement("a");
  attributionElement.href = url;
  attributionElement.textContent = text;
  attributionElement.target = '_blank';
  attributionElement.rel = 'noopener noreferrer'; 
  return attributionElement;
}
