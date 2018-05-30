import React, { Component } from 'react';
import { Element as ScrollElement, Link as ScrollLink } from 'react-scroll';
import styled from 'styled-components';
// import Spacer from '../../components/Spacer'
import PropTypes from 'prop-types';
import { pageNameIn, portfolioIndexPageIn } from './content';

// later will adjust flex direction on smaller screens
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

// TODO: scroll forwarding forks only in Safari and to be dropped,
// to programmatically clicking could be a better idea
const NavArea = styled.div`
  display: flex;
  flex-direction: column;
  flex: none;
  width: 20em;

  @media (max-width: 40rem) {
    display: none;
  }
`;

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
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

const ImageLink = styled.a`
  flex: auto;
`;

const Description = styled.div`
  flex: none;
  align-self: center;
  width: 20em;

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

const activeClass = 'PortfolioPageLink_active';
const Link = styled(props => (
  <ScrollLink
    smooth
    spy
    activeClass={activeClass}
    containerId={'ContentArea'}
    onSetActive={to => console.log(to)}
    {...props}
  />
))`
  cursor: pointer;
  display: block;
  clear: both;
  width: 100%;
  padding-bottom: 0.66rem;

  /* animation */
  padding-left: 0;
  padding-right: 2rem;
  transition: padding 0.78s;

  &::before {
    content: '✌️ ';
  }

  &.${activeClass} {
    /* just for fun, for now */
    &::before {
      content: '👉 ';
    }

    /* animation */
    padding-left: 2rem;
    padding-right: 0;
    transition: padding 0.78s;
  }
`;

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
    this.state = { current: 0 };
    this.setActive = this.setActive.bind(this);
  }

  setActive(to) {
    this.setState({ current: Number(to) });
  }

  render() {
    const items = portfolioIndexPageIn(this.props.lang);

    return (
      <Wrapper>
        <NavArea>
          <Nav>
            <div style={{ padding: '2rem' }}>
              <h1>{pageNameIn(this.props.lang)}</h1>
              {items.map((item, index) => (
                <Link
                  to={index.toString()}
                  key={item.name}
                  onSetActive={this.setActive}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Nav>
          <DescriptionUnderNav>
            {items[this.state.current].description}
          </DescriptionUnderNav>
        </NavArea>
        <ContentArea>
          {items.map((item, index) => (
            <Element name={index.toString()} key={item.name}>
              <ImageLink href={item.url}>
                <Image src={item.imageSrc} alt={item.name} />
              </ImageLink>
              <Description>
                <Padding>{item.description}</Padding>
              </Description>
            </Element>
          ))}
        </ContentArea>
      </Wrapper>
    );
  }
}

export default PortfolioPage;
