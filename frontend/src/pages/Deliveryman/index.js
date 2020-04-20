import React from 'react';
import { MdCheckBox } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { deliverymanAddRequest } from '~/store/modules/deliveryman/actions';

import { Container, ButtonConfirm } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome is required'),
  email: Yup.string()
    .email('E-mail format not valid')
    .required('E-mail is required'),
});

export default function Deliveryman() {
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(deliverymanAddRequest(data));
  }

  return (
    <Container>
      <header>
        <strong>Cadastro de entregadores</strong>
      </header>
      <div className="col-lg-3">
        <img
          src={`https://ui-avatars.com/api/?name=${schema.name}`}
          alt="avatar"
        />
      </div>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" label="Nome" placeholder="nome" />
        <Input name="email" label="Email" type="email" placeholder="e-mail" />
        <ButtonConfirm>
          <MdCheckBox color="#FFFF" size={20} />
          <p>SALVAR</p>
        </ButtonConfirm>
        <Link to="/deliverymen">VOLTAR</Link>
      </Form>
    </Container>
  );
}
