import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';

import * as content from '../modules/content';

import styled, { injectGlobal } from 'styled-components';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from '../components/HomePage';

import { BurgerMenu, MenuItem } from '../components/Menu/Menu';

import Burger from '../components/Menu/Burger';

import Test from '../components/Menu';

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

// Home Page

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

const menu = storiesOf('Menu', module);
menu.addDecorator(withKnobs).addDecorator(story => (
  <Router>
    <Route>
      <div style={{ backgroundColor: 'lightgrey' }}>{story()}</div>
    </Route>
  </Router>
));

menu.add('Menu', () => (
  <BurgerMenu mobile={boolean('Mobile version', false)}>
    <MenuItem to="/page1">Page 1</MenuItem>
    <MenuItem to="/page2">Page 2</MenuItem>
    <MenuItem to="/page3">Page 3</MenuItem>
    <MenuItem to="/page4">Page 4</MenuItem>
  </BurgerMenu>
));

menu.add('Burger', () => <Burger isOpen={boolean('Is open', false)} />);
menu.add('Test', () => <Test />);

// const portfolioPage = storiesOf('Portfolio', module);
// portfolioPage.addDecorator(withKnobs);

// portfolioPage.addDecorator(story => (
//   <Router>
//     <Route>
//       <FullpageDiv>{story()}</FullpageDiv>
//     </Route>
//   </Router>
// ));

// portfolioPage
//   .add('Page', () => (
//     <WelcomePage
//       animationStage={boolean('visible', true) ? 'entered' : 'exited'}
//       header={text('Header', content.homePage.header.ru)}
//       paragraphText={text(
//         'Paragraph text',
//         content.homePage.paragraphText.ru
//       )}
//       link={{
//         text: text('Link text', content.homePage.link.text.ru),
//         path: content.homePage.link.path
//       }}
//     />
//   ))
//   .add('Another', () => <p>123</p>)
//   .add('One more', () => <p>one more page</p>);
