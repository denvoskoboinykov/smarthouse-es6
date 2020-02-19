export default class SmartHouse {
  constructor(id, name) {
    this._id = id;
    this._name = name;
    this._devices = [];
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get devices() {
    return this._devices;
  }

  addDevice(device) {
    this._devices.push(device);
  }

  selectDevice(id) {
    return this._devices.find(device => device.id === id);
  }

  deleteDevice(id) {
    this._devices = this._devices.filter(device => device.id !== id);
  }

  enableAllDiveces() {
    this._devices.forEach(device => device.enable());
  }

  disableAllDiveces() {
    this._devices.forEach(device => device.disable());
  }
}
