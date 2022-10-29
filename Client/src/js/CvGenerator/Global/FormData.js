import { getElement } from "../Helpers/DOMHelpers.js";

const FORM_FIELDS = {
  name: getElement("#name"),
  address: getElement("#address"),
  email: getElement("#email"),
  phone: getElement("#phone"),
  website: getElement("#website"),
  languages: getElement("#languages"),
  summary: getElement("#summary"),
  skills: getElement("#skills"),
  jobs: getElement("#jobs"),
  education: getElement("#education"),
  certifications: getElement("#certifications"),
  picture: getElement("#user-pic"),
  pictureSpan: getElement("#selected-pic"),
};
const SUBMIT_BTN = getElement("#submit-btn");
const ALERT = getElement(".alert");

export { FORM_FIELDS, SUBMIT_BTN, ALERT };
