export class ValidationState {
  private _isValid: boolean;
  private _errors: string[];

  constructor(_isValid: boolean = false, _errors: string[] = []) {
    this._isValid = _isValid;
    this._errors = _errors;
  }

  get errors() {
    return this._errors;
  }

  get isValid() {
    return this._isValid;
  }

  hasErrors() {
    return this._errors.length > 0;
  }
}
