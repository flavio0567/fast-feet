import React from 'react';
import PropTypes from 'prop-types';

import { Container, TInput } from './styles';

function Input({ style, ...rest }) {
  return (
    <Container style={style}>
      {/* { icon && <Icon name={icon} size={20} color="rgba(255, 255, 255, 0.6)" />} */}
      <TInput {...rest} />
    </Container>
  );
}

export default Input;

Input.propTypes = {
  syle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Input.defaultProps = {
  style: {},
};
