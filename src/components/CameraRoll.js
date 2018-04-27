import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Roll = styled.div`
  flex-direction: column;
  /* margin-top: 100%; */
  height: 100%;
  /* transform: translateY(see index.js); */
  transition: transform 1s ease 0s;
`;

const Image = styled.img`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  width: 100%;
  /* height: see index.js; */
  object-fit: cover;
`;

const CameraRoll = props => {
  const itemHeight = 40;
  const offsetToCenter = (100 - itemHeight) / 2;
  const offset = offsetToCenter - itemHeight * props.current;
  return (
    <Roll style={{ transform: `translateY(${offset}%)` }}>
      {props.images.map((image, index) => (
        <Link key={index} to={`/portfolio#${index + 1}`}>
          <Image
            src={image}
            alt={'portfolio #' + index}
            style={{ height: `${itemHeight}%` }}
            onDragStart={e => {
              e.preventDefault();
            }}
          />
        </Link>
      ))}
    </Roll>
  );
};

export default CameraRoll;