import { configure } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes';

const req = require.context('../src/components', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

addDecorator(withNotes);
configure(loadStories, module);