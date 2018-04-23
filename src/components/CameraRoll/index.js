import React from 'react';
import './index.css';

const CameraRoll = props => {
  const itemHeight = 40;
  const offsetToCenter = (100 - itemHeight) / 2;
  const offset = offsetToCenter - itemHeight * props.current;
  return (
    <div className="CameraRoll" style={{ transform: `translateY(${offset}%)` }}>
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
