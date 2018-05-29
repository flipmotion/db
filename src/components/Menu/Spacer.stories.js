import React from 'react';
import { storiesOf } from '@storybook/react';
import Spacer from './Spacer';
import Div100vh from 'react-div-100vh';
import { injectGlobal } from 'styled-components';

injectGlobal`
  body {margin: 0}
`;

function randomColor() {
  return '#' + (((1 << 24) * Math.random()) | 0).toString(16);
}

function randomDimension() {
  return Math.random() * 300 + 10 + 'px';
}

const spacer = storiesOf('Spacer', module);

function inFullWidth(story) {
  return (
    <Div100vh style={{ height: '100vh', background: 'orange' }}>
      {story()}
    </Div100vh>
  );
}

spacer
  .addDecorator(inFullWidth)
  .add('should not blow up without children', () => <Spacer />)
  .add('single child', () => (
    <Spacer>
      <div style={{ height: '100px', width: '100px', background: 'blue' }} />
    </Spacer>
  ))
  .add('two SQUARE chidren horizontally: BROKEN', () => (
    <Spacer horizontal={true}>
      <div style={{ height: '100px', width: '100px', background: 'blue' }} />
      <div style={{ height: '100px', width: '100px', background: 'red' }} />
    </Spacer>
  ))
  .add('3 children', () => (
    <Spacer>
      <div style={{ height: '100px', width: '100px', background: 'blue' }} />
      <div style={{ height: '100px', width: '100px', background: 'green' }} />
      <div style={{ height: '100px', width: '100px', background: 'red' }} />
    </Spacer>
  ))
  .add('lots of children vertical', () => (
    <Spacer>
      {Array(30)
        .fill()
        .map((_, i) => randomColor())
        .map(color => (
          <div
            key={color}
            style={{
              height: randomDimension(),
              width: randomDimension(),
              background: color,
              border: '1px solid black'
            }}
          />
        ))}
    </Spacer>
  ));
