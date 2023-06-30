export default class Airport {
  constructor(name, code) {
    this._name = typeof name === 'string' ? name : '';
    this._code = typeof code === 'string' ? code : '';
  }

  get name() {
    return this._name;
  }

  toString() {
    return this._code;
  }
}