import { Platform } from 'react-native';
import styled from 'styled-components/native';;

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

export const IssueView = styled.FlatList`
  width: 100%;
  max-width: 400px;

`;

export const BoxView = styled.View`
  flex-direction: column;
  margin-top: 80px;
  margin-bottom: 10px;
  background: #FFF;
  color: #6666;
  border-radius: 6px;
`;

export const IssueText = styled.Text`
  margin-bottom: 10px;
  background: #FFF;
  color: #6666;
  margin: 10px;
`;

export const DateIssue = styled.Text`
  background: #FFF;
  color: #6666;
  margin: 10px;
  padding: 10px;
`;

export const ProductText = styled.Text`
  font-size: 22;
  color: #FFF;
  flex-direction: row;
  justify-content: center;
`;
