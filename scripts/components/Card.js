export default class Card {
  constructor({ name, link }, templateSelector, handleCardClick) {
    this._name = name?.trim() || "Sin título";
    this._link = link?.trim() || "";
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const template = document
      .querySelector(this._templateSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return template;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._image = this._element.querySelector(".card__image");
    this._likeButton = this._element.querySelector(".card__like-button");
    this._deleteButton = this._element.querySelector(".card__delete-button");
    this._title = this._element.querySelector(".card__information-name");

    this._title.textContent = this._name;

    // Asigna imagen (aunque sea inválida al principio)
    this._image.src = this._link;
    this._image.alt = this._name;

    // Si falla la carga, muestra placeholder y loguea el error
    this._image.addEventListener("error", () => {
      console.error("Error cargando imagen:", this._link);
      this._image.src = "https://code.s3.yandex.net/web-code/yosemite.jpg";
    });

    this._setEventListeners();

    return this._element;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._toggleLike();
    });

    this._deleteButton.addEventListener("click", () => {
      this._deleteCard();
    });

    this._image.addEventListener("click", () => {
      console.log("Opening image with link:", this._link);
      this._handleCardClick(this._name, this._link);
    });
  }

  _toggleLike() {
    this._likeButton.classList.toggle("card__like-button_active");
  }

  _deleteCard() {
    this._element.remove();
    this._element = null;
  }
}
