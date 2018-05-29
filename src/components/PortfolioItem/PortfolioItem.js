import React from 'react';
import styled from 'styled-components';
import ScrollableMedia from './ScrollableMedia';

const MediaArea = styled.div`
  flex: 40;

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
  flex: 60;
  margin: 1rem;
  display: flex;
`;

const WorkStages = () => <p>WorkStages</p>;

// A dumb (presentational) component that combines and orchestrates smaller components
// that are also dumb
const Portfolio = props => (
  <React.Fragment>
    <MediaArea>
      <ScrollableMedia {...props} />
    </MediaArea>
    <DescriptionArea>
      <WorkStages {...props} />
    </DescriptionArea>
  </React.Fragment>
);

export default Portfolio;
