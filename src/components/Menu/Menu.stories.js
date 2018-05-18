import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import Menu from './index';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MenuItem from './MenuItem';
import Context, { globalStateIn, defaultLang } from '../../Context';
import Toggle from './Toggle';

const insideRouter = story => (
  <Router>
    <Route>{story()}</Route>
  </Router>
);

const Logo = () => <p>Logo</p>;
const Content = () => (
  <p>
    {Array(2000)
      .fill()
      .map((_, i) => `lorem ipsum ${i} `)
      .join(', ')}
  </p>
);
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
    <Menu
      logo={<Logo />}
      links={generateLinks(n)}
      icon={<Icon />}
      children={<Content />}
    />
  );
}

menu.add('Top only: few', () => menuWithNLinks(2));
menu.add('Top only: more', () => menuWithNLinks(6));
menu.add('Top only: many', () => menuWithNLinks(10));
menu.add('Top only: lots', () => menuWithNLinks(50));

class IntApp extends Component {
  constructor() {
    super();
    this.state = globalStateIn(defaultLang);
    this.onChangeLang = this.onChangeLang.bind(this);
  }

  onChangeLang(lang) {
    this.setState({ lang });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        <Context.Consumer>
          {globalState => (
            <Menu
              logo={<Logo />}
              links={globalState.content.menu.top.map((item, index) => (
                <MenuItem key={index} to={item.to}>
                  {item.text}
                </MenuItem>
              ))}
              icon={
                <Toggle
                  lang={globalState.lang}
                  onChangeLang={this.onChangeLang}
                />
              }
              children={<Content />}
            />
          )}
        </Context.Consumer>
      </Context.Provider>
    );
  }
}

menu.add('Translation', () => <IntApp />);
