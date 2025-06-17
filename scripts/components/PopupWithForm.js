import { Popup } from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(".popup__form");

    if (!this._form) {
      console.error(
        "❌ No se encontró el formulario dentro del popup:",
        popupSelector
      );
    }

    this._inputList = Array.from(
      this._form?.querySelectorAll(".popup__input") || []
    );
  }

  // Recoge todos los valores de los inputs del formulario
  _getInputValues() {
    const formValues = {};
    this._inputList.forEach((input) => {
      if (input.name) {
        formValues[input.name] = input.value;
      } else {
        console.warn("⚠️ Un input no tiene atributo 'name':", input);
      }
    });

    console.log("🧾 Valores del formulario:", formValues); // Depuración
    return formValues;
  }

  // Escuchadores de eventos personalizados (submit + cerrar)
  setEventListeners() {
    super.setEventListeners();
    if (this._form) {
      this._form.addEventListener("submit", (event) => {
        event.preventDefault();
        const inputData = this._getInputValues();
        this._handleFormSubmit(inputData);
      });
    }
  }

  // Cierra popup y reinicia el formulario
  close() {
    super.close();
    if (this._form) {
      this._form.reset();
    }
  }
}
