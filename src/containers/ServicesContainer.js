import React from 'react';
import Services from '../components/Services';
import { servicesIn } from '../content/services';
import PropTypes from 'prop-types';

const ServicesContainer = ({ lang, ...otherProps }) => {
  return <Services services={servicesIn(lang)} {...otherProps} />;
};

ServicesContainer.propTypes = {
  lang: PropTypes.oneOf(['ru', 'en'])
};

export default ServicesContainer;
