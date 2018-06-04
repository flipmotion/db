import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Element, Link as ScrollLink } from 'react-scroll';
import animated, { fadeInOut } from '../../../animations';

// to change layout for mobile later on
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

// emphasizes that Link and MediaArea use the same string
const containerId = 'MediaArea';
const activeClass = 'MediaAreaLink_active';

const Link = styled(props => (
  <ScrollLink
    containerId={containerId}
    smooth
    spy
    {...props}
    activeClass={activeClass}
  />
))`
  cursor: pointer;
  padding-bottom: 0.5rem;

  color: grey;

  &.${activeClass} {
    color: black;
  }
`;

const MediaArea = styled.div.attrs({ id: containerId })`
  flex: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

// This clearly shows that some components have the same
// layout threshold.
const slimLayoutThreshold = '800px';

const TitleInMediaArea = styled.h1`
  padding-left: 1em;

  @media (min-width: ${slimLayoutThreshold}) {
    display: none;
  }
`;

const DetailsArea = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 4em;
  box-sizing: border-box;
  justify-content: center;

  @media (max-width: ${slimLayoutThreshold}) {
    display: none;
  }
`;

// we bind to the top of this element for navigation
const StageMedia = styled(Element)`
  padding-bottom: 1em;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const H2 = styled.h2`
  padding-left: 1em;
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
    this.handleSetActive = this.handleSetActive.bind(this);
  }

  handleSetActive(stageIndex) {
    this.setState({ currentStageIndex: stageIndex });
  }

  render() {
    return (
      <Wrapper style={this.props.style}>
        <MediaArea>
          <TitleInMediaArea>{this.props.name}</TitleInMediaArea>
          {this.props.stages.map((stage, stageIndex) => (
            <StageMedia name={stageIndex.toString()} key={stageIndex}>
              <H2>{stage.name}</H2>
              {stage.media.map((medium, index) => (
                <Image key={index} src={medium.src} alt={medium.alt} />
              ))}
            </StageMedia>
          ))}
        </MediaArea>
        <DetailsArea>
          <h1>{this.props.name}</h1>
          {this.props.stages.map((stage, stageIndex) => (
            <Link
              key={stageIndex}
              to={stageIndex.toString()}
              onSetActive={this.handleSetActive}
              spy
              containerId={containerId}
            >
              {stage.name}
            </Link>
          ))}
          <p>
            {this.props.stages[this.state.currentStageIndex] &&
              this.props.stages[this.state.currentStageIndex].description}
          </p>
        </DetailsArea>
      </Wrapper>
    );
  }
}

const AnimatedPortfolioItem = animated(PortfolioItem, fadeInOut);

export default AnimatedPortfolioItem;
