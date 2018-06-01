import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Element, Link } from 'react-scroll';
import animated, { fadeInOut } from '../../../animations';

// to change layout for mobile later on
const Wrapper = styled.div`
  background: lightgrey;
  width: 100%;
  height: 100%;
  display: flex;
`;

const MediaArea = styled.div`
  width: 50%;
  height: 100%;
  background: orange;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const NavArea = styled.div`
  width: 50%;
  height: 100%;
  background: orange;
  display: flex;
  flex-direction: column;
`;

// we bind to the top of this element for navigation
const StageMedia = styled(Element)`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

// Let's express what this component wants to recieve in terms
// of the component itself
class PortfolioItem extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    stages: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string.isRequired,
        media: PropTypes.arrayOf(
          PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired
          }).isRequired
        ).isRequired
      }).isRequired
    ).isRequired
  };

  constructor() {
    super();
    this.state = { currentStageIndex: 0 };
  }

  render() {
    return (
      <Wrapper>
        <MediaArea>
          {this.props.stages.map((stage, index) => (
            <StageMedia key={index}>
              {stage.media.map((medium, index) => (
                <Image key={index} src={medium.src} alt={medium.alt} />
              ))}
            </StageMedia>
          ))}
        </MediaArea>
        <NavArea>
          <h1>{this.props.name}</h1>
          <p>
            {this.props.stages[this.state.currentStageIndex] &&
              this.props.stages[this.state.currentStageIndex].description}
          </p>
        </NavArea>
      </Wrapper>
    );
  }
}

// I'll mix in animation later, it's just too much in one take
const AnimatedPortfolioItem = PortfolioItem; // animated(PortfolioItem, fadeInOut)

export default AnimatedPortfolioItem;
