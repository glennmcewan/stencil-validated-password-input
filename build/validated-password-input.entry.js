import { r as registerInstance, h } from './core-3f239a40.js';

class ValidationState {
    constructor(_isValid = false, _errors = []) {
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

class PasswordValidator {
    validate(value) {
        let errors = this.getErrorsForValue(value);
        return new ValidationState(errors.length === 0, errors);
    }
    getErrorsForValue(value) {
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

const ValidatedPasswordInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.service = new PasswordValidator;
        this.name = 'name';
        this.placeholder = 'Enter your password';
        this.value = '';
    }
    async isValid() {
        this.state = this.service.validate(this.value);
        return this.state.isValid;
    }
    componentWillLoad() {
        this.state = new ValidationState();
    }
    handleKeyUp(event) {
        const input = event.target;
        this.value = input.value;
        this.isValid();
    }
    renderFeedbackFragment() {
        if (this.state.hasErrors()) {
            return h("ul", { class: "errors" }, this.state.errors.map(message => h("li", null, message)));
        }
    }
    render() {
        return (h("div", { class: this.state.hasErrors() ? 'has-errors' : '' }, h("label", { htmlFor: this.name }, "Password"), h("input", { type: "password", name: this.name, placeholder: this.placeholder, onKeyUp: (event) => this.handleKeyUp(event) }), this.renderFeedbackFragment()));
    }
    static get style() { return ":host {\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n  font-size: 16px;\n  line-height: 32px;\n  color: #333;\n}\n\nlabel {\n  padding: 0 15px;\n}\n\n.has-errors input {\n  border: 1px solid red;\n}\n\n.errors {\n  color: red;\n}"; }
};

export { ValidatedPasswordInput as validated_password_input };
