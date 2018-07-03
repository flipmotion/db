import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const ExtendedRoute = ({ component: Component, ...props }) => (
  <Route
    {...props}
    render={historyProps => <Component {...historyProps} {...props} />}
  />
);

ExtendedRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired
};

export default ExtendedRoute;
