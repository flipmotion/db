import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'styled-components';

export function fadeInOut({ transitionStage, transitionDuration }) {
  return {
    transitionProperty: 'opacity',
    transitionDuration: `${transitionDuration / 1000}s`,
    transitionTimingFunction: 'ease-in',
    // FIXME: when page is navigated directly, delay is a problem!
    transitionDelay:
      transitionStage === 'entered'
        ? `${((transitionDuration / 1000) * 2) / 3}s`
        : '0s',
    opacity: transitionStage === 'entered' ? 1 : 0
  };
}

export function almostIn({
  transitionStage,
  transitionDuration,
  delayIn = 0,
  delayOut = 0
}) {
  const entered = transitionStage === 'entered';
  return css`
    opacity: ${entered ? 0.95 : 0};
    transition-property: opacity;
    transition-duration: ${transitionDuration / 1000}s;
    transition-delay: ${entered ? delayIn / 1000 : delayOut / 1000}s;
  `;
}

export function fadeFromLeft({ transitionStage, transitionDuration }) {
  if (transitionStage === 'entered') {
    return {
      opacity: 1,
      transform: 'translateX(0px)',
      transitionProperty: 'transform, opacity',
      transitionDuration: `${transitionDuration / 1000}s`
    };
  } else {
    return {
      opacity: 0,
      transform: 'translateX(-500px)',
      transitionProperty: 'transform, opacity',
      transitionDuration: `${transitionDuration / 1000}s`
    };
  }
}

export function fadeFromRight({
  transitionStage,
  transitionDuration,
  delayIn = 0,
  delayOut = 0
}) {
  const entered = transitionStage === 'entered';

  return css`
    opacity: ${entered ? 1 : 0};
    transform: translateX(${entered ? 0 : 500}px);
    transition-property: transform, opacity;
    transition-duration: ${transitionDuration / 1000}s;
    transition-delay: ${entered ? delayIn / 1000 : delayOut / 1000}s;
  `;
}

export function fadeFromBottom({
  transitionStage,
  transitionDuration,
  delayIn = 0,
  delayOut = 0
}) {
  const entered = transitionStage === 'entered';
  const exiting = transitionStage === 'exiting';

  return {
    // opacity: entered ? 1 : 0,
    animationTimingFunction: 'ease-out',
    transform: `translateY(${entered ? '0px' : '100vh'})`,
    transitionProperty: 'all',
    transitionDuration: `${transitionDuration / 1000}s`,
    transitionDelay: `${
      entered ? delayIn / 1000 : exiting ? delayOut / 1000 : 0
    }s`
  };
}

export function noTween({ transitionStage, transitionDuration }) {
  return transitionStage === 'entered' ? { opacity: 1 } : { opacity: 0 };
}

// Here comes the HOC
//
// Component then must use style prop (apply it to root component
// or some inner component) to make it work
function animated(Component, animationEffectFn) {
  function AnimatedComponent({
    transitionStage,
    transitionDuration,
    delayIn,
    delayOut,
    style,
    ...otherProps
  }) {
    const mergedStyle = {
      ...style,
      ...animationEffectFn({ transitionStage, transitionDuration, delayIn })
    };
    return <Component style={mergedStyle} {...otherProps} />;
  }

  AnimatedComponent.propTypes = {
    transitionStage: PropTypes.oneOf([
      'entering',
      'entered',
      'exiting',
      'exited'
    ]).isRequired,
    transitionDuration: PropTypes.number.isRequired,
    delayIn: PropTypes.number,
    delayOut: PropTypes.number
  };

  return AnimatedComponent;
}

export default animated;
