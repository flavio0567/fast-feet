import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  padding-top: 50px;
  margin: 20px;
`;

export const Header = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const SelectOption = styled.View`
  margin: 20px;
`;

export const TextLine = styled.Text`
  margin: 0 0 5px;
  font-size: 10px;
  font-weight: bold;
  color: #9999;
`;


export const DetailText = styled.Text`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
`;


export const LogoutButton = styled(Button)`
  background: #FF0000;
  color: #FFF;
`;
