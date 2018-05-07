import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Image = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

const PortfolioButton = styled(Link).attrs(props => ({
  to: {
    pathname: props.path,
    state: { animationType: 'portfolioItem' }
  },
  children: text
}))`
  text-decoration: none;
  color: navy;
  border: 1px solid black;
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

const Text = styled.div.attrs(props => ({
  style: textStyle(props.animationStage), // TODO merge style from props!
  children: (
    <Fragment>
      <h1>{props.header}</h1>
      <p>{props.paragraphText}</p>
      <PortfolioButton to={props.linkPath} text={props.linkText} />
    </Fragment>
  )
}))`
  /* flex: 4 */
  align-self: center;
  padding: 1.5rem;
  transition: transform 1s, opacity 1s;
`;

const Media = styled.div.attrs(props => ({
  style: mediaStyle(props.animationStage),
  children: <Image src={props.imageSrc} alt={props.imageAlt} />
}))`
  /* flex: 6; */
  align-self: stretch;
  height: 100%;
  transition: transform 1s, opacity 1s;
`;

const HomePage = props => (
  <Fragment>
    <Text {...props} />
    <Media {...props} />
  </Fragment>
);

const MyDiv = styled.div.attrs(props => ({ children: <p>hello</p> }))`
  background-color: blue;
  height: 100px;
  width: 100px;
`;

export default MyDiv;
