import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import OverflowDetector from './OverflowDetector';

const detector = storiesOf('Overflow detector', module);

const Content2 = styled.div`
  width: 700px;
  height: 40vh;
  background-color: ${props => (props.isOverflowed ? 'red' : 'blue')};
`;

const Content1 = styled.div`
  width: 500px;
  height: 30vh;
  background-color: ${props => (props.isOverflowed ? 'red' : 'green')};
`;

function Content(props) {
  return [
    <Content1 key={1} isOverflowed={props.isOverflowed} />,
    <Content2 key={2} isOverflowed={props.isOverflowed} />
  ];
}

class Square extends React.Component {
  render() {
    return (
      <React.Fragment>
        <OverflowDetector
          onOverflowChange={isOverflowed => this.setState({ isOverflowed })}
        >
          <Content />
        </OverflowDetector>
        <Content isOverflowed={this.state && this.state.isOverflowed} />
      </React.Fragment>
    );
  }
}

class NotNecessary100vw extends React.Component {
  render() {
    return (
      <div style={{ width: '80vw', border: '3px solid black' }}>
        <OverflowDetector
          onOverflowChange={isOverflowed => this.setState({ isOverflowed })}
        >
          <Content />
        </OverflowDetector>
        <Content isOverflowed={this.state && this.state.isOverflowed} />
      </div>
    );
  }
}

class WithDirectChildren extends React.Component {
  render() {
    return (
      <div style={{ width: '80vw', border: '3px solid black' }}>
        <OverflowDetector
          onOverflowChange={isOverflowed => this.setState({ isOverflowed })}
        >
          <Content1 key={1} isOverflowed={this.props.isOverflowed} />
          <Content2 key={2} isOverflowed={this.props.isOverflowed} />
        </OverflowDetector>
        <Content isOverflowed={this.state && this.state.isOverflowed} />
      </div>
    );
  }
}

detector
  .add('80vw container triggers right with content as direct children', () => (
    <WithDirectChildren />
  ))
  .add('80vw container triggers right with content as array', () => (
    <NotNecessary100vw />
  ))
  .add('Turns red on overflow', () => <Square />)
  .add("Doesn't break with noop fn and empty children", () => (
    <OverflowDetector onOverflowChange={() => {}} />
  ))
  .add('Handles nowrap text', () => {
    const String = () => (
      <p style={{ whiteSpace: 'nowrap' }}>
        {'check console output '.repeat(5)}
      </p>
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
