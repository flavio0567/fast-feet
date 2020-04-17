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
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 70px;
  height: 70px;
  background: #eee;
  border-radius: 35px;
`;

export const Middle = styled.View`
  display: flex;
  margin: 0 40px;
  flex-direction: column;
  align-items: flex-start;
`;

export const Name = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const LogoutButton = styled(Button)`
  margin-top: 10px;
  background: #FFF;
`;

export const SelectOption = styled.View`
  margin-top: 10px;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextLine = styled.Text`
  margin-top: 22px;
  font-weight: bold;
  font-size: 20px;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 26px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const DeliveryText = styled.Text`
  color: #7159c1;
  font-weight: bold;
  font-size: 14px;
  margin-left: 50px;

  opacity: ${props => ((props.activyOpacity !== false) ? 0.6 : 1)};
  text-decoration: ${props => ((props.activyOpacity === false) ? "underline #7159c1" : null)};
`;

export const DeliveredText = styled.Text`
  color: #7159c1;
  font-weight: bold;
  font-size: 14px;

  opacity: ${props => ((props.activyOpacity !== true) ? 0.6 : 1)};
  text-decoration: ${props => ((props.activyOpacity === true) ? "underline #7159c1" : null)};
`;
