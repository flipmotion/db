import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ScrollContainer = styled.div`
  height: 100%;
  overflow: auto;
`;

const Image = styled(({ isCurrent, myRef, alt, ...otherProps }) => (
  <img
    ref={myRef}
    alt={alt}
    onDragStart={e => e.preventDefault()}
    {...otherProps}
  />
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
    this.state = { isScrolling: false };
    this.scrollContainerRef = React.createRef();
    this.firstImageRef = React.createRef();
    this.handleClick = this.handleClick.bind(this);
    this.scrollTo = this.scrollTo.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.currentIndexAccordingToScroll = this.currentIndexAccordingToScroll.bind(
      this
    );
    this.smoothlyScrollTo = this.smoothlyScrollTo.bind(this);
  }

  smoothlyScrollTo({ positionStart, positionEnd, duration, targetElement }) {
    const startTime = performance.now();
    const endTime = startTime + duration;

    const positionDelta = positionEnd - positionStart;

    function positionAt(currentTime) {
      const relativeTime = currentTime - startTime;
      const durationFraction = relativeTime / duration;
      const value = positionStart + positionDelta * durationFraction; // 1:1
      console.log(value);
      return value;
    }

    const animation = () =>
      requestAnimationFrame(time => {
        if (performance.now() < endTime) {
          // && this.state.isScrolling !== true
          targetElement.scrollTop = positionAt(time);
          animation();
        }
      });

    animation();
  }

  currentIndexAccordingToScroll() {
    const curentScrollTop = this.scrollContainerRef.current.scrollTop;
    const elementHeight = this.firstImageRef.current.clientHeight;
    return Math.floor(0.5 + curentScrollTop / elementHeight);
  }

  onScroll() {
    this.setState({ isScrolling: true });
    const index = this.currentIndexAccordingToScroll();

    // this will trigger immidiate positioning on the new 'current'
    // as soon as it's changed
    // if (this.props.current !== index) this.props.setCurrent(index)

    const onScrollEnd = () => {
      this.setState({ isScrolling: false });
      this.scrollTo(index);
    };

    const scrollAimingTimeout = 150;
    const timeOutHandler = window.setTimeout(onScrollEnd, scrollAimingTimeout);

    this.setState(state => {
      window.clearInterval(state && state.timeOutHandler);
      return { timeOutHandler };
    });
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
    if (!this.props.images) return;

    const maxIndex = this.props.images.length - 1;
    if (index > maxIndex) index = maxIndex;
    if (index < 0) index = 0;

    const scrollContainer = this.scrollContainerRef.current;
    const elementHeight = this.firstImageRef.current.clientHeight;

    const scrollTopBeforeAnimationStart = Number(scrollContainer.scrollTop);
    const desiredScrollTop = index * elementHeight;
    const duration = 350;
    // scrollContainer.scrollTop = desiredScrollTop;

    this.smoothlyScrollTo({
      positionStart: scrollTopBeforeAnimationStart,
      positionEnd: desiredScrollTop,
      duration: duration,
      targetElement: scrollContainer
    });
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
      <ScrollContainer
        innerRef={this.scrollContainerRef}
        onScroll={this.onScroll}
      >
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
