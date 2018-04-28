import React from 'react';

function style(animationStage) {
  if (animationStage === 'entered')
    return {
      opacity: 1,
      transition: 'opacity 1.5s 0.8s'
    };
  return {
    opacity: 0,
    transition: 'opacity 1s ease-out'
  };
}

export default ({ descriptions, current, animationStage }) => {
  const description = descriptions[current];
  return <div style={style(animationStage)}>{description}</div>;
};
