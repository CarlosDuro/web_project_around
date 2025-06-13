import { FormValidator } from "./FormValidator.js";

const validationSettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

export const enableValidation = () => {
  const forms = document.querySelectorAll(validationSettings.formSelector);
  forms.forEach((form) => {
    const validator = new FormValidator(validationSettings, form);
    validator.enableValidation();
  });
};
