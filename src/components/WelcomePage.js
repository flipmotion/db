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
  flex: 40;
  width: 40vw;
  padding: 1.5rem;
  opacity: ${props => (props.animationStage === 'entered' ? 1 : 0)};
  transform: translateX(
    ${props => (props.animationStage !== 'entered' ? '-500px' : '0px')}
  );
  transition: transform 1s, opacity 1s;
`;

const RightContainer = styled.div`
  position: fixed;
  width: 60vw;
  height: 100vh;
  top: 0;
  right: 0;
  display: flex;
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
const IndexPage = ({ animationStage }) => (
  <Container>
    <LeftContainer animationStage={animationStage}>
      <h1>Услуги в сфере элитной недвижимости</h1>
      <p>
        Мы разработаем для вас проект любой сложности, получим разрешение на
        строительство или реконструкцию, проведем строительные работы, создадим
        дизайн интерьера и предложим техническое обслуживание.
      </p>
      <Link
        to={{
          pathname: '/portfolio',
          state: { animationName: 'portfolioItem' }
        }}
      >
        Наши работы
      </Link>
    </LeftContainer>
    <RightContainer animationStage={animationStage}>
      <DumbImage />
    </RightContainer>
  </Container>
);

export default IndexPage;
