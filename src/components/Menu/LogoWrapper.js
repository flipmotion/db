import React from 'react';
import PropTypes from 'prop-types';

const LogoWrapper = props => {
  if (props.inBurgerMode) {
    return (
      <div style={{ textAlign: 'center', width: '100%' }}>{props.children}</div>
    );
  }

  return props.children;
};

LogoWrapper.propTypes = {
  inBurgerMode: PropTypes.bool,
  children: PropTypes.node
};

export default LogoWrapper;
