export default class DelayedAction {
  constructor(deviceId, delay, action, ...args) {
    this._deviceId = deviceId;
    this._delay = delay;
    this._action = action;
    this._args = args;
  }

  get deviceId() {
    return this._deviceId;
  }

  get delay() {
    return this._delay;
  }

  get action() {
    return this._action;
  }

  get args() {
    return this._args;
  }
}
