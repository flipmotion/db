import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';

import * as content from '../modules/content';

import styled, { injectGlobal } from 'styled-components';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Menu, MenuItem } from '../components/Menu/Menu';

import Burger from '../components/Menu/Burger';

injectGlobal`
  body {
    font-family: sans-serif;
    margin: 0;
  }
`;

const menu = storiesOf('Menu', module);
menu.addDecorator(withKnobs);

menu.addDecorator(story => (
  <Router>
    <Route>
      <div style={{ backgroundColor: 'lightgrey' }}>{story()}</div>
    </Route>
  </Router>
));

menu.add('Menu', () => (
  <Menu mobile={boolean('Mobile version', false)}>
    <MenuItem to="/page1">Page 1</MenuItem>
    <MenuItem to="/page2">Page 2</MenuItem>
    <MenuItem to="/page3">Page 3</MenuItem>
    <MenuItem to="/page4">Page 4</MenuItem>
  </Menu>
));

menu.add('Burger', () => <Burger isOpen={boolean('Is open', false)} />);
