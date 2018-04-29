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
  height: ${props => props.height};
  object-fit: cover;
  cursor: ${props => (props.inFocus ? 'zoom-in' : 'pointer')};
`;

const CameraRoll = ({
  current,
  animationStage,
  images,
  titles,
  focusOn,
  location,
  history
}) => {
  const itemHeight = 66;
  const offsetToCenter = (100 - itemHeight) / 2;
  // const animationOffset = animationStage === 'entered' ? 0 : 100;
  // const offset = offsetToCenter - itemHeight * current + animationOffset;
  const offset = offsetToCenter - itemHeight * current;

  // if image is clicked while it's not in "focus", what brings the image in focus
  // if the image is already in focus, navigate to item page
  function handleClick(index) {
    if (index === current) {
      history.push(`${location.pathname}/${index}`, {
        animationName: 'portfolioItem'
      });
    } else {
      focusOn(index);
    }
  }

  // This is the trickiest part!!!
  const animationName =
    history.location.state && history.location.state.animationName;

  // history.location.state.animationName
  // This function specifies how each image in the camera roll animates
  function animationStyle(animationName, animationStage, index, current) {
    switch (animationName) {
      case 'portfolioItem':
        switch (index === current) {
          case true:
            switch (animationStage) {
              case 'entered':
                return {
                  opacity: 1,
                  transition: '1s'
                };
              case 'exiting':
                return {
                  transform: 'scale(2.5)',
                  opacity: 0,
                  transition: '1s'
                };
              default:
                return {
                  opacity: 0,
                  transition: '1s'
                };
            }
          default:
            switch (animationStage) {
              case 'entered':
                return {
                  opacity: 1,
                  transition: '1s'
                };
              case 'exiting':
                return {
                  opacity: 0,
                  transition: '0.3s'
                };
              default:
                return {
                  opacity: 0,
                  transition: '1s'
                };
            }
        }
      default:
        switch (animationStage) {
          case 'entered':
            return {
              transform: 'translateY(0vh)',
              transition: '1s'
            };
          default:
            return {
              transform: 'translateY(100vh)',
              transition: '1s'
            };
        }
    }
  }

  return (
    <Roll style={{ transform: `translateY(${offset}%)` }}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={titles[index]}
          height={`${itemHeight}%`}
          onDragStart={e => {
            e.preventDefault();
          }}
          onClick={() => handleClick(index)}
          inFocus={index === current}
          style={animationStyle(animationName, animationStage, index, current)}
        />
      ))}
    </Roll>
  );
};

export default CameraRoll;
