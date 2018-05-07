import React from 'react';

function styleFor(animationStage, location) {
  const animationType = location.state && location.state.animationType;

  switch (animationType) {
    // animation to portfolio item and from portfolio item
    case 'portfolioItem':
      switch (animationStage) {
        case 'entered':
          return {
            opacity: 1,
            transition: 'opacity 1.5s 0.8s'
          };
        default:
          return {
            opacity: 1,
            transition: 'opacity 0.5s ease-out'
          };
      }
    // default animation
    default:
      switch (animationStage) {
        case 'entered':
          return {
            opacity: 1,
            transition: 'opacity 1.5s 0.8s'
          };
        default:
          return {
            opacity: 0,
            transition: 'opacity 0.5s ease-out'
          };
      }
  }
}

export default ({ descriptions, current, animationStage, location }) => {
  const description = descriptions[current];
  return <div style={styleFor(animationStage, location)}>{description}</div>;
};
