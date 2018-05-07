import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LeftWrapper = styled.div`
  flex: 4;
  align-self: center;
  padding: 1.5rem;
  opacity: ${props => (props.animationStage === 'entered' ? 1 : 0)};
  transform: translateX(
    ${props => (props.animationStage !== 'entered' ? '-500px' : '0px')}
  );
  transition: transform 1s, opacity 1s;
`;

const RightWrapper = styled.div`
  flex: 6;
  align-self: stretch;
  height: 100%;
  opacity: ${props => (props.animationStage === 'entered' ? 1 : 0)};
  transform: translateX(
    ${props => (props.animationStage !== 'entered' ? '500px' : '0px')}
  );
  transition: transform 1s, opacity 1s;
`;

const Image = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

// Just for fun Link here triggers non-standard transition
const IndexPage = ({ animationStage, header, paragraphText, link, image }) => (
  <Fragment>
    <LeftWrapper animationStage={animationStage}>
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
    </LeftWrapper>
    <RightWrapper animationStage={animationStage}>
      <Image src={image.src} alt={image.alt} />
    </RightWrapper>
  </Fragment>
);

export default IndexPage;
