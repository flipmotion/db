import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import CameraRoll from './CameraRoll';
import contentIn from '../../content';

const images = contentIn('ru').portfolio.map(p => p.illustration);

const roll = storiesOf('CameraRoll', module);

roll.add("empty roll won't throw errors", () => <CameraRoll />);

class CameraRollContainer extends Component {
  constructor() {
    super();
    this.state = { current: 0 };
    this.setCurrent = this.setCurrent.bind(this);
  }

  setCurrent(current) {
    console.log('now current is', current);
    this.setState({ current: current });
  }

  render() {
    return (
      <div style={{ height: '100vh' }}>
        <CameraRoll
          current={this.state.current}
          setCurrent={this.setCurrent}
          {...this.props}
        />
      </div>
    );
  }
}

roll.add('Actual images', () => <CameraRollContainer images={images} />);
