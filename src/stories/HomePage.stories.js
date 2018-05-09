import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';

import * as content from '../modules/content';

import styled, { injectGlobal } from 'styled-components';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from '../components/HomePage';

import { Menu, MenuItem } from '../components/Menu/Menu';

import Burger from '../components/Menu/Burger';

injectGlobal`
  body {
    font-family: sans-serif;
    margin: 0;
  }
`;

const FullpageDiv = styled.div`
  display: flex;
  height: 100vh;
`;

const homePage = storiesOf('Home page', module);
homePage.addDecorator(withKnobs);

homePage.addDecorator(story => (
  <Router>
    <Route>
      <FullpageDiv>{story()}</FullpageDiv>
    </Route>
  </Router>
));

homePage.add('Content', () => (
  <HomePage
    animationStage={boolean('visible', true) ? 'entered' : 'exited'}
    header={text('Header', content.homePage.header.ru)}
    paragraphText={text('Paragraph text', content.homePage.paragraphText.ru)}
    linkText={text('Link text', content.homePage.link.text.ru)}
    linkPath={content.homePage.link.path}
    imageSrc={content.homePage.media[0].src}
    imageAlt={content.homePage.media[0].alt}
  />
));
