import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './PrimaryButton.css';

export const PrimaryButton = ({
  __buttonPressCount,
  __primaryBackgroundColor,
  __primaryBackgroundColorDisabled,
  __primaryColor,
  __primaryColorDisabled,
  children,
  disabled,
  onPress,
  style,
  type
}) => {
  const buttonStyle = Object.assign({}, style, {
    background: disabled ?
      __primaryBackgroundColorDisabled :
      __primaryBackgroundColor,
    color: disabled ?
      __primaryColorDisabled :
      __primaryColor
  });

  return (
    <button
      className='PrimaryButton'
      disabled={disabled}
      onClick={onPress}
      style={buttonStyle}
      type={type}
    >
      {children}
    </button>
  );
};

PrimaryButton.defaultProps = {
  disabled: false,
  style: undefined,
  type: 'button'
};

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  style: PropTypes.object,
  type: PropTypes.oneOf(['button', 'submit']),
};

if (process.env.NODE_ENV === 'development') {
  Object.assign(PrimaryButton.propTypes, {
    __buttonPressCount: PropTypes.number.isRequired,
    __primaryBackgroundColor: PropTypes.string.isRequired,
    __primaryBackgroundColorDisabled: PropTypes.string.isRequired,
    __primaryColor: PropTypes.string.isRequired,
    __primaryColorDisabled: PropTypes.string.isRequired
  });
}

export default connect(
  // Example selector
  ({ analytics, style }) => ({ ...analytics, ...style.values })
)(PrimaryButton);
