import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import styled from 'styled-components';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import WelcomePage from '../components/WelcomePage';

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

const Div = styled.div`
  display: flex;
`;

storiesOf('Welcome page', module)
  .addDecorator(story => (
    <Router>
      <Route>
        <Div>{story()}</Div>
      </Route>
    </Router>
  ))
  .add('come on!', () => <WelcomePage animationStage="entered" />);
