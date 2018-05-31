export function fadeInOut({ animationStage, animationDuration }) {
  return {
    transitionProperty: 'opacity',
    transitionDuration: `${animationDuration / 1000}s`,
    transitionTimingFunction: 'ease-in',
    // FIXME: when page is navigated directly, delay is a problem!
    transitionDelay:
      animationStage === 'entered'
        ? `${((animationDuration / 1000) * 2) / 3}s`
        : '0s',
    opacity: animationStage === 'entered' ? 1 : 0
  };
}

export function fadeFromLeft({ animationStage, animationDuration }) {
  if (animationStage === 'entered') {
    return {
      opacity: 1,
      transform: 'translateX(0px)',
      transition: `all ${animationDuration / 1000}s`
    };
  } else {
    return {
      opacity: 0,
      transform: 'translateX(-500px)',
      transition: `all ${animationDuration / 1000}s`
    };
  }
}

export function fadeFromBottom({ animationStage, animationDuration }) {
  if (animationStage === 'entered') {
    return {
      opacity: 1,
      transform: 'translateY(0px)',
      transition: `all ${animationDuration / 1000} ease-out 0.35s`
    };
  } else {
    return {
      opacity: 0,
      transform: 'translateY(500px)',
      transition: `all ${animationDuration / 1000} ease-out 0.35s`
    };
  }
}
