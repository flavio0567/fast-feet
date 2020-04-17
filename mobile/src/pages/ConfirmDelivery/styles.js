import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const IssueDescription = styled.Text`
  font-size: 20px;
  color: #7159c1;
  margin-top: 16px;
  border: 1px solid;
`;

export const DetailLink = styled.TouchableOpacity`
  background-color: #7159c1;
  border-radius: 8px;
  height: 50px;
  width: 48%;
  justify-content: center;
  align-items: center;
`;

export const DetailText = styled.Text`
  font-size: 15px;
  color: #fff;
  font-weight: bold;
`;
