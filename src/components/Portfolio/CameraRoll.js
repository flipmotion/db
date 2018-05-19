import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const Image = styled.img`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  width: 100%;
  height: ${props => props.height};
  object-fit: cover;
  cursor: ${props => (props.inFocus ? 'zoom-in' : 'pointer')};
  scroll-snap-align: center;
`;

// I have no idea why div collapses here, and imgs don't
const Spacer = styled(Image)`
  scroll-snap-align: none;
  visibility: hidden;
`;

const SpacerTop = styled(Spacer)`
  padding-top: 0;
`;

const SpacerBottom = styled(Spacer)`
  padding-bottom: 0;
`;

class CameraRoll extends Component {
  constructor() {
    super();
    this.animationType = this.animationType.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.morphToPortfolioPage = this.morphToPortfolioPage.bind(this);
    this.animationStyle = this.animationStyle.bind(this);
    // this.doubleStyle = this.doubleStyle.bind(this);
  }

  // This is the trickiest part
  animationType() {
    if (this.props.history.location.state)
      return this.props.history.location.state.animationType;
  }

  // if image is clicked while it's not in "focus", what brings the image in focus
  // if the image is already in focus, navigate to item page
  // setCurrent comes from portfolioContainer
  handleClick(index) {
    if (index === this.props.current) {
      this.morphToPortfolioPage(index);
    } else {
      this.props.setCurrent(index);
    }
  }

  // this is a manual navigation with passing info about desired animation
  // we can't use Link because action on click is conditional (see handleClick)
  morphToPortfolioPage(index) {
    this.props.history.push(`${this.props.location.pathname}/${index}`, {
      animationType: 'portfolioItem'
    });
  }

  animationStyle(index) {
    switch (this.animationType()) {
      case 'portfolioItem':
        switch (this.props.animationStage) {
          // the starting point before entering
          default:
            return {
              opacity: 0,
              transition: '1s'
            };
          // the normal on-screen appearance
          case 'entered':
            return {
              opacity: 1,
              transition: '1s'
            };
          // where it leaves to
          case 'exiting':
            return {
              opacity: 0,
              transition: '0.85s'
            };
        }
      // noname animations
      default:
        switch (this.props.animationStage) {
          // where coming from and where leaving to
          default:
            return {
              transform: 'translateY(100vh)',
              transition: '1s'
            };
          // normal position
          case 'entered':
            return {
              transform: 'translateY(0vh)',
              transition: '1s'
            };
        }
    }
  }

  render() {
    const { images, titles, imageHeight } = this.props;

    const offsetToCenter = (100 - imageHeight) / 2;

    return (
      // <Roll style={{ transform: `translateY1(${offset}%)` }}>
      <Fragment>
        <SpacerTop key={-1} src={images[0]} height={offsetToCenter + '%'} />
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            height={imageHeight + '%'}
            onDragStart={e => e.preventDefault()}
            onClick={() => this.handleClick(index)}
            inFocus={index === this.props.current}
            style={this.animationStyle(index)}
          />
        ))}
        <SpacerBottom
          key={images.length}
          src={images[images.length - 1]}
          height={offsetToCenter + '%'}
        />
      </Fragment>
    );
  }
}

export default CameraRoll;
