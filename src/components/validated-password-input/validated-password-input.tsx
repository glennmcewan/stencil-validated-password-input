import { Component, Prop, h, State, Method } from '@stencil/core';
import { PasswordValidator } from '../../services/PasswordValidator';
import { ValidationState } from '../../utils/ValidationState';

@Component({
  tag: 'validated-password-input',
  styleUrl: 'validated-password-input.scss',
  shadow: true
})
export class ValidatedPasswordInput {
  private service: PasswordValidator = new PasswordValidator;

  @Prop() name: string = 'name';
  @Prop() placeholder: string = 'Enter your password';

  @State() value: string = '';
  @State() state: ValidationState;

  @Method()
  async isValid() {
    this.state = this.service.validate(this.value);
    return this.state.isValid;
  }

  componentWillLoad() {
    this.state = new ValidationState();
  }

  private handleKeyUp(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;

    this.isValid();
  }

  private renderFeedbackFragment() {
    if (this.state.hasErrors()) {
      return <ul class="errors">{this.state.errors.map(message => <li>{message}</li>)}</ul>;
    }
  }

  render() {
    return (
      <div class={this.state.hasErrors() ? 'has-errors' : ''}>
        <label htmlFor={this.name}>Password</label>
        <input
          type="password"
          name={this.name}
          placeholder={this.placeholder}
          onKeyUp={(event: KeyboardEvent) => this.handleKeyUp(event)}
        />
        {this.renderFeedbackFragment()}
      </div>
    );
  }
}
