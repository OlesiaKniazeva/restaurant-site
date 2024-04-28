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

export function createImageElement(imageFile, className, width=0, height=width) {
  const img = new Image();
  img.src = imageFile;
  img.width = width;
  img.height = height;
  img.classList.add(className);

  return img;
}

export function createSetOfParagraphs(data, classNameContainer, classNameData) {
  const contentDiv = document.createElement('div');
  contentDiv.classList.add(classNameContainer);

  let lines = data.split('\n');

  lines.forEach(line => {
    const p = document.createElement('p');
    p.textContent = line;
    p.classList.add(classNameData);
    contentDiv.appendChild(p);
  })

  return contentDiv;
}