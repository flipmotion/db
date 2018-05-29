import React, { Component } from 'react';
import { Element, Link as ScrollLink } from 'react-scroll';
import styled from 'styled-components';
// import Spacer from '../../components/Spacer'
import PropTypes from 'prop-types';
import contentIn from '../../content';

// later will adjust flex direction on smaller screens
const Wrapper = styled.div`
  display: flex;
`;

const NavArea = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 40vw;
  background: lightblue;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ContentArea = styled.div`
  flex: 6;
  padding-left: 40vw;
  width: 60vw;
`;

const Image = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: cover;
`;

const activeClass = 'PortfolioPageLink_active';
const Link = styled(props => (
  <ScrollLink smooth spy activeClass={activeClass} {...props} />
))`
  cursor: pointer;
  display: block;
  clear: both;
  width: 100%;

  &.${activeClass} {
    color: red;
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
    const item1 = {
      name: 'A fabulous house',
      url: 'https://google.com',
      imageSrc:
        'https://i.pinimg.com/originals/e5/14/63/e51463679cef014934f14e8e03fbd21c.jpg'
    };

    const item2 = {
      name: 'A nice apartment',
      url: 'https://yandex.ru',
      imageSrc:
        'http://cdn.home-designing.com/wp-content/uploads/2016/04/luxury-art-deco-apartment-interior.jpg'
    };

    const items = [item1, item2];

    return (
      <Wrapper>
        <NavArea>
          <div style={{ padding: '2rem' }}>
            <h2>Наши работы</h2>
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
              <a href={item.url}>
                <Image src={item.imageSrc} alt={item.name} />
              </a>
            </Element>
          ))}
        </ContentArea>
      </Wrapper>
    );
  }
}

export default PortfolioPage;
