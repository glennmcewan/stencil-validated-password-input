import { newE2EPage } from '@stencil/core/testing';

describe('validated-password-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<validated-password-input></validated-password-input>');
    const element = await page.find('validated-password-input');
    expect(element).toHaveClass('hydrated');
  });

  it('shows applies the placeholder attribute', async () => {
    const page = await newE2EPage();
    await page.setContent('<validated-password-input placeholder="Your password"></validated-password-input>');

    const element = await page.find('validated-password-input');

    expect(element.getAttribute('placeholder')).toEqual('Your password');
  });

  it('shows applies the name attribute', async () => {
    const page = await newE2EPage();
    await page.setContent('<validated-password-input name="very-unique-password" placeholder="Your password"></validated-password-input>');

    const element = await page.find('validated-password-input');

    expect(element.getAttribute('name')).toEqual('very-unique-password');
  });

  it('shows no errors on load', async () => {
    const page = await newE2EPage();
    await page.setContent('<validated-password-input></validated-password-input>');

    const element = await page.find('validated-password-input >>> .errors');

    expect(element).toBeNull();
  });

  it('shows errors for empty password', async () => {
    const page = await newE2EPage();
    await page.setContent('<validated-password-input></validated-password-input>');

    let input = await page.find('validated-password-input >>> input');

    const inputString = 'Waffle';

    await input.type(inputString);

    expect(await input.getProperty('value')).toEqual('Waffle');

    for (let i = 0; i < inputString.length; i++) {
      await page.keyboard.press('Backspace');
    }

    expect(await input.getProperty('value')).toEqual('');

    await page.waitForChanges();

    const errors = await page.findAll('validated-password-input >>> .errors li');

    expect(errors.length).toEqual(3);
    expect(errors.shift().innerText).toEqual('Password cannot be empty');
    expect(errors.shift().innerText).toEqual('Password must contain at least one uppercase letter');
    expect(errors.shift().innerText).toEqual('Password must contain at least one number');
  });

  it('shows zero errors for valid password', async () => {
    const page = await newE2EPage();
    await page.setContent('<validated-password-input></validated-password-input>');

    let input = await page.find('validated-password-input >>> input');

    await input.type('Waffle1');

    expect(await input.getProperty('value')).toEqual('Waffle1');

    await page.waitForChanges();

    const errors = await page.findAll('validated-password-input >>> .errors');

    expect(errors.length).toEqual(0);
  });
});
