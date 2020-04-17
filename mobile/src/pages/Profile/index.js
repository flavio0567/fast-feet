import React from 'react';
import { format } from 'date-fns';

import { useSelector, useDispatch } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';

import {
  Container,
  Header,
  Avatar,
  SelectOption,
  TextLine,
  DetailText,
  LogoutButton,
} from './styles';

export default function Profile() {
  const dispatch = useDispatch();

  const { name, email, createdAt } = useSelector(state => state.auth.user);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Header>
        <Avatar source={{ uri: `https://ui-avatars.com/api/?name=${name}`}}/>
      </Header>

      <SelectOption>
        <TextLine>Nome completo</TextLine>
        <DetailText>{name}</DetailText>

        <TextLine>Email</TextLine>
        <DetailText>{email}</DetailText>

        <TextLine>Data de cadastro</TextLine>
        <DetailText>{format(new Date(createdAt), "dd/MM/y")}</DetailText>

      </SelectOption>

      <LogoutButton onPress={handleLogout}>Logout</LogoutButton>


    </Container>
  );
}
