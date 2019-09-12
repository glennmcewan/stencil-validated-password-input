export class ValidationState {
  private _isValid: boolean;
  private _errors: [];

  constructor(_isValid: boolean, _errors?: []) {
    this._isValid = _isValid;
    this._errors = _errors;
  }

  get errors() {
    if (typeof this._errors === 'undefined') {
      return this.getDefaultErrors();
    }

    return this._errors;
  }

  get isValid() {
    return this._isValid;
  }

  private getDefaultErrors() {
    return [
      'Error 1',
      'Error 2',
    ];
  }
}
