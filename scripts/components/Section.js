export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  // Renderiza todos los elementos utilizando el renderer provisto
  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

  // Agrega un elemento DOM al contenedor
  addItem(element) {
    this._container.prepend(element);
  }
}
