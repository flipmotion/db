// import React from 'react';

// import { storiesOf } from '@storybook/react';
// import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';

// import * as content from '../modules/content';

// import styled, { injectGlobal } from 'styled-components';

// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import HomePage from '../components/HomePage';

// import { Menu, MenuItem } from '../components/Menu/Menu';

// import Burger from '../components/Menu/Burger';

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
