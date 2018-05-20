import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ScrollContainer = styled.div`
  height: 100%;
  overflow: auto;
`;

const Image = styled(({ isCurrent, myRef, ...otherProps }) => (
  <img ref={myRef} onDragStart={e => e.preventDefault()} {...otherProps} />
))`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  width: 100%;
  height: ${props => props.height};
  object-fit: cover;
  cursor: ${props => (props.isCurrent ? 'zoom-in' : 'pointer')};
  scroll-snap-align: center;
  box-sizing: border-box;
`;

// I have no idea why div collapses here, and imgs don't
const Spacer = styled.div`
  height: ${props => props.height};
  scroll-snap-align: none;
  /* visibility: hidden; */
`;

const SpacerTop = styled(Spacer)`
  padding-top: 0;
`;

const SpacerBottom = styled(Spacer)`
  padding-bottom: 0;
`;

// The component renders an array of images. An image is an object with
// "src", "alt", "to" properties.
// If a clicked image is not "in focus" (= in the center), it will scroll
// to the center. If the image clicked is in focus, it will navigate to its "to".
//
// The component also takes a function to inform upwards a new current image index
// if that has changed.
class CameraRoll extends Component {
  static propTypes = {
    current: PropTypes.number, // index of the current (= in focus, = in the center) image
    setCurrent: PropTypes.func.isRequired, // "current" state it held (and managed) up the component chain
    imageHeight: PropTypes.number, // "specify %, but without % sign, a number (for math later on)"
    navigateTo: PropTypes.func, // programmatic click it the upper component's concern
    images: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired, // is ot OK for both small (inline) and big images?
        alt: PropTypes.string,
        to: PropTypes.string,
        // inline styles are passed to DOM node, for animations
        // (controlled by upper component, that's why there's no animationStage prop here)
        style: PropTypes.object
      })
    )
  };

  static defaultProps = {
    imageHeight: 66
  };

  constructor() {
    super();
    this.scrollContainerRef = React.createRef();
    this.firstImageRef = React.createRef();
    this.handleClick = this.handleClick.bind(this);
    this.scrollTo = this.scrollTo.bind(this);
  }

  // if image is clicked while it's not in "focus", what brings the image in focus
  // if the image is already in focus, navigate to the item page
  // setCurrent comes from portfolioContainer
  handleClick(index) {
    if (index === this.props.current) {
      const url = this.props.images[index].to;
      if (!url) return console.warn("'to' property is not specified");
      this.props.navigateTo(url);
    } else {
      this.props.setCurrent(index);
    }
  }

  scrollTo(index) {
    if (index < 0) index = 0;
    const maxIndex = this.props.images.length - 1;
    if (index > maxIndex) index = maxIndex;

    const scrollContainer = this.scrollContainerRef.current;
    const elementHeight = this.firstImageRef.current.clientHeight;
    const desiredScrollTop = index * elementHeight;
    this.scrollContainerRef.current.scrollTop = desiredScrollTop;
  }

  componentDidMount() {
    this.scrollTo(this.props.current);
  }

  componentDidUpdate(prevProps) {
    const currentChanged = this.props.current !== prevProps.current;
    if (currentChanged) this.scrollTo(this.props.current);
  }

  render() {
    const { images, imageHeight } = this.props;

    if (!images || images.length === 0) return null;

    const offsetToCenter = (100 - imageHeight) / 2;

    return (
      <ScrollContainer innerRef={this.scrollContainerRef}>
        <SpacerTop key={-1} height={offsetToCenter + '%'} />
        {images.map((image, index) => {
          const isCurrent = index === this.props.current;
          const first = index === 0;

          return (
            <Image
              myRef={first ? this.firstImageRef : undefined}
              key={index}
              src={image.src}
              alt={image.alt}
              height={imageHeight + '%'}
              onClick={() => this.handleClick(index)}
              isCurrent={isCurrent}
              style={image.style}
            />
          );
        })}
        <SpacerBottom key={images.length} height={offsetToCenter + '%'} />
      </ScrollContainer>
    );
  }
}

export default CameraRoll;
