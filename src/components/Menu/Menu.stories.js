import React from 'react';
import { injectGlobal } from 'styled-components';

import { storiesOf } from '@storybook/react';
// import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';

import Menu from './Menu';

import { BrowserRouter as Router, Route } from 'react-router-dom';

// import MenuItem from './MenuItem';
// import Menu from './Menu';

// import content from '../../content'

injectGlobal`
  body {
    font-family: sans-serif;
    margin: 0;
  }
`;

const insideRouter = story => (
  <Router>
    <Route>{story()}</Route>
  </Router>
);

const menu = storiesOf('Menu', module);
// menu
// .addDecorator(withKnobs)
// .addDecorator(insideRouter);

const content = <p>{'lorem ipsum '.repeat(2000)}</p>;

const phones = ['+1 555 150 92 23', '+7 495 871 12 34'];

// const topLinks = Array(5)
//   .fill()
//   .map((_, i) => <MenuItem to={`top-link-${i}`}>Top link {i}</MenuItem>);

// const bottomLinks = Array(3)
//   .fill()
//   .map((_, i) => <MenuItem to={`bottom-link-${i}`}>Bottom link {i}</MenuItem>);

// menu.add('Basic menu', () => <Menu topLinks={topLinks} content={content} />);

menu.add('Basic menu', () => <Menu content={content}>smoke test</Menu>);

// menu.add('Burger', () => <Burger isOpen={boolean('Is open', false)} />);
// menu.add('Test', () => <Test  />);
