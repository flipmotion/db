import React from 'react';
import './index.css';

export default props => {
  const itemHeight = 100;
  return (
    <div className="CameraRoll">
      {props.images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={'portfolio #' + index}
          className="CameraRoll-Image"
          style={{ height: `${itemHeight}%` }}
        />
      ))}
    </div>
  );
};
