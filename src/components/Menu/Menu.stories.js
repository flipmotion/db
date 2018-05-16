import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, color } from '@storybook/addon-knobs/react';

import Menu from './Menu';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import MenuItem from './MenuItem';

const insideRouter = story => (
  <Router>
    <Route>{story()}</Route>
  </Router>
);

const Logo = () => <p>Logo</p>;
const Content = () => <p>{'lorem ipsum '.repeat(2000)}</p>;
const Icon = () => <p>Icon</p>;

const menu = storiesOf('Menu', module)
  .addDecorator(withKnobs)
  .addDecorator(insideRouter);

menu.add('Content only (no menu items)', () => (
  <Menu>
    <Content />
  </Menu>
));

function generateLinks(n) {
  return Array(n)
    .fill()
    .map((_, i) => (
      <MenuItem key={i + 1} to={`/top-link-${i + 1}`}>
        Top&nbsp;link&nbsp;{i + 1}
      </MenuItem>
    ));
}

function menuWithNLinks(n) {
  return (
    <Menu
      logo={<Logo />}
      content={<Content />}
      links={generateLinks(n)}
      icon={<Icon />}
    />
  );
}

menu.add('Top only: few', () => menuWithNLinks(2));
menu.add('Top only: more', () => menuWithNLinks(6));
menu.add('Top only: many', () => menuWithNLinks(10));
menu.add('Top only: lots', () => menuWithNLinks(50));
