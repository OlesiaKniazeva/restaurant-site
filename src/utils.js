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

export function createAttributionData(attributions) {
  const attributionContainer = document.createElement('p');
  attributionContainer.classList.add('attribution-content');


  for (let i = 0; i < attributions.length; ++i) {
    if (i !== 0) {
      const comma = document.createTextNode(", ");
      attributionContainer.appendChild(comma);
    }

    const attributionItem = createAttributionElement(attributions[i].url, attributions[i].text);
    attributionContainer.appendChild(attributionItem);
  }

  return attributionContainer;
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

export function setUpLogo(LogoImg, width=0, height=width) {
  const logoButton = document.getElementById("logo");
  const logoImage = createImageElement(LogoImg, "logo", width, height);

  logoButton.innerHTML = '';
  logoButton.appendChild(logoImage);
}
