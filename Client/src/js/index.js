import { FORM_FIELDS, SUBMIT_BTN } from "./CvGenerator/Global/FormData.js";
import { validateForm } from "./CvGenerator/Helpers/formHelpers.js";

FORM_FIELDS.picture.addEventListener(
  "change",
  (e) => (FORM_FIELDS.pictureSpan.innerHTML = e.target.files[0].name)
);

SUBMIT_BTN.addEventListener("click", () => validateForm());
