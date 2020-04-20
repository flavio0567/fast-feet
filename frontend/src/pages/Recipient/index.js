import React from 'react';
import * as Yup from 'yup';
import { MdCheckBox } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import { recipientAddRequest } from '~/store/modules/recipient/actions';

import { Container, Wrapper, ButtonConfirm } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome is required'),
  rua: Yup.string().required('Rua is required'),
  numero: Yup.number().required('Numero is required'),
  complemento: Yup.string('Complemento is string'),
  cidade: Yup.string().required('Cidade is required'),
  estado: Yup.string().required('Estado is required'),
  cep: Yup.string().required('Cep is required'),
});

export default function Recipient() {
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(recipientAddRequest(data));
  }

  return (
    <Container>
      <header>
        <strong>Gerenciando de destinatário</strong>
      </header>
      <Wrapper>
        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="name" label="Nome" placeholder="nome" />
          <Input name="rua" label="Rua" placeholder="rua" />
          <Input
            name="numero"
            label="Número"
            type="string"
            placeholder="numero"
          />
          <Input
            name="complemento"
            label="Complemento"
            placeholder="complemento"
          />
          <Input name="cidade" label="Cidade" placeholder="cidade" />
          <Input name="estado" label="Estado" placeholder="estado" />
          <Input name="cep" label="CEP" placeholder="cep" />
          <ButtonConfirm>
            <MdCheckBox color="#FFFF" size={20} />
            <p>SALVAR</p>
          </ButtonConfirm>
          <Link to="/recipients">VOLTAR</Link>
        </Form>
      </Wrapper>
    </Container>
  );
}
