import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/fastfeet-logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('email format not valid')
    .required('email is required'),
  password: Yup.string()
    .required('password is required')
    .min(6, 'password min 6 chars'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="FastFeet" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="e-mail" />
        <Input name="password" type="password" placeholder="password" />

        <button type="submit">
          {loading ? 'Loading ...' : 'Entrar no sistema'}
        </button>
      </Form>
    </>
  );
}
