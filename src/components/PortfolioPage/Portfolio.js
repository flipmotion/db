import React from 'react';
import styled from 'styled-components';

import { Redirect, Route } from 'react-router-dom';

import PortfolioList from './PortfolioList';
import CameraRoll from './CameraRoll';
import PortfolioDescription from './PortfolioDescription';

const ListArea = styled.div`
  flex: 20;
  animation: all 1s;
  align-self: center;
`;

const RollArea = styled.div`
  flex: 50;
  align-self: center;
  width: 10%;
  border: 2px solid red;

  /* otherwise as soon as flex item
  can't be less the its contents by default, it's size is
  bigger and child % sizes are screwed up */
  min-height: 0;

  /* for uniformity all kids can expect their parents are flex
  unless needed otherwise */
  display: flex;
`;

const DescriptionArea = styled.div`
  flex: 30;
  align-self: center;
`;

// A dumb (presentational) component that combines and orchestrates smaller components
// that are also dumb
class Portfolio extends React.Component {
  render() {
    const {
      titles,
      images,
      descriptions,
      current,
      animationStage
    } = this.props;

    return (
      // sub-routing inside /portfolio: /portflio#1, /portflio##2 etc.
      <React.Fragment>
        <ListArea>
          <PortfolioList titles={titles} current={current} />
        </ListArea>
        <RollArea>
          <CameraRoll images={images} current={current} />
        </RollArea>
        <DescriptionArea>
          <PortfolioDescription descriptions={descriptions} current={current} />
        </DescriptionArea>
      </React.Fragment>
    );
  }
}

export default Portfolio;
