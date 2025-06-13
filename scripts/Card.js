export class Card {
  constructor(name, link, templateSelector) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    return cardElement;
  }

  _setEventListeners(cardElement) {
    cardElement
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        cardElement
          .querySelector(".card__like-button")
          .classList.toggle("card__like-button_active");
      });

    cardElement
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        cardElement.remove();
      });

    cardElement.querySelector(".card__image").addEventListener("click", () => {
      const popup = document.querySelector("#popup-image-open");
      popup.classList.add("popup_opened");
      const popupImage = popup.querySelector(".popup__image");
      const popupTitle = popup.querySelector(".popup__image-title");
      popupImage.src = this._link;
      popupImage.alt = this._name;
      popupTitle.textContent = this._name;
    });
  }

  generateCard() {
    const cardElement = this._getTemplate();
    const cardImage = cardElement.querySelector(".card__image");
    const cardTitle = cardElement.querySelector(".card__information-name");

    cardImage.src = this._link;
    cardImage.alt = this._name;
    cardTitle.textContent = this._name;

    this._setEventListeners(cardElement);

    return cardElement;
  }
}
