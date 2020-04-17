import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  margin-top: 0;
  height: 20%;
  background: #7159c1;
  color: #FFF;
`;

export const Header = styled.View`
  margin-top: 80px;
  padding: 0 30px;
  height: 100%;
`;

export const TextSnap = styled.Text`
  margin: 40px 60px;
  font-size: 20px;
  color: #FFF;
`;
