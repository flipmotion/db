import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PortfolioButton = styled(Link).attrs({
  to: props => ({
    pathname: props.to,
    state: { animationType: 'portfolioItem' }
  })
})`
  text-decoration: none;
  color: #222;
  padding: 0.5em;
  border: 1px solid #222;
  transition: color 0.5s, background-color 0.5s;

  :hover {
    color: white;
    background-color: #222;
    transition: color 0.5s, background-color 0.5s;
  }
`;

function textStyle(animationStage) {
  if (animationStage === 'entered') {
    return {
      opacity: 1,
      transform: 'translateX(0px)'
    };
  } else {
    return {
      opacity: 0,
      transform: 'translateX(-500px)'
    };
  }
}

function mediaStyle(animationStage) {
  if (animationStage === 'entered') {
    return {
      opacity: 1,
      transform: 'translateX(0px)'
    };
  } else {
    return {
      opacity: 0,
      transform: 'translateX(500px)'
    };
  }
}

const Text = styled.div.attrs({
  style: props => ({ ...props.style, ...textStyle(props.animationStage) }),
  children: props => (
    <Fragment>
      <h1>{props.header}</h1>
      <p>{props.paragraphText}</p>
      <PortfolioButton to={props.linkPath}>{props.linkText}</PortfolioButton>
    </Fragment>
  )
})`
  flex: 4;
  align-self: center;
  padding: 1.5rem;
  transition: transform 1s, opacity 1s;
  z-index: 1;
`;

const Image = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
  min-width: 0;
  transition: all 0.85s ease-out 0.35s;
  flex: 6;
`;

const Composer = styled.div`
  display: flex;
  align-items: stretch;
  height: 100%;
  @media (orientation: portrait), (max-width: 50rem) {
    position: relative;
    ${Text} {
      position: absolute;
      background-color: rgba(222, 222, 222, 0.5);

      @media (min-width: 30rem) {
        width: 70%;
        margin: 3rem;
      }
    }
  }
`;

const HomePage = props => (
  <Composer>
    <Text {...props} />
    <Image
      alt={props.imageAlt}
      src={props.imageSrc}
      style={{ ...props.style, ...mediaStyle(props.animationStage) }}
    />
  </Composer>
);

export default HomePage;
