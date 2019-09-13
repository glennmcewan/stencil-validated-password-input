import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-3f239a40.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy([["validated-password-input",[[1,"validated-password-input",{"name":[1],"placeholder":[1],"value":[32],"state":[32],"isValid":[64]}]]]], options);
});
