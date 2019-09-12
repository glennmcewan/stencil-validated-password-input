import { Component, Prop, h, State, Method } from '@stencil/core';
import { PasswordValidator } from '../../services/PasswordValidator';
import { ValidationState } from '../../utils/ValidationState';

@Component({
  tag: 'validated-password-input',
  styleUrl: 'validated-password-input.css',
  shadow: true
})
export class ValidatedPasswordInput {
  private service: PasswordValidator = new PasswordValidator;

  @Prop() name: string = 'name';

  @State() value: string = '';
  @State() state: ValidationState;

  @Method()
  async isValid() {
    this.state = this.service.validate(this.value);
    return this.state.isValid;
  }

  componentWillLoad() {
    this.state = new ValidationState(false);
  }

  private handleKeyUp(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;

    this.isValid().then(value => console.log(value));
  }

  render() {
    return (
      <div>
        <label htmlFor={this.name}>Password</label>
        <input type="password" name={this.name} onKeyUp={(event: KeyboardEvent) => this.handleKeyUp(event)} />
        {
          !this.state.isValid
            ? <ul>{this.state.errors.map(message => <li>{message}</li>)}</ul>
            : ''
        }
      </div>
    );
  }
}
