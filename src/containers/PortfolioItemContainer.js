import React from 'react';
import PortfolioItem from '../components/Portfolio/PortfolioItem';
// TODO: move content closer to container (it has nothing to do with component!)
import { nameOfIn, stagesOfIn } from '../components/Portfolio/content';

// A container that has the data can be named container, even if
// it has no state?! I tend to think so.
//
// So, this component (container component) is coupled with data
// source, and also provides i18n.
const PortfolioItemContainer = ({ index, lang, ...otherProps }) => {
  return (
    <PortfolioItem
      name={nameOfIn({ index, lang })}
      stages={stagesOfIn({ index, lang })}
      {...otherProps}
    />
  );
};

export default PortfolioItemContainer;
