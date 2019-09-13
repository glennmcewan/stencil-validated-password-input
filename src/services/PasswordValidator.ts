import { ValidationState } from "../utils/ValidationState";

export class PasswordValidator {
  validate(value: string): ValidationState {
    let errors = this.getErrorsForValue(value);

    return new ValidationState(errors.length === 0, errors);
  }

  private getErrorsForValue(value: string) {
    let errors = [];

    if ('' === value) {
      errors.push('Password cannot be empty');
    }

    if (false === /[A-Z]+/.test(value)) {
      errors.push('Password must contain at least one uppercase letter');
    }

    if (false === /[0-9]+/.test(value)) {
      errors.push('Password must contain at least one number');
    }

    return errors;
  }
}
