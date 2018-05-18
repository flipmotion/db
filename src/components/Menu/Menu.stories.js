import React from 'react';
import { storiesOf } from '@storybook/react';
import Menu from './index';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MenuItem from './MenuItem';
import contentIn from '../../content';
import IntApp from '../IntApp';

const insideRouter = story => (
  <Router>
    <Route>{story()}</Route>
  </Router>
);

const Content = props => {
  const str = props.lang === 'ru' ? 'Привет Медвед ' : 'lorem ipsum ';
  return (
    <p>
      {Array(2000)
        .fill()
        .map((_, i) => `${str}${i} `)
        .join(', ')}
    </p>
  );
};
const Icon = () => <p>Icon</p>;

const menu = storiesOf('Menu', module).addDecorator(insideRouter);

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
    <Menu links={generateLinks(n)} icon={<Icon />} children={<Content />} />
  );
}

menu.add('Top only: few', () => menuWithNLinks(2));
menu.add('Top only: more', () => menuWithNLinks(6));
menu.add('Top only: many', () => menuWithNLinks(10));
menu.add('Top only: lots', () => menuWithNLinks(50));

menu.add('Translation', () => (
  <IntApp
    render={(lang, toggleLang) => (
      <Menu
        toggleLang={toggleLang}
        links={contentIn(lang).menu.top}
        children={<Content lang={lang} />}
      />
    )}
  />
));
