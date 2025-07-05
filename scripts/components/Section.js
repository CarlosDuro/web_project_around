export default class Section {
  constructor({ items = [], renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems(items = this._items) {
    items.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(element, append = false) {
    if (append) {
      this._container.append(element);
    } else {
      this._container.prepend(element);
    }
  }

  setItems(items) {
    this._items = items;
  }
}
