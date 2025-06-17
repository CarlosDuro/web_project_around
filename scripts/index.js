import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import Section from "./components/Section.js";
import { PopupWithImage } from "./components/PopupWithImage.js";
import PopupWithForm from "./components/PopupWithForm.js";
import UserInfo from "./components/UserInfo.js";
import { initialCards } from "./utils.js";

// -------------------- Configuración --------------------

const validationSettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__type_input_error",
  errorClass: "popup__error_visible",
};

// -------------------- Validación --------------------

document
  .querySelectorAll(validationSettings.formSelector)
  .forEach((formElement) => {
    const validator = new FormValidator(validationSettings, formElement);
    validator.enableValidation();
  });

// -------------------- Perfil del usuario --------------------

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  aboutSelector: ".profile__about",
});

// -------------------- Popup de imagen --------------------

const imagePopup = new PopupWithImage("#popup-image");
imagePopup.setEventListeners();

// -------------------- Función para crear tarjeta --------------------

function createCard(data) {
  const card = new Card(data, ".template-card", (name, link) => {
    imagePopup.open({ name, link });
  });

  return card.generateCard();
}

// -------------------- Sección de tarjetas --------------------

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardElement = createCard(item);
      cardSection.addItem(cardElement);
    },
  },
  ".cards"
);

cardSection.renderItems();

// -------------------- Popup de perfil --------------------

const profilePopup = new PopupWithForm("#edit-profile-popup", (formData) => {
  userInfo.setUserInfo({
    name: formData.name,
    about: formData.about,
  });
  profilePopup.close();
});

profilePopup.setEventListeners();

// Botón de editar perfil
document
  .querySelector(".profile__edit-button")
  .addEventListener("click", () => {
    const user = userInfo.getUserInfo();
    document.querySelector("#input-name").value = user.name;
    document.querySelector("#input-about").value = user.about;
    profilePopup.open();
  });

// -------------------- Popup de agregar imagen --------------------

const addCardPopup = new PopupWithForm("#add-image-popup", (formData) => {
  const newCardElement = createCard({
    name: formData["input-title-place"],
    link: formData["input-url-image"],
  });
  cardSection.addItem(newCardElement);
  addCardPopup.close();
});

addCardPopup.setEventListeners();

// Botón de agregar imagen
document.querySelector(".profile__add-button").addEventListener("click", () => {
  addCardPopup.open();
});
