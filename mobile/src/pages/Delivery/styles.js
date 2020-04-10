import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  padding: 60px 30px;
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

export const Middle = styled.View`
    display: flex;
    margin: 0 40px;
    flex-direction: column;
    align-items: flex-start;
`;

export const Name = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

export const Avatar = styled.Image`
  width: 70px;
  height: 70px;
  color: #A28FD0;
  background: #eee;
  border-radius: 50px;
`;

export const LogoutButton = styled(Button)`
  margin-top: 10px;
  background: #FFF;
`;

