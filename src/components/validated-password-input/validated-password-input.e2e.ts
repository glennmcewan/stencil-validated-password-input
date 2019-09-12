import { newE2EPage } from '@stencil/core/testing';

describe('validated-password-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<validated-password-input></validated-password-input>');
    const element = await page.find('validated-password-input');
    expect(element).toHaveClass('hydrated');
  });
});
