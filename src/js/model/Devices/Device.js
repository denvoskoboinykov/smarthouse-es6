class Device {
  constructor(id, name) {
    this._id = id;
    this._name = name;
    this._state = false;
  }

  get id() {
    return this._id;
  }

  get state() {
    return this._state;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  toggleState() {
    this._state = !this._state;
  }

  disable() {
    this._state = false;
  }

  enable() {
    this._state = true;
  }
}
