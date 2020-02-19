export default class Range {
  constructor(min, max, initialValue) {
    this._min = min;
    this._max = max;
    this._value = initialValue;
  }

  get min() {
    return this._min;
  }

  get max() {
    return this._max;
  }

  get value() {
    return this._value;
  }

  set value(value) {
    if (value < this._min || value > this._max) return;
    this._value = value;
  }

  increase(value) {
    if (value <= 0) return;
    const expectedValue = this._value + value;
    if (expectedValue > this._max) {
      this._value = this._max;
      return;
    }
    this._value = expectedValue;
  }

  decrease(value) {
    if (value <= 0) return;
    const expectedValue = this._value - value;
    if (expectedValue < this._min) {
      this._value = this._min;
      return;
    }
    this._value = expectedValue;
  }
}
