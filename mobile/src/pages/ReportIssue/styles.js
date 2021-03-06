import { Platform } from 'react-native';
import styled from 'styled-components/native';;

import TInput from '~/components/TInput';
import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  margin-top: 0;
  height: 25%;
  background: #7159c1;
  color: #FFF;
`;

export const Header = styled.View`
  margin-top: 80px;
  padding: 0 30px;
  height: 100%;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const FormInput = styled(TInput)`
  margin-bottom: 10px;
  background: #FFF;
  color: #6666;
`;

export const SubmitButton = styled(Button)`
  margin-top: 10px;
  background: #7159c1;
  color: #FFF;
`;
