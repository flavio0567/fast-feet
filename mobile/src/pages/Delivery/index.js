import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Feather } from 'react-native-vector-icons';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { signOut } from '~/store/modules/auth/actions';

import { Container, Header, Avatar, Name, LogoutButton, Left, Middle } from './styles';

export default function Delivery({ navigation }) {
  const [deliveries, setDeliveries] = useState([]);
  const dispatch = useDispatch();

  const name = useSelector(state => state.auth.user.name);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Header>
        <Left>
          <Avatar source={`https://ui-avatars.com/api/?name=${name}`}/>
          <Middle>
            <Text>Benvindo de volta,</Text>
            <Name>{name}</Name>
          </Middle>

        </Left>
        <LogoutButton onPress={handleLogout}>
          <Icon name="exit-to-app" size={30} color="#E74040"/>
        </LogoutButton>
      </Header>

      <Text>Entregas</Text>

    </Container>
  );
}

Delivery.navigationOptions = {
  tabBarLabel: 'Entregas',
  tabBarIcon: ({ tintColor }) => <Icon name="format-align-justify" size={20} color={tintColor} />
}
