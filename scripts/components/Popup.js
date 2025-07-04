export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleOverlayClick = this._handleOverlayClick.bind(this);
  }

  open() {
    if (!this._popup) return;
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    if (!this._popup) return;
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  _handleOverlayClick(evt) {
    // Cierra el popup si se hace clic fuera del contenido o en el overlay
    if (evt.target === this._popup) {
      this.close();
    }
  }

  setEventListeners() {
    if (!this._popup) return;

    const closeButton = this._popup.querySelector(".popup__close-button");
    if (closeButton) {
      closeButton.addEventListener("click", () => this.close());
    }

    this._popup.addEventListener("mousedown", this._handleOverlayClick);
  }
}
