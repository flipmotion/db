import React from 'react';
import styled from 'styled-components';

const SpaceAround = styled.div`
  padding: 1rem;
`;

class PortfolioDescription extends React.Component {
  render() {
    const description = this.props.descriptions[this.props.current];
    return <SpaceAround>{description}</SpaceAround>;
  }
}

export default PortfolioDescription;
