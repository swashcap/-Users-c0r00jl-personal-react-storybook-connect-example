import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './PrimaryButton.css';

/**
 * ### Primary button component
 *
 * Example use:
 *
 * ```js
 * import React from 'react'
 * import PrimaryButton from
 *   'react-storybook-connect-example/src/components/PrimaryButton'
 *
 * const Example = () => (
 *   &lt;PrimaryButton
 *     onPress={() => console.log('Pressed!')}
 *   >
 *     Primary Button
 *   &lt;/PrimaryButton>
 * );
 * ```
 */
const PrimaryButton = ({
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
  /** Button text or child elements */
  children: PropTypes.node.isRequired,

  /** Whether button is disabled */
  disabled: PropTypes.bool,

  /** Custom button CSS */
  style: PropTypes.object,

  /** Button's type */
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
