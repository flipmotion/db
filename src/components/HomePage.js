import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import contentIn from '../content/homepage';
import animated, { fadeFromLeft, fadeFromRight } from '../animations';
import house from '../content/images/house.jpg';

const PortfolioButton = styled(Link)`
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

const Text = styled.div.attrs({
  style: props => ({
    ...props.style,
    ...fadeFromLeft({
      transitionStage: props.transitionStage,
      transitionDuration: props.transitionDuration
    })
  }),
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
  flex: 6;
`;

const AnimatedImage = animated(Image, fadeFromRight);

const Composer = styled.div`
  display: flex;
  align-items: stretch;
  height: 100%;
  width: 100%;

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

const HomePage = ({ lang, transitionStage, transitionDuration }) => {
  const phrase = contentIn(lang);
  return (
    <Composer>
      <Text
        linkPath="/portfolio"
        linkText={phrase('our works')}
        paragraphText={phrase('punch line')}
        header={phrase('real estate services')}
        transitionStage={transitionStage}
        transitionDuration={transitionDuration}
      />
      <AnimatedImage
        alt="DB Company"
        src={house}
        transitionStage={transitionStage}
        transitionDuration={transitionDuration}
        delayIn={400}
      />
    </Composer>
  );
};

export default HomePage;
