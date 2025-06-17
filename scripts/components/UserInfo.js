export default class UserInfo {
  constructor({ nameSelector, aboutSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._aboutElement = document.querySelector(aboutSelector);
  }

  // Devuelve un objeto con los datos actuales del usuario
  getUserInfo() {
    if (!this._nameElement || !this._aboutElement) {
      console.error(
        "❌ Uno de los selectores no encontró el elemento en el DOM (getUserInfo)."
      );
      return { name: "", about: "" };
    }

    return {
      name: this._nameElement.textContent,
      about: this._aboutElement.textContent,
    };
  }

  // Establece nuevos datos del usuario en la interfaz
  setUserInfo({ name, about }) {
    if (!this._nameElement || !this._aboutElement) {
      console.error(
        "❌ Uno de los selectores no encontró el elemento en el DOM (setUserInfo)."
      );
      return;
    }

    this._nameElement.textContent = name;
    this._aboutElement.textContent = about;
  }
}
