import React from 'react';
import styled from 'styled-components';

// The Roll component is intentionally supposed to be overflowed
const Roll = styled.div`
  flex-direction: column;
  /* margin-top: 100%; */
  height: 100%;
  /* transform: translateY(see index.js); */
  transition: transform 1s, opacity 1s;
`;

const Image = styled.img`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  width: 100%;
  /* height: see index.js; */
  object-fit: cover;
  cursor: pointer;
`;

const CameraRoll = ({
  current,
  animationStage,
  images,
  titles,
  NavigateTo
}) => {
  const itemHeight = 66;
  const offsetToCenter = (100 - itemHeight) / 2;
  const animationOffset = animationStage === 'entered' ? 0 : 100;
  const offset = offsetToCenter - itemHeight * current + animationOffset;

  return (
    <Roll style={{ transform: `translateY(${offset}%)` }}>
      {images.map((image, index) => (
        <Image
          src={image}
          alt={titles[index]}
          style={{ height: `${itemHeight}%` }}
          onDragStart={e => {
            e.preventDefault();
          }}
          onClick={() => NavigateTo(index)}
        />
      ))}
    </Roll>
  );
};

export default CameraRoll;
