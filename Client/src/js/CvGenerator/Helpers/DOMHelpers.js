const getElement = (identifier) => document.querySelector(identifier);

const addClasses = (element, ...classes) =>
  classes.forEach((currClass) => element.classList.add(currClass));

const newElement = (element, ...classes) => {
  const newElement = document.createElement(element);
  addClasses(newElement, ...classes);
  return newElement;
};

const newElementText = (element, text) => {
  const elementText = newElement(element);
  elementText.innerHTML = text;
  return elementText;
};

export { getElement, newElement, newElementText };
