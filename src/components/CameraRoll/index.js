import React from 'react';
import './index.css';

const CameraRoll = props => {
  const itemHeight = 40;
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

export default CameraRoll;
