export default class SmartHouse {
  constructor(id, name, map) {
    this._id = id;
    this._name = name;
    this._devices = [];
    this._delayedActions = map;
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

  get delayedActions() {
    return this._delayedActions;
  }

  selectDevice(id) {
    return this._devices.find(device => device.id === id);
  }

  addDevice(device) {
    this._devices.push(device);
  }

  deleteDevice(id) {
    this._devices = this._devices.filter(device => device.id !== id);
  }

  enableAllDevuces() {
    this._devices.forEach(device => device.enable());
  }

  disableAllDevices() {
    this._devices.forEach(device => device.disable());
  }

  //options = {deviceId, delay, action, args}
  //action - callback F from [device].prototype, bcs no delegation for [device] methods (SmartHouse methods doesn't work)
  //no getter/setter
  //arg - arguments, that F takes
  delayAction(options) {
    const { deviceId, delay, action, args } = options;
    const counterId = setTimeout(() => {
      action.apply(this.selectDevice(deviceId), args);
      this._delayedActions.delete(counterId);
    }, delay);
    this._delayedActions.set(counterId, options);
  }

  cancelDelayedAction(counterId) {
    clearTimeout(counterId);
    this._delayedActions.delete(counterId);
  }
}
