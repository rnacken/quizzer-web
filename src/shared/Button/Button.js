import React from 'react';
import PropTypes from 'prop-types';

import * as Styles from './styles';

const Button = ({ onClick, children, ...props }) => (
  <Styles.Button
    {...props}
    onClick={onClick}
  >
    {children}
  </Styles.Button>
);

export default Button;

Button.defaultProps = {
  onClick: () => {},
};

Button.propTypes = {
  onClick: PropTypes.func,
};
