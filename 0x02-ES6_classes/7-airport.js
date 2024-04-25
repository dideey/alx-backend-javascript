export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  tostring() {
    return `[object ${this._code}]`;
  }
}
