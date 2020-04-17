import { Platform } from 'react-native';
import styled from 'styled-components/native';;

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

export const CameraView = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

export const TakeView = styled.View`
  flex: 0;
  background-color: #fff;
  border-radius: 5px;
  padding: 15px;
  align-self: center;
  margin: 20px;
`;

export const LogoutButton = styled(Button)`
  background: #7150c1;
  color: #FFF;
`;
