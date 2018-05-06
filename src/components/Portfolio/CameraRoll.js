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

class CameraRoll extends Component {
  constructor() {
    super();
    this.animationName = this.animationName.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.morphToPortfolioPage = this.morphToPortfolioPage.bind(this);
    this.animationStyle = this.animationStyle.bind(this);
    // this.doubleStyle = this.doubleStyle.bind(this);
  }

  // This is the trickiest part
  animationName() {
    if (this.props.history.location.state)
      return this.props.history.location.state.animationName;
  }

  // if image is clicked while it's not in "focus", what brings the image in focus
  // if the image is already in focus, navigate to item page
  // focusOn comes from portfolioContainer
  handleClick(index) {
    if (index === this.props.current) {
      this.morphToPortfolioPage(index);
    } else {
      this.props.focusOn(index);
    }
  }

  // this is a manual navigation with passing info about desired animation
  // we can't use Link because action on click is conditional (see handleClick)
  morphToPortfolioPage(index) {
    this.props.history.push(`${this.props.location.pathname}/${index}`, {
      animationName: 'portfolioItem'
    });
  }

  animationStyle(index) {
    switch (this.animationName()) {
      case 'portfolioItem':
        switch (index === this.props.current) {
          // animation of the CURRENT slide
          case true:
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
                  transform: 'scale(2)',
                  transition: '1s'
                };
            }
          // animation of the rest of the slides
          default:
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
                  transition: '0.3s'
                };
            }
        }
      // animation for the rest of the slides
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
        <Spacer key={-1} src={images[0]} height={offsetToCenter + '%'} />
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={titles[index]}
            height={imageHeight + '%'}
            onDragStart={e => e.preventDefault()}
            onClick={() => this.handleClick(index)}
            inFocus={index === this.props.current}
            style={this.animationStyle(index)}
          />
        ))}
        <Spacer
          key={images.length}
          src={images[images.length - 1]}
          height={offsetToCenter + '%'}
        />
      </Fragment>
    );
  }
}

export default CameraRoll;
