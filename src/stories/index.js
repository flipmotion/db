import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';

import * as content from '../modules/content';

import styled from 'styled-components';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import WelcomePage from '../components/WelcomePage';

const Div = styled.div`
  display: flex;
`;

const stories = storiesOf('DB company website', module);
stories.addDecorator(withKnobs);

stories.addDecorator(story => (
  <Router>
    <Route>
      <Div>{story()}</Div>
    </Route>
  </Router>
));

stories.add('Page', () => (
  <WelcomePage
    animationStage={boolean('visible', true) ? 'entered' : 'exited'}
    header={text('Header', content.welcomePage.header.ru)}
    paragraphText={text('Paragraph text', content.welcomePage.paragraphText.ru)}
    link={{
      text: text('Link text', content.welcomePage.link.text.ru),
      path: content.welcomePage.link.path
    }}
  />
));
