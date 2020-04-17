import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { reportIssueRequest } from '~/store/modules/issue/actions';

import { Container, Header, Form, FormInput, SubmitButton } from './styles';

export default function ReportIssue({ route }) {
  const dispatch = useDispatch();
  const [description, setDescription] = useState('');

  const { id } = route.params.data;

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispatch(reportIssueRequest(id, description));
  }

  return (
    <Container>
      <Header>
        <Form>
          <FormInput
            editable
            multiline
            maxLength={255}
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Inclua aqui o problema que ocorreu na entrega."
            value={description}
            onChangeText={setDescription}
          />

          <SubmitButton
            loading={loading}
            onPress={handleSubmit}>
            Enviar
          </SubmitButton>
        </Form>
      </Header>
    </Container>
  )
}
