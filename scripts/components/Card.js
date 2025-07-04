export default class Card {
  constructor(
    { name, link, likes = [], _id, owner, userId, isLiked = false },
    templateSelector,
    handleCardClick,
    handleDeleteClick,
    api
  ) {
    this._name = name?.trim() || "Sin título";
    this._link = link?.trim() || "";
    this._likes = likes;
    this._id = _id;
    this._ownerId = owner?._id || owner;
    this._userId = userId;
    this._isLiked = isLiked;

    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._api = api;
  }

  _getTemplate() {
    return document
      .querySelector(this._templateSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  generateCard() {
    this._element = this._getTemplate();
    this._image = this._element.querySelector(".card__image");
    this._title = this._element.querySelector(".card__information-name");
    this._likeButton = this._element.querySelector(".card__like-button");
    this._likeCount = this._element.querySelector(".card__like-count");
    this._deleteButton = this._element.querySelector(".card__delete-button");

    this._title.textContent = this._name;
    this._image.src = this._link;
    this._image.alt = this._name;

    this._setEventListeners();
    this._updateLikesView();

    if (this._ownerId !== this._userId) {
      this._deleteButton.style.display = "none";
    }

    return this._element;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => this._handleLike());
    this._deleteButton.addEventListener("click", () => {
      console.log("🗑 Botón de eliminar presionado", this._id);
      this._handleDelete();
    });
    this._image.addEventListener("click", () =>
      this._handleCardClick(this._name, this._link)
    );
  }

  _handleLike() {
    const newLikeStatus = !this._isLiked;
    this._api
      .changeLikeCardStatus(this._id, newLikeStatus)
      .then((updatedCard) => {
        this._isLiked = updatedCard.isLiked;
        this._likes = Array.isArray(updatedCard.likes) ? updatedCard.likes : [];
        this._updateLikesView();
      })
      .catch((err) => console.error("❌ Error al cambiar like:", err));
  }

  _handleDelete() {
    if (typeof this._handleDeleteClick === "function") {
      this._handleDeleteClick(this._id, this);
    } else {
      console.warn("⚠️ _handleDeleteClick no está definido");
    }
  }

  deleteCardFromDOM() {
    this._element.remove();
    this._element = null;
  }

  _updateLikesView() {
    const likeCount = Array.isArray(this._likes) ? this._likes.length : 0;
    if (likeCount === 0) {
      this._likeCount.style.display = "none";
    } else {
      this._likeCount.style.display = "inline";
      this._likeCount.textContent = likeCount;
    }

    if (this._isLiked) {
      this._likeButton.classList.add("card__like-button_active");
    } else {
      this._likeButton.classList.remove("card__like-button_active");
    }
  }
}
