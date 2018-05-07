import React from 'react';

const ScrollableMedia = ({ portfolioItem, history, animationStage }) => {
  // not sure I need it here, but just not to forget how it works
  function animationType() {
    return history.location.state && history.location.state.animationType;
  }

  return (
    <p>
      animationType:{animationType()}
      {}
      <br />
      AnimationStage: {animationStage}
      <br />
      portfolioItem: {JSON.stringify(portfolioItem)}
    </p>
  );
};

export default ScrollableMedia;
