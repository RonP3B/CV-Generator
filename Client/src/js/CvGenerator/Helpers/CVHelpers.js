import { newElement, newElementText } from "./DOMHelpers.js";

const generateList = (type, values) => {
  const list = newElement("ul", `home__cv__content__${type}`);

  values.forEach((value) => {
    const element = newElementText("li", value);
    list.appendChild(element);
  });

  return list;
};

const generateContactInfo = (title, text) => {
  const container = newElement("span");

  const h5_title = newElementText("h5", title);
  container.appendChild(h5_title);

  const p_text = newElementText("p", text);
  container.appendChild(p_text);

  return container;
};

const generateBlueBlock = (radius) => {
  const blueBlock = newElement(
    "span",
    "home__cv__blue-block",
    `rounded-${radius}`,
    radius === "bottom" ? "mt-auto" : "_",
    radius === "bottom" ? "p-2" : "_"
  );

  return blueBlock;
};

const generateTitleContainer = (title, ...content) => {
  const sectionContainer = newElement("div");
  const sectionTitle = newElementText("h3", title);

  sectionContainer.appendChild(sectionTitle);

  content.forEach((element) => sectionContainer.appendChild(element));

  return sectionContainer;
};

const generateImg = (src, alt) => {
  const img = newElement("img");
  setImageSource(img, src);
  img.setAttribute("alt", alt);
  return img;
};

const setImageSource = (img, src) => {
  const ObjFileReader = new FileReader();
  ObjFileReader.readAsDataURL(src);

  ObjFileReader.addEventListener("load", () => {
    img.setAttribute("src", ObjFileReader.result);
  });
};

export {
  generateList,
  generateContactInfo,
  generateBlueBlock,
  generateTitleContainer,
  generateImg,
};
