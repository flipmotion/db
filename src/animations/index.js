import React from 'react';

export function fadeInOut({ animationStage, transitionDuration }) {
  return {
    transitionProperty: 'opacity',
    transitionDuration: `${transitionDuration / 1000}s`,
    transitionTimingFunction: 'ease-in',
    // FIXME: when page is navigated directly, delay is a problem!
    transitionDelay:
      animationStage === 'entered'
        ? `${((transitionDuration / 1000) * 2) / 3}s`
        : '0s',
    opacity: animationStage === 'entered' ? 1 : 0
  };
}

export function fadeFromLeft({ animationStage, transitionDuration }) {
  if (animationStage === 'entered') {
    return {
      opacity: 1,
      transform: 'translateX(0px)',
      transition: `all ${transitionDuration / 1000}s`
    };
  } else {
    return {
      opacity: 0,
      transform: 'translateX(-500px)',
      transition: `all ${transitionDuration / 1000}s`
    };
  }
}

export function fadeFromRight({
  animationStage,
  transitionDuration,
  delayIn = 0,
  delayOut = 0
}) {
  const entered = animationStage === 'entered';
  const exiting = animationStage === 'exiting';

  return {
    opacity: entered ? 1 : 0,
    transform: `translateX(${entered ? 0 : 500}px)`,
    transitionProperty: 'all',
    transitionDuration: `${transitionDuration / 1000}s`,
    transitionDelay: `${
      entered ? delayIn / 1000 : exiting ? delayOut / 1000 : 0
    }s`
  };
}

export function fadeFromBottom({ animationStage, transitionDuration }) {
  if (animationStage === 'entered') {
    return {
      opacity: 1,
      transform: 'translateY(0px)',
      transition: `all ${transitionDuration / 1000} ease-out 0.35s`
    };
  } else {
    return {
      opacity: 0,
      transform: 'translateY(500px)',
      transition: `all ${transitionDuration / 1000} ease-out 0.35s`
    };
  }
}

// Kinda HOC. Or just a fn?
function animated(Component, animationEffectFn) {
  return function({
    animationStage,
    transitionDuration,
    delayIn,
    delayOut,
    style,
    ...otherProps
  }) {
    const mergedStyle = {
      ...style,
      ...animationEffectFn({ animationStage, transitionDuration, delayIn })
    };
    return <Component style={mergedStyle} {...otherProps} />;
  };
}

export default animated;
