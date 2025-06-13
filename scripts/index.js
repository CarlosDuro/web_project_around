import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { initialCards } from "./utils.js";

// Configuración de validación
const validationSettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__type_input_error",
  errorClass: "popup__error_visible",
};

// Activar validación en todos los formularios
document.querySelectorAll(validationSettings.formSelector).forEach((form) => {
  const validator = new FormValidator(validationSettings, form);
  validator.enableValidation();
});

// Contenedor de tarjetas
const cardContainer = document.querySelector(".cards");

// Renderizar tarjetas iniciales
initialCards.forEach((data) => {
  const card = new Card(data.name, data.link, ".template-card");
  const cardElement = card.generateCard();
  cardContainer.append(cardElement);
});

// ------------------ Editar perfil ------------------

const editPopup = document.querySelector("#edit-profile-popup");
const editForm = document.querySelector("#profile-form");
const editButton = document.querySelector(".profile__edit-button");
const closeEditButton = editPopup.querySelector(".popup__close-button");

const nameInput = document.querySelector("#input-name");
const aboutInput = document.querySelector("#input-about");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");

editButton.addEventListener("click", () => {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
  openPopup(editPopup);
});

closeEditButton.addEventListener("click", () => closePopup(editPopup));

editForm.addEventListener("submit", (e) => {
  e.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closePopup(editPopup);
});

// ------------------ Agregar nueva imagen ------------------

const addPopup = document.querySelector("#add-image-popup");
const addForm = document.querySelector("#add-image-form");
const addButton = document.querySelector(".profile__add-button");
const closeAddButton = addPopup.querySelector(".popup__close-button");

const titleInput = document.querySelector("#input-title-place");
const linkInput = document.querySelector("#input-url-image");

addButton.addEventListener("click", () => openPopup(addPopup));
closeAddButton.addEventListener("click", () => closePopup(addPopup));

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newCard = new Card(titleInput.value, linkInput.value, ".template-card");
  const cardElement = newCard.generateCard();
  cardContainer.prepend(cardElement);
  addForm.reset();
  closePopup(addPopup);
});

// ------------------ Cerrar popup al hacer clic en overlay ------------------

document.querySelectorAll(".popup").forEach((popup) => {
  popup.addEventListener("click", (e) => {
    if (e.target.classList.contains("popup__overlay")) {
      closePopup(popup);
    }
  });
});

// ------------------ Funciones reutilizables ------------------

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}
