import Api from "./components/Api.js";
import Card from "./components/Card.js";
import Section from "./components/Section.js";
import UserInfo from "./components/UserInfo.js";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithForm from "./components/PopupWithForm.js";
import PopupWithConfirmation from "./components/PopupWithConfirmation.js";
import FormValidator from "./components/FormValidator.js";

// -------------------- API --------------------
const api = new Api({
  baseUrl: "https://around-api.es.tripleten-services.com/v1",
  headers: {
    authorization: "19708f38-31b5-4e7c-881f-a55efaff7d53",
    "Content-Type": "application/json",
  },
});

// -------------------- VALIDACIÓN --------------------
const validationSettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__type_input_error",
  errorClass: "popup__error_visible",
};

document.querySelectorAll(validationSettings.formSelector).forEach((form) => {
  const validator = new FormValidator(validationSettings, form);
  validator.enableValidation();
});

// -------------------- USUARIO --------------------
const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  aboutSelector: ".profile__about",
  avatarSelector: ".profile__avatar",
});

// -------------------- POPUPS --------------------
const imagePopup = new PopupWithImage("#popup-image");
imagePopup.setEventListeners();

const confirmPopup = new PopupWithConfirmation("#confirm-delete-popup");
confirmPopup.setEventListeners();

function createCard(data) {
  const cardData = {
    name: data.name,
    link: data.link,
    likes: data.likes || [],
    _id: data._id,
    owner: data.owner,
    userId: userInfo.getId(),
  };

  const card = new Card(
    cardData,
    "#card-template",
    (name, link) => imagePopup.open({ name, link }),
    (cardId, cardInstance) => {
      confirmPopup.open(() => {
        confirmPopup.renderLoading(true, "Eliminando...");
        api
          .deleteCard(cardId)
          .then(() => {
            cardInstance.deleteCardFromDOM();
            confirmPopup.close();
          })
          .catch((err) => {
            console.error("Error eliminando tarjeta:", err);
            // Opcional: mostrar mensaje de error al usuario
          })
          .finally(() => {
            confirmPopup.renderLoading(false);
          });
      });
    },
    api
  );

  return card.generateCard();
}

const cardSection = new Section(
  {
    items: [],
    renderer: (item) => {
      const cardElement = createCard(item);
      cardSection.addItem(cardElement);
    },
  },
  ".cards__list"
);

// -------------------- POPUP DE PERFIL --------------------
const profilePopup = new PopupWithForm("#edit-profile-popup", (formData) => {
  profilePopup.renderLoading(true, "Guardando...");
  api
    .setUserInfo({ name: formData.name, about: formData.about })
    .then((user) => {
      userInfo.setUserInfo(user);
      profilePopup.close();
    })
    .catch((err) => console.log(err))
    .finally(() => profilePopup.renderLoading(false));
});
profilePopup.setEventListeners();

document
  .querySelector(".profile__edit-button")
  .addEventListener("click", () => {
    const currentUser = userInfo.getUserInfo();
    document.querySelector("#input-name").value = currentUser.name;
    document.querySelector("#input-about").value = currentUser.about;
    profilePopup.open();
  });

// -------------------- POPUP DE AGREGAR TARJETA --------------------
const addCardPopup = new PopupWithForm("#add-image-popup", (formData) => {
  addCardPopup.renderLoading(true, "Guardando...");
  api
    .addCard({
      name: formData["input-title-place"],
      link: formData["input-url-image"],
    })
    .then((newCard) => {
      const newCardElement = createCard(newCard);
      cardSection.addItem(newCardElement);
      addCardPopup.close();
    })
    .catch((err) => console.log(err))
    .finally(() => addCardPopup.renderLoading(false));
});
addCardPopup.setEventListeners();

document.querySelector(".profile__add-button").addEventListener("click", () => {
  addCardPopup.open();
});

// -------------------- POPUP DE ACTUALIZAR AVATAR --------------------
const updateAvatarPopup = new PopupWithForm(
  "#update-avatar-popup",
  (formData) => {
    updateAvatarPopup.renderLoading(true, "Guardando...");
    api
      .patchUserAvatar(formData["input-avatar-url"])
      .then((user) => {
        userInfo.setUserInfo(user);
        updateAvatarPopup.close();
      })
      .catch((err) => console.log("Error al actualizar avatar:", err))
      .finally(() => updateAvatarPopup.renderLoading(false));
  }
);
updateAvatarPopup.setEventListeners();

document
  .querySelector(".profile__avatar-edit-button")
  .addEventListener("click", () => {
    const avatarInput = document.querySelector("#input-avatar-url");
    if (avatarInput) avatarInput.value = "";
    updateAvatarPopup.open();
  });

// -------------------- CARGAR DATOS INICIALES --------------------
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userInfo.setUserInfo({
      name: userData.name,
      about: userData.about,
      avatar: userData.avatar,
      _id: userData._id,
    });

    cardSection.setItems(cards.reverse());
    cardSection.renderItems();
  })
  .catch((err) => {
    console.error("Error cargando datos:", err);
  });
