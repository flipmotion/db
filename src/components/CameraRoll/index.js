import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const CameraRoll = props => {
  const itemHeight = 40;
  const offsetToCenter = (100 - itemHeight) / 2;
  const offset = offsetToCenter - itemHeight * props.current;
  return (
    <div className="CameraRoll" style={{ transform: `translateY(${offset}%)` }}>
      {props.images.map((image, index) => (
        <Link key={index} to={`/portfolio#${index + 1}`}>
          <img
            src={image}
            alt={'portfolio #' + index}
            className="CameraRoll-Image"
            style={{ height: `${itemHeight}%` }}
            onDragStart={e => {
              e.preventDefault();
            }}
          />
        </Link>
      ))}
    </div>
  );
};

export default CameraRoll;
