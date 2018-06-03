import React, { Component } from 'react';
import {
  Events,
  Element as ScrollElement,
  Link as ScrollLink
} from 'react-scroll';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { pageNameIn, portfolioIndexPageIn } from './content';
import animated, { fadeInOut } from '../../animations';
import { Link as RouterLink } from 'react-router-dom';

// later will adjust flex direction on smaller screens
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

Wrapper.propTypes = {
  animationStage: PropTypes.oneOf(['entering', 'entered', 'exiting', 'exited'])
    .isRequired,
  transitionDuration: PropTypes.number.isRequired
};

const AnimatedWrapper = animated(Wrapper, fadeInOut);

// TODO: scroll forwarding works only in Safari and to be dropped,
// to programmatically clicking could be a better idea
const NavArea = styled.div`
  display: flex;
  flex-direction: column;
  flex: none;
  width: 22em;

  @media (max-width: 40rem) {
    display: none;
  }
`;

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  padding: 2em;
`;

const DescriptionUnderNav = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  padding: 2em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: wrap;

  @media (min-width: 70rem) {
    display: none;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-width: 0;
`;

const ImageLink = styled(RouterLink)`
  flex: auto;
`;

const Description = styled.div`
  flex: none;
  align-self: center;
  width: 22em;

  @media (max-width: 70rem) {
    display: none;
  }
`;

const Padding = styled.div`
  height: 100%;
  padding: 2em;
`;

const Element = styled(ScrollElement)`
  height: 100%;
  display: flex;

  /* scroll-snap-align: none center; */
`;

const ContentArea = styled.div.attrs({ id: 'ContentArea' })`
  overflow: auto;
  flex: auto;
  -webkit-overflow-scrolling: touch;

  ${Element}:not(:last-child) {
    margin-bottom: 3em;
  }

  /* scroll-snap-type: y mandatory; */
`;

const Link = styled(props => (
  <ScrollLink smooth spy containerId={'ContentArea'} {...props} />
))`
  cursor: pointer;
  display: block;
  clear: both;
  width: 100%;
  padding-bottom: 0.66rem;

  /* animation */
  margin-left: ${props => (props.active ? '2em' : '0')};
  margin-right: ${props => (props.active ? '0' : '2em')};
  transition: margin 0.5s ease-in 1s;

  &::before {
    content: ${props => (props.active ? '👉 ' : '✌️ ')};
  }
`;

Link.propTypes = { active: PropTypes.bool };

class PortfolioPage extends Component {
  static propTypes = {
    animationStage: PropTypes.oneOf([
      'entering',
      'entered',
      'exiting',
      'exited'
    ]),
    lang: PropTypes.oneOf(['ru', 'en'])
  };

  static defaultProps = {
    lang: 'ru',
    animationStage: 'entered'
  };

  constructor() {
    super();
    this.state = { active: 0, delayedActive: 0, lastScrollTime: 0 };
    this.setActive = this.setActive.bind(this);
    this.saveLastScrollTime = this.saveLastScrollTime.bind(this);
  }

  // I had to introduce delayedActive instead of regular delayed
  // because there are glitches on iPad
  setActive(to) {
    this.setState({ active: Number(to) });
    // const currentTimestamp = + new Date();
    // const lastScrollTime = this.state.lastScrollTime;
    // const scrollTimeout = 300;
    // const scrollStopped = currentTimestamp > lastScrollTime + scrollTimeout;

    // if (scrollStopped) {
    //   this.setState({ delayedActive: Number(to)});
    //   return;
    // }

    // // restart itself if scroll didn't come to an end
    // const reCheckTime = 50;
    // window.setTimeout(() => this.setActive(to), reCheckTime)
  }

  componentDidMount() {
    Events.scrollEvent.register('end', function(to, element) {});
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('end');
  }

  saveLastScrollTime() {
    this.setState({ lastScrollTime: +new Date() });
  }

  render() {
    const items = portfolioIndexPageIn(this.props.lang);
    const animation = {
      animationStage: this.props.animationStage,
      transitionDuration: this.props.transitionDuration
    };

    return (
      <AnimatedWrapper {...animation}>
        <NavArea>
          <Nav>
            <div style={{ padding: '2rem' }}>
              <h1>{pageNameIn(this.props.lang)}</h1>
              {items.map((item, index) => (
                <Link
                  to={index.toString()}
                  key={item.name}
                  onSetActive={this.setActive}
                  active={this.state.active === index}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Nav>
          <DescriptionUnderNav>
            {items[this.state.active].description}
          </DescriptionUnderNav>
        </NavArea>
        <ContentArea onScroll={this.saveLastScrollTime}>
          {items.map((item, index) => (
            <Element name={index.toString()} key={item.name}>
              <ImageLink to={item.url}>
                <Image src={item.imageSrc} alt={item.name} />
              </ImageLink>
              <Description>
                <Padding>{item.description}</Padding>
              </Description>
            </Element>
          ))}
        </ContentArea>
      </AnimatedWrapper>
    );
  }
}

export default PortfolioPage;
