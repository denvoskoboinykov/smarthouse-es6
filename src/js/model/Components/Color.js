class Color {
  constructor(red, green, blue) {
    this._red = red;
    this._green = green;
    this._blue = blue;
  }

  get red() {
    return this._red.value;
  }

  get green() {
    return this._green.value;
  }

  get blue() {
    return this._blue.value;
  }

  set red(value) {
    this._red.value = value;
  }

  set green(value) {
    this._green.value = value;
  }

  set blue(value) {
    this._blue.value = value;
  }

  increaseRed(value) {
    this._red.increase(value);
  }

  decreaseRed(value) {
    this._red.decrease(value);
  }

  increaseGreen(value) {
    this._green.increase(value);
  }

  decreaseGreen(value) {
    this._green.decrease(value);
  }

  increaseBlue(value) {
    this._blue.increase(value);
  }

  decreaseBlue(value) {
    this._blue.decrease(value);
  }
}
