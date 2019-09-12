import { ValidationState } from "../utils/ValidationState";

export class PasswordValidator {
  validate(value: string): ValidationState {
    let isValid = '' !== value;

    return new ValidationState(isValid, []);
  }
}
