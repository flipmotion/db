export function fadeFromLeft(animationStage, animationDuration) {
  if (animationStage === 'entered') {
    return {
      opacity: 1,
      transform: 'translateX(0px)',
      transition: `all ${animationDuration}`
    };
  } else {
    return {
      opacity: 0,
      transform: 'translateX(-500px)',
      transition: `all ${animationDuration}`
    };
  }
}

export function fadeFromBottom(animationStage, animationDuration) {
  if (animationStage === 'entered') {
    return {
      opacity: 1,
      transform: 'translateY(0px)',
      transition: `all ${animationDuration} ease-out 0.35s`
    };
  } else {
    return {
      opacity: 0,
      transform: 'translateY(500px)',
      transition: `all ${animationDuration} ease-out 0.35s`
    };
  }
}
