class Lamp extends Device {
  constructor(id, name, brightness, color) {
    super(id, name);
    this._brightness = brightness;
    this._activeColor = color;
  }

  get brightness() {
    return this._brightness.value;
  }

  get red() {
    return this._activeColor.red;
  }

  get green() {
    return this._activeColor.green;
  }

  get blue() {
    return this._activeColor.blue;
  }

  set brightness(value) {
    this._brightness.value = value;
  }

  set red(value) {
    this._activeColor.red = value;
  }

  set green(value) {
    this._activeColor.green = value;
  }

  set blue(value) {
    this._activeColor.blue = value;
  }

  increaseBrightness(value) {
    this._brightness.increase(value);
  }

  decreaseBrightness(value) {
    this._brightness.decrease(value);
  }

  increaseRed(value) {
    this._activeColor.increaseRed(value);
  }

  decreaseRed(value) {
    this._activeColor.decreaseRed(value);
  }

  increaseGreen(value) {
    this._activeColor.increaseGreen(value);
  }

  decreaseGreen(value) {
    this._activeColor.decreaseGreen(value);
  }

  increaseBlue(value) {
    this._activeColor.increaseBlue(value);
  }

  decreaseBlue(value) {
    this._activeColor.decreaseBlue(value);
  }
}
