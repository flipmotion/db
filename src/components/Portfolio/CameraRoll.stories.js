import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import CameraRoll from './CameraRoll';
import contentIn from '../../content';
import { withKnobs, number } from '@storybook/addon-knobs/react';

const images = contentIn('ru').portfolio.map(p =>
  Object.assign({}, p.illustration, { description: p.description })
);
console.dir(images);
const roll = storiesOf('CameraRoll', module).addDecorator(withKnobs);

roll.add("empty roll won't throw errors", () => <CameraRoll />);

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
      <div style={{ height: '100vh' }}>
        <CameraRoll
          current={this.state.current}
          setCurrent={this.setCurrent}
          images={images}
        />
      </div>
    );
  }
}

roll.add('Actual images', () => (
  <CameraRollContainer images={images} current={number('Current slide', 1)} />
));
