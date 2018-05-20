import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Item = styled.div`
  padding-left: ${props => (props.active ? '2rem' : '0rem')};
  padding-right: ${props => (props.active ? '0rem' : '2rem')};
  /* transition is overridden completely in inline styles */
  /* so I had to add padding transition there */
  margin: 0.5rem 0;
  color: ${props => (props.active ? 'black' : 'grey')};
  cursor: pointer;
  transition: padding 0.85s;

  &:hover {
    text-decoration: none;
  }
`;

const Div = styled.div`
  padding: 1rem;
  align-self: center;
`;

const PortfolioList = ({ titles, current, setCurrent }) => {
  if (!titles || titles.length === 0) return null;
  return (
    <Div>
      <h1>Наши работы</h1>
      {titles.map((title, index) => (
        <Item
          key={index}
          onClick={() => setCurrent(index)}
          active={current === index}
        >
          {title}
        </Item>
      ))}
    </Div>
  );
};

PortfolioList.propTypes = {
  current: PropTypes.number,
  setCurrent: PropTypes.func,
  titles: PropTypes.arrayOf(PropTypes.string)
};

export default PortfolioList;
