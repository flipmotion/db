import React from 'react';

export default props => {
  return (
    <p>
      AnimationName:{' '}
      {props.history.location.state &&
        props.history.location.state.animationName}
      <br />
      AnimationStage: {props.animationStage}
    </p>
  );
};
