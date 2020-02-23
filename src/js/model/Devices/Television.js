class Television extends Device {
  constructor(id, name, screenDiagonal, volume, saturation, brightness) {
    super(id, name);
    this._screenDiagonal = screenDiagonal;
    this._volume = volume;
    this._saturation = saturation;
    this._brightness = brightness;
  }

  get screenDiagonal() {
    return this._screenDiagonal;
  }

  get volume() {
    return this._volume.value;
  }

  get saturation() {
    return this._saturation.value;
  }

  get brightness() {
    return this._brightness.value;
  }

  set volume(value) {
    this._volume.value = value;
  }

  set saturation(value) {
    this._saturation.value = value;
  }

  set brightness(value) {
    this._brightness.value = value;
  }

  increaseVolume(value) {
    this._volume.increase(value);
  }

  decreaseVolume(value) {
    this._volume.decrease(value);
  }

  increaseSaturation(value) {
    this._saturation.increase(value);
  }

  decreaseSaturation(value) {
    this._saturation.decrease(value);
  }

  increaseBrightness(value) {
    this._brightness.increase(value);
  }

  decreaseBrightness(value) {
    this._brightness.decrease(value);
  }
}
