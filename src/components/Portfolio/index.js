import React from 'react';
import styled from 'styled-components';

import PortfolioList from './PortfolioList';
import CameraRoll from './CameraRoll';
import PortfolioDescription from './PortfolioDescription';

const ListArea = styled.div`
  flex: 20;
  animation: all 1s;
  align-self: center;
  margin: 1rem;
`;

const RollArea = styled.div`
  flex: 50;
  /* align-self: center; */

  /* border: 2px solid red; */

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
  margin: 1rem;
`;

// A dumb (presentational) component that combines and orchestrates smaller components
// that are also dumb
const Portfolio = props => (
  <React.Fragment>
    <ListArea>
      <PortfolioList {...props} />
    </ListArea>
    <RollArea>
      <CameraRoll {...props} />
    </RollArea>
    <DescriptionArea>
      <PortfolioDescription {...props} />
    </DescriptionArea>
  </React.Fragment>
);

export default Portfolio;
