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

menu.add('Top only: few', () => (
  <Menu
    content={content}
    color={color('Link color', '')}
    hoverColor={color('Hover link color', '')}
    activeColor={color('Active link color', '')}
    backgroundColor={color('Background color', '')}
    topLinks={Array(2)
      .fill()
      .map((_, i) => (
        <MenuItem key={i} to={`/top-link-${i}`}>
          Top&nbsp;link&nbsp;{i}
        </MenuItem>
      ))}
  />
));

menu.add('Top only: more', () => (
  <Menu
    content={content}
    topLinks={Array(6)
      .fill()
      .map((_, i) => (
        <MenuItem key={i} to={`/top-link-${i}`}>
          Top&nbsp;link&nbsp;{i}
        </MenuItem>
      ))}
  />
));

menu.add('Top only: many', () => (
  <Menu
    content={content}
    topLinks={Array(10)
      .fill()
      .map((_, i) => (
        <MenuItem key={i} to={`/top-link-${i}`}>
          Top&nbsp;link&nbsp;{i}
        </MenuItem>
      ))}
  />
));

menu.add('Top only: lots', () => (
  <Menu
    content={content}
    topLinks={Array(100)
      .fill()
      .map((_, i) => (
        <MenuItem key={i} to={`/top-link-${i}`}>
          Top&nbsp;link&nbsp;{i}
        </MenuItem>
      ))}
  />
));

// menu.add('Test', () => <Test  />);
