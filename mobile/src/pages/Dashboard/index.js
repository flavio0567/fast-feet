import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Delivery from '~/components/Delivery';
import Delivered from '~/components/Delivered';
import { signOut } from '~/store/modules/auth/actions';

import {
  Container,
  Header,
  Left,
  Avatar,
  Middle,
  Name,
  LogoutButton,
  SelectOption,
  TextLine,
  SignLink,
  DeliveryText,
  DeliveredText
} from './styles';

export default function Dashboard() {
  const [isDelivered, setDelivered] = useState(false);
  const dispatch = useDispatch();

  const { id, name } = useSelector(state => state.auth.user);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Header>
        <Left>
          <Avatar source={{ uri: `https://ui-avatars.com/api/?name=${name}`}}/>
          <Middle>
            <Text>Benvindo de volta,</Text>
            <Name>{name}</Name>
          </Middle>
        </Left>

        <LogoutButton onPress={handleLogout}>
          <Icon name="exit-to-app" size={30} color="#E74040"/>
        </LogoutButton>
      </Header>

      <SelectOption>
        <TextLine>Entregas</TextLine>
        <SignLink onPress={() => setDelivered(false)}>
          <DeliveryText activyOpacity={isDelivered}>Pendentes</DeliveryText>
        </SignLink>
        <SignLink onPress={() => setDelivered(true)}>
          <DeliveredText activyOpacity={isDelivered}>Entregues</DeliveredText>
        </SignLink>
      </SelectOption>

      <View>{
           !isDelivered
           ? <Delivery data={id} />
           : <Delivered data={id}/> }
      </View>
    </Container>
  );
}
