import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import CameraRoll from './CameraRoll';
import PortfolioList from './PortfolioList';
import contentIn from '../../content';
import { withKnobs, number, select } from '@storybook/addon-knobs/react';
import PortfolioPage from './PortfolioPage';

const images = contentIn('ru').portfolio.map(p =>
  Object.assign({}, p.illustration, { description: p.description })
);
const portfolio = storiesOf('Portfolio', module).addDecorator(withKnobs);

function inFullHeightDiv(story) {
  return <div style={{ height: '100vh' }}>{story()}</div>;
}

portfolio.addDecorator(inFullHeightDiv);

portfolio.add("CameraRoll: empty roll won't throw errors", () => (
  <CameraRoll />
));

class CameraRollContainer extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    return { current: nextProps.current };
  }

  constructor(props) {
    super(props);
    this.state = { current: props.current };
    this.setCurrent = this.setCurrent.bind(this);
  }

  setCurrent(current) {
    this.setState({ current: current });
  }

  render() {
    return (
      <CameraRoll
        current={this.state.current}
        setCurrent={this.setCurrent}
        images={images}
      />
    );
  }
}

portfolio.add('CameraRoll: actual images', () => (
  <CameraRollContainer images={images} current={number('Current slide', 1)} />
));

const titles = contentIn('ru').portfolio.map(p => p.title);

class PortfolioListContainer extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    return { current: nextProps.current };
  }

  constructor(props) {
    super(props);
    this.state = { current: props.current };
    this.setCurrent = this.setCurrent.bind(this);
  }

  setCurrent(current) {
    this.setState({ current: current });
  }

  render() {
    return (
      <PortfolioList
        current={this.state.current}
        setCurrent={this.setCurrent}
        titles={titles}
      />
    );
  }
}

portfolio.add('PortfolioList: list of titles', () => (
  <PortfolioListContainer
    titles={titles}
    current={number('Current slide', 1)}
  />
));

const label = 'Animation stages';

const animationStages = {
  entering: 'entering',
  entered: 'entered',
  exiting: 'exiting',
  exited: 'exited'
};

const defaultStage = 'entered';
const groupId = 'GROUP-ID1';

portfolio.add('Portfolio: all together', () => (
  <PortfolioPage
    portfolio={contentIn('ru').portfolio}
    animationStage={select(label, animationStages, defaultStage, groupId)}
  />
));
