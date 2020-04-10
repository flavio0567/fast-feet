import React, { useRef, useState } from 'react';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Icon from '~/assets/fastfeet-logo-white.png';

import Background from '~/components/Background';
import { logonRequest } from '~/store/modules/auth/actions';

import { Container, Form, FormInput, SubmitButton } from './styles';

export default function Logon() {
  const dispatch = useDispatch();
  const deliveryman_idRef = useRef();

  const [deliveryman_id, setDeliveryman_id] = useState('');

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispatch(logonRequest(deliveryman_id))
  }

  return (
    <Background>
      <Container>
        <Image source={Icon} />

        <Form>
          <FormInput
            ref={deliveryman_idRef}
            value={deliveryman_id}
            onChangeText={setDeliveryman_id}
            placeholder="Informe seu ID de cadastro"
          />

          <SubmitButton
            loading={loading}
            onPress={handleSubmit}>
              Entrar no sistema
          </SubmitButton>
        </Form>

      </Container>
    </Background>
  );
}
