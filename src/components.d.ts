/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface ValidatedPasswordInput {
    'isValid': () => Promise<boolean>;
    'name': string;
    'placeholder': string;
  }
}

declare global {


  interface HTMLValidatedPasswordInputElement extends Components.ValidatedPasswordInput, HTMLStencilElement {}
  var HTMLValidatedPasswordInputElement: {
    prototype: HTMLValidatedPasswordInputElement;
    new (): HTMLValidatedPasswordInputElement;
  };
  interface HTMLElementTagNameMap {
    'validated-password-input': HTMLValidatedPasswordInputElement;
  }
}

declare namespace LocalJSX {
  interface ValidatedPasswordInput extends JSXBase.HTMLAttributes<HTMLValidatedPasswordInputElement> {
    'name'?: string;
    'placeholder'?: string;
  }

  interface IntrinsicElements {
    'validated-password-input': ValidatedPasswordInput;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}

