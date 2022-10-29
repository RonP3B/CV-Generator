import {
  generateList,
  generateContactInfo,
  generateBlueBlock,
  generateTitleContainer,
  generateImg,
} from "./Helpers/CVHelpers.js";

import {
  getElement,
  newElement,
  newElementText,
} from "./Helpers/DOMHelpers.js";

const generateCV = (fieldsValues) => {
  const {
    name,
    address,
    email,
    phone,
    website,
    languages,
    summary,
    skills,
    jobs,
    education,
    certifications,
    picture,
  } = fieldsValues;

  const cvContainer = getElement("#cv-container");
  const row = newElement("div", "row");
  const firstSection = newElement("section", "col-12", "col-md-4");
  const firstCVContent = newElement("div", "home__cv__content");

  const secondSection = newElement(
    "section",
    "col-12",
    "col-md-8",
    "d-md-flex",
    "flex-column",
    "min-hgt"
  );

  const secondCVContent = newElement("div", "home__cv__content");

  if (cvContainer.hasChildNodes())
    cvContainer.removeChild(cvContainer.firstChild);

  cvContainer.appendChild(row);

  row.appendChild(firstSection);
  row.appendChild(secondSection);

  firstSection.appendChild(generateBlueBlock("top"));
  firstSection.appendChild(firstCVContent);

  firstCVContent.appendChild(newElementText("h2", name));
  firstCVContent.appendChild(generateImg(picture, "User picture"));

  firstCVContent.appendChild(
    generateTitleContainer(
      "Contact",
      generateContactInfo("Address:", address),
      generateContactInfo("Phone:", phone),
      generateContactInfo("Email:", email),
      generateContactInfo("Website:", website)
    )
  );

  firstCVContent.appendChild(
    generateTitleContainer("Languages", generateList("no-list", languages))
  );

  secondSection.appendChild(secondCVContent);
  secondSection.appendChild(generateBlueBlock("bottom"));

  secondCVContent.appendChild(
    generateTitleContainer("Summary", newElementText("p", summary))
  );

  secondCVContent.appendChild(
    generateTitleContainer(
      "Skill Highlights",
      generateList("grid-list", skills)
    )
  );

  secondCVContent.appendChild(
    generateTitleContainer("Jobs", generateList("no-list", jobs))
  );

  secondCVContent.appendChild(
    generateTitleContainer("Education", generateList("no-list", education))
  );

  secondCVContent.appendChild(
    generateTitleContainer(
      "Certifications",
      generateList("no-list", certifications)
    )
  );
};

export { generateCV };
