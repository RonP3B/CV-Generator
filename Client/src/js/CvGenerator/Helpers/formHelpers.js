import { FORM_FIELDS, ALERT } from "../Global/FormData.js";
import { generateCV } from "../CvGenerator.js";

String.prototype.isEmpty = function () {
  return this === null || this === undefined || this.trim().length === 0;
};

const displayAlert = (alert) => {
  alert.classList.replace("opacity-0", "opacity-100");
  setTimeout(() => alert.classList.replace("opacity-100", "opacity-0"), 2500);
};

const checkFormFields = (formFields) => {
  if (formFields["picture"].files.length == 0) return false;

  for (const field in formFields) {
    if (field === "pictureSpan") continue;
    if (formFields[field].value.isEmpty()) return false;
  }

  return true;
};

const warningBorder = (element, flag) => {
  flag
    ? element.classList.add("border-danger")
    : element.classList.remove("border-danger");
};

const highlightEmptyFields = (formFields) => {
  const picField = formFields["picture"].files.length == 0;

  picField
    ? warningBorder(formFields["pictureSpan"], true)
    : warningBorder(formFields["pictureSpan"], false);

  for (const field in formFields) {
    const currField = formFields[field];

    if (field === "pictureSpan") continue;
    if (currField.value.isEmpty()) warningBorder(currField, true);
    else warningBorder(currField, false);
  }
};

const cleanFields = (formFields) => {
  formFields["pictureSpan"].innerHTML = "image.extension";

  for (const field in formFields) {
    const currField = formFields[field];
    currField.value = "";

    if (currField.classList.contains("border-danger"))
      currField.classList.remove("border-danger");
  }
};

const getFieldsValues = (formFields) => {
  const values = {};

  const multipleValuesFields = [
    "languages",
    "skills",
    "jobs",
    "education",
    "certifications",
  ];

  for (const field in formFields) {
    const currFieldVal = formFields[field].value;

    if (multipleValuesFields.includes(field)) {
      values[field] = currFieldVal.split(",");
    } else if (field === "picture") {
      values[field] = formFields[field].files[0];
    } else values[field] = currFieldVal;
  }

  return values;
};

const validateForm = () => {
  if (checkFormFields(FORM_FIELDS)) {
    const fieldsValues = getFieldsValues(FORM_FIELDS);
    generateCV(fieldsValues);
    cleanFields(FORM_FIELDS);
  } else {
    displayAlert(ALERT);
    highlightEmptyFields(FORM_FIELDS);
  }
};

export {
  displayAlert,
  checkFormFields,
  highlightEmptyFields,
  cleanFields,
  getFieldsValues,
  validateForm,
};
