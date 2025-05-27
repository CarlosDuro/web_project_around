/**
 * Configuración de validación para formularios
 * @type {Object}
 */
const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

/**
 * Muestra el mensaje de error de validación
 * @param {HTMLFormElement} formElement - Formulario contenedor
 * @param {HTMLInputElement} inputElement - Input que falló validación
 */
const showValidationError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(validationConfig.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(validationConfig.errorClass);
};

/**
 * Oculta el mensaje de error de validación
 * @param {HTMLFormElement} formElement - Formulario contenedor
 * @param {HTMLInputElement} inputElement - Input validado
 */
const hideValidationError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(validationConfig.inputErrorClass);
  errorElement.textContent = "";
  errorElement.classList.remove(validationConfig.errorClass);
};

/**
 * Valida un campo de entrada y muestra/oculta errores
 * @param {HTMLFormElement} formElement - Formulario contenedor
 * @param {HTMLInputElement} inputElement - Input a validar
 */
const validateInput = (formElement, inputElement) => {
  if (inputElement.validity.valid) {
    hideValidationError(formElement, inputElement);
  } else {
    showValidationError(formElement, inputElement);
  }
};

/**
 * Verifica si todos los campos del formulario son válidos
 * @param {HTMLInputElement[]} inputList - Lista de inputs
 * @returns {boolean} - True si hay al menos un campo inválido
 */
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => !inputElement.validity.valid);
};

/**
 * Actualiza el estado del botón de submit
 * @param {HTMLInputElement[]} inputList - Lista de inputs
 * @param {HTMLButtonElement} buttonElement - Botón de submit
 */
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add(validationConfig.inactiveButtonClass);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(validationConfig.inactiveButtonClass);
  }
};

/**
 * Configura los event listeners para validación en un formulario
 * @param {HTMLFormElement} formElement - Formulario a configurar
 */
const setEventListeners = (formElement) => {
  const inputList = Array.from(
    formElement.querySelectorAll(validationConfig.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    validationConfig.submitButtonSelector
  );

  // Validación inicial
  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      validateInput(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });

    // Validación adicional al perder foco
    inputElement.addEventListener("blur", () => {
      validateInput(formElement, inputElement);
    });
  });
};

/**
 * Habilita la validación para todos los formularios
 */
const enableValidation = () => {
  const formList = Array.from(
    document.querySelectorAll(validationConfig.formSelector)
  );

  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formElement);
  });
};

// Iniciar la validación
enableValidation();
