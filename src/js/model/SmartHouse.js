class SmartHouse {
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

  delayAction(options, callback) {
    const { delay, action } = options;
    const counterId = setTimeout(() => {
      action();
      this._delayedActions.delete(counterId);
      callback();
    }, delay);
    this._delayedActions.set(counterId, options);
  }

  cancelDelayedAction(counterId) {
    clearTimeout(counterId);
    this._delayedActions.delete(counterId);
  }
}
