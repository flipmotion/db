import React from 'react';

const ScrollableMedia = ({ portfolioItem, history, animationStage }) => {
  // not sure I need it here, but just not to forget how it works
  function animationName() {
    return history.location.state && history.location.state.animationName;
  }

  return (
    <p>
      AnimationName:{animationName()}
      {}
      <br />
      AnimationStage: {animationStage}
      <br />
      portfolioItem: {JSON.stringify(portfolioItem)}
    </p>
  );
};

export default ScrollableMedia;
