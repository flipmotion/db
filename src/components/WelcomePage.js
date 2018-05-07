import React from 'react';
import { house as placeholder } from '../modules/content';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div.attrs({
  // onWheel: function () {
  //   return function () {
  //     console.log('I will navigate to portfolio one day :)')
  //   }
  // }
  // this also doesn't work for some reason
  // onDrag: function () { return function (event) { event.preventDefault() } }
})`
  align-items: center;
  display: flex;
  overflow: scroll;
`;

const LeftContainer = styled.div`
  flex: 4;
  padding: 1.5rem;
  opacity: ${props => (props.animationStage === 'entered' ? 1 : 0)};
  transform: translateX(
    ${props => (props.animationStage !== 'entered' ? '-500px' : '0px')}
  );
  transition: transform 1s, opacity 1s;
`;

const RightContainer = styled.div`
  flex: 6;
  width: 60vw;
  height: 100vh;
  opacity: ${props => (props.animationStage === 'entered' ? 1 : 0)};
  transform: translateX(
    ${props => (props.animationStage !== 'entered' ? '500px' : '0px')}
  );
  transition: transform 1s, opacity 1s;
`;

const DumbImage = styled.img.attrs({ src: placeholder, alt: 'dumb' })`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

// Just for fun Link here triggers non-standard transition
const IndexPage = ({ animationStage, header, paragraphText, link }) => (
  <Container>
    <LeftContainer animationStage={animationStage}>
      <h1>{header}</h1>
      <p>{paragraphText}</p>
      <Link
        to={{
          pathname: link.path,
          state: { animationType: 'portfolioItem' }
        }}
      >
        {link.text}
      </Link>
    </LeftContainer>
    <RightContainer animationStage={animationStage}>
      <DumbImage />
    </RightContainer>
  </Container>
);

export default IndexPage;
