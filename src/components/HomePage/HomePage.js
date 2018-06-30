import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import contentIn from './contentIn';
import { fadeFromLeft, fadeFromRight, fadeInOut } from '../../animations';
import house from './house.jpg';

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

function Text({ header, paragraphText, linkPath, linkText, ...props }) {
  return (
    <TextWrapper {...props}>
      <h1>{header}</h1>
      <p>{paragraphText}</p>
      <PortfolioButton to={linkPath}>{linkText}</PortfolioButton>
    </TextWrapper>
  );
}

const AnimatedText = styled(Text)`
  ${fadeFromLeft};
`;

// The trick is to extend the image from top to bottom of the page,
// underneath menu
const FixedImage = styled.img`
  position: fixed;
  height: 100vh;
  width: 60vw;
  right: 0;
  top: 0;
  object-fit: cover;
  z-index: -1;

  @media (orientation: landscape), (min-width: 50rem) {
    ${fadeFromRight};
  }

  @media (orientation: portrait), (max-width: 50rem) {
    width: 100vw;
    ${fadeInOut};
  }
`;

const Placeholder = styled.div`
  flex: 6;
`;

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
        delayIn={400}
      />
      <Placeholder />
      <FixedImage
        alt="DB Company"
        src={house}
        transitionStage={transitionStage}
        transitionDuration={transitionDuration}
      />
    </Wrapper>
  );
};

export default HomePage;
