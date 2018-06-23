import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs/react';
import PortfolioPage from './PortfolioPage';
import Div100vh from 'react-div-100vh';

const portfolio = storiesOf('Portfolio', module).addDecorator(withKnobs);

function inFullHeightDiv(story) {
  return <Div100vh>{story()}</Div100vh>;
}

portfolio.addDecorator(inFullHeightDiv);

const label = 'Animation stages';

const transitionStages = {
  entering: 'entering',
  entered: 'entered',
  exiting: 'exiting',
  exited: 'exited'
};

const defaultStage = 'entered';
const groupId = 'GROUP-ID1';

portfolio.add('PortfolioPage', () => (
  <PortfolioPage
    transitionStage={select(label, transitionStages, defaultStage, groupId)}
  />
));
