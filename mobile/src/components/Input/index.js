import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { Container, TInput } from './styles';

function Input({ style, ...rest }, ref) {
  return (
    <Container style={style}>
      {/* { icon && <Icon name={icon} size={20} color="rgba(255, 255, 255, 0.6)" />} */}
      <TInput {...rest} ref={ref} />
    </Container>
  );
}

export default forwardRef(Input);

Input.propTypes = {
  syle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Input.defaultProps = {
  style: {},
};


