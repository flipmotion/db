import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import contentIn from '../../content/homepage';
import animated, { fadeFromLeft, fadeFromRight } from '../../animations';
import house from '../../content/images/house.jpg';

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

const TextWrapper = styled.div`
  flex: 4;
  align-self: center;
  padding: 1.5rem;
  transition: transform 1s, opacity 1s;
  z-index: 1;
`;

function Text(props) {
  return (
    <TextWrapper style={props.style}>
      <h1>{props.header}</h1>
      <p>{props.paragraphText}</p>
      <PortfolioButton to={props.linkPath}>{props.linkText}</PortfolioButton>
    </TextWrapper>
  );
}

const AnimatedText = animated(Text, fadeFromLeft);

const FixedImage = styled.img`
  position: fixed;
  height: 100vh;
  width: 60vw;
  right: 0;
  top: 0;
  object-fit: cover;
  z-index: -1;

  @media (orientation: portrait), (max-width: 50rem) {
    width: 100vw;
  }
`;

const Placeholder = styled.div`
  flex: 6;
`;

const AnimatedImage = animated(FixedImage, fadeFromRight);

const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  height: 100%;
  width: 100%;

  @media (orientation: portrait), (max-width: 50rem) {
    position: relative;
    ${TextWrapper} {
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
    <Wrapper>
      <AnimatedText
        linkPath="/portfolio"
        linkText={phrase('our works')}
        paragraphText={phrase('punch line')}
        header={phrase('real estate services')}
        transitionStage={transitionStage}
        transitionDuration={transitionDuration}
      />
      <Placeholder />
      <AnimatedImage
        alt="DB Company"
        src={house}
        transitionStage={transitionStage}
        transitionDuration={transitionDuration}
        delayIn={400}
      />
    </Wrapper>
  );
};

export default HomePage;
