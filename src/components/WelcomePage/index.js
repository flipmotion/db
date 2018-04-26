import React from 'react';
import placeholder from './house.jpg';
import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  display: flex;
`;

const LeftContainer = styled.div`
  flex: 40;
  padding: 1.5rem;
`;

const RightContainer = styled.div`
  flex: 60;
  align-self: stretch;
`;

const DumbImage = styled.img.attrs({ src: placeholder, alt: 'dumb' })`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

const IndexPage = props => (
  <Container>
    <LeftContainer>
      <h1>Услуги в сфере элитной недвижимости {props.animationState}</h1>
      <p>
        Мы разработаем для вас проект любой сложности, получим разрешение на
        строительство или реконструкцию, проведем строительные работы, создадим
        дизайн интерьера и предложим техническое обслуживание.
      </p>
      <a to="/portfolio">Наши работы</a>
    </LeftContainer>
    <RightContainer>
      <DumbImage />
    </RightContainer>
  </Container>
);

export default IndexPage;
