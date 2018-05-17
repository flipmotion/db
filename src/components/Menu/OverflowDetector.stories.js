import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import OverflowDetector from './OverflowDetector';

const detector = storiesOf('Overflow detector', module);

const Content = styled.div`
  width: 700px;
  height: 700px;
  background-color: ${props => (props.isOverflowed ? 'red' : 'blue')};
`;

class Square extends React.Component {
  render() {
    return (
      <React.Fragment>
        <OverflowDetector
          onOverflowChange={isOverflowed => this.setState({ isOverflowed })}
        >
          <Content />
        </OverflowDetector>,
        <Content isOverflowed={this.state && this.state.isOverflowed} />
      </React.Fragment>
    );
  }
}

detector
  .add('Turns red on overflow (on 500px)', () => <Square />)
  .add("Doesn't break with noop fn and empty children", () => (
    <OverflowDetector onOverflowChange={() => {}} />
  ))
  .add('Handles nowrap text', () => {
    const String = () => (
      <p style={{ whiteSpace: 'nowrap' }}>{'long string'.repeat(10)}</p>
    );

    return (
      <React.Fragment>
        <OverflowDetector
          onOverflowChange={status => {
            console.log(status);
          }}
        >
          <String />
        </OverflowDetector>
        <String />
      </React.Fragment>
    );
  });
