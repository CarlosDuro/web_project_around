export default class UserInfo {
  constructor({ nameSelector, aboutSelector, avatarSelector = null }) {
    this._nameElement = document.querySelector(nameSelector);
    this._aboutElement = document.querySelector(aboutSelector);
    this._avatarElement = avatarSelector
      ? document.querySelector(avatarSelector)
      : null;
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      about: this._aboutElement.textContent,
    };
  }

  getId() {
    return this._id; // se debe setear en setUserInfo si lo quieres usar en Card
  }

  setUserInfo({ name, about, avatar, _id }) {
    if (name) this._nameElement.textContent = name;
    if (about) this._aboutElement.textContent = about;
    if (avatar && this._avatarElement) this._avatarElement.src = avatar;
    if (_id) this._id = _id;
  }
}
