export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  // Método para abrir el popup
  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  // Método para cerrar el popup
  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  // Cierra popup si se presiona la tecla Escape
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  // Agrega todos los event listeners necesarios
  setEventListeners() {
    // Cerrar con botón de cerrar
    this._popup
      .querySelector(".popup__close-button")
      .addEventListener("click", () => this.close());

    // Cerrar al hacer clic en el fondo (overlay)
    this._popup.addEventListener("click", (e) => {
      if (
        e.target === this._popup || // Clic directamente en el <section class="popup">
        e.target.classList.contains("popup__overlay") // O en el div con clase popup__overlay
      ) {
        this.close();
      }
    });
  }
}
