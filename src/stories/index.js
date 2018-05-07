import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';

import * as content from '../modules/content';

import styled, { injectGlobal } from 'styled-components';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from '../components/HomePage';

injectGlobal`
  body {
    font-family: sans-serif;
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

// homePage.add('Text area', () => 1);

homePage.add('Content', () => <HomePage />);

// homePage.add('Content', () => (
//   <HomePage
//     animationStage={boolean('visible', true) ? 'entered' : 'exited'}
//     header={text('Header', content.welcomePage.header.ru)}
//     paragraphText={text('Paragraph text', content.welcomePage.paragraphText.ru)}
//     link={{
//       text: text('Link text', content.welcomePage.link.text.ru),
//       path: content.welcomePage.link.path
//     }}
//     image={content.homeImage}
//   />
// ));

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
//       header={text('Header', content.welcomePage.header.ru)}
//       paragraphText={text(
//         'Paragraph text',
//         content.welcomePage.paragraphText.ru
//       )}
//       link={{
//         text: text('Link text', content.welcomePage.link.text.ru),
//         path: content.welcomePage.link.path
//       }}
//     />
//   ))
//   .add('Another', () => <p>123</p>)
//   .add('One more', () => <p>one more page</p>);
