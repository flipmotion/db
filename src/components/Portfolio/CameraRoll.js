import React, { Component } from 'react';
import styled from 'styled-components';

// The Roll component is intentionally supposed to be overflowed
const Roll = styled.div`
  flex-direction: column;
  /* margin-top: 100%; */
  height: 100%;
  /* transform: translateY(see index.js); */
  transition: transform 1s, opacity 1s;
`;

const Image = styled.img`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  width: 100%;
  height: ${props => props.height};
  object-fit: cover;
  cursor: ${props => (props.inFocus ? 'zoom-in' : 'pointer')};
`;

class CameraRoll extends Component {
  constructor() {
    super();
    this.state = { currentNode: null };
    // this can come from props as well, just decided to hardcode it for now
    this.itemHeight = 66;
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
    const { current, images, titles } = this.props;

    const offsetToCenter = (100 - this.itemHeight) / 2;
    const offset = offsetToCenter - this.itemHeight * current;

    return (
      <Roll style={{ transform: `translateY(${offset}%)` }}>
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={titles[index]}
            height={`${this.itemHeight}%`}
            onDragStart={e => e.preventDefault()}
            onClick={() => this.handleClick(index)}
            inFocus={index === this.props.current}
            style={this.animationStyle(index)}
          />
        ))}
      </Roll>
    );
  }
}

export default CameraRoll;
