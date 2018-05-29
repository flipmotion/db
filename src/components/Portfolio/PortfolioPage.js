import React, { Component } from 'react';
import { Element as ScrollElement, Link as ScrollLink } from 'react-scroll';
import styled from 'styled-components';
// import Spacer from '../../components/Spacer'
import PropTypes from 'prop-types';
import { pageNameIn, portfolioIndexPageIn } from './content';

// later will adjust flex direction on smaller screens
const Wrapper = styled.div`
  display: flex;
`;

// TODO: try to forward scroll with this:
// http://jsfiddle.net/s4hwt886/2/
const NavArea = styled.div`
  /* position: fixed; */
  height: 100%;
  left: 0;
  width: 40%;
  background: lightblue;
  display: flex;
  justify-content: center;
  flex-direction: column;
  z-index: 1;
`;

const ContentArea = styled.div`
  flex: 6;
  width: 60%;
  overflow: auto;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  flex: 6;
  min-width: 0;
`;

const Description = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
`;
const Padding = styled.div`
  padding: 2em;
`;

const Element = styled(ScrollElement)`
  height: calc(100vh - 6em);
  display: flex;
  width: 100%;
  padding-top: 3em;
  padding-bottom: 3em;
`;

const activeClass = 'PortfolioPageLink_active';
const Link = styled(props => (
  <ScrollLink smooth spy activeClass={activeClass} {...props} />
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

  &.${activeClass} {
    font-weight: bold;

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

  render() {
    const items = portfolioIndexPageIn(this.props.lang);
    console.dir(items);

    return (
      <Wrapper>
        <NavArea>
          <div style={{ padding: '2rem' }}>
            <h1>{pageNameIn(this.props.lang)}</h1>
            {items.map((item, index) => (
              <Link to={index.toString()} key={item.name}>
                {item.name}
              </Link>
            ))}
          </div>
        </NavArea>
        <ContentArea>
          {items.map((item, index) => (
            <Element name={index.toString()} key={item.name}>
              {/* <a href={item.url}> */}
              <Image src={item.imageSrc} alt={item.name} />
              {/* </a> */}
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
