import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, color } from '@storybook/addon-knobs/react';

import Menu from './Menu';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import MenuItem from './MenuItem';
// import Menu from './Menu';

// import content from '../../content'

const insideRouter = story => (
  <Router>
    <Route>{story()}</Route>
  </Router>
);

const menu = storiesOf('Menu', module)
  .addDecorator(withKnobs)
  .addDecorator(insideRouter);

const content = <p>{'lorem ipsum '.repeat(2000)}</p>;

const phones = ['+1 555 150 92 23', '+7 495 871 12 34'];

menu.add('Content only (no menu items)', () => <Menu content={content} />);

menu.add('Top menu only', () => (
  <Menu
    color={color('Link color', 'grey')}
    hoverColor={color('Hover link color', 'lightgrey')}
    activeColor={color('Active link color', 'black')}
    backgroundColor={color('Background color', 'rgba(200,200,200,0.5)')}
    topLinks={Array(3)
      .fill()
      .map((_, i) => (
        <MenuItem key={i} to={`/top-link-${i}`}>
          Top&nbsp;link&nbsp;{i}
        </MenuItem>
      ))}
  />
));

menu.add('Lots of items', () => (
  <Menu
    topLinks={Array(10)
      .fill()
      .map((_, i) => (
        <MenuItem key={i} to={`/top-link-${i}`}>
          Top&nbsp;link&nbsp;{i}
        </MenuItem>
      ))}
  />
));

// menu.add('Burger', () => <Burger isOpen={boolean('Is open', false)} />);
// menu.add('Test', () => <Test  />);
