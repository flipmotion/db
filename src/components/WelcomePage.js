// import React, { Fragment } from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';

// const LeftWrapper = styled.div`
//   flex: 4;
//   align-self: center;
//   padding: 1.5rem;
//   opacity: ${props => (props.animationStage === 'entered' ? 1 : 0)};
//   transform: translateX(
//     ${props => (props.animationStage !== 'entered' ? '-500px' : '0px')}
//   );
//   transition: transform 1s, opacity 1s;
// `;

// const RightWrapper = styled.div`
//   flex: 6;
//   align-self: stretch;
//   height: 100%;
//   opacity: ${props => (props.animationStage === 'entered' ? 1 : 0)};
//   transform: translateX(
//     ${props => (props.animationStage !== 'entered' ? '500px' : '0px')}
//   );
//   transition: transform 1s, opacity 1s;
// `;

// const Image = styled.img`
//   height: 100%;
//   object-fit: cover;
//   width: 100%;
// `;

// const PortfolioButton = styled(Link).attrs(props => ({
//   to: {
//     pathname: props.path,
//     state: { animationType: 'portfolioItem' }
//   },
//   children: text
// }))`
//   text-decoration: none;
//   color: navy;
//   border: 1px solid black;
// `

// const Textual = (props) => (
//   <LeftWrapper animationStage={animationStage}>
//   <h1>{header}</h1>
//   <p>{paragraphText}</p>
//   <PortfolioButton to={linkPath} text={linkText} />
// </LeftWrapper>
// )

// const Graphical = (props) => (

// )

// <RightWrapper animationStage={animationStage}>
// <Image src={image.src} alt={image.alt} />
// </RightWrapper>

// // Just for fun Link here triggers non-standard transition
// // animationStage, header, paragraphText, linkText, linkPath, image
// const HomePage = (props) => (
//   <Fragment>
//     <Textual {...props} flex="4" />

//   </Fragment>
// );

// export default HomePage;
