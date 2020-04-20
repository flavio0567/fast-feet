import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdCheck } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';

import AsyncSelect from 'react-select/lib/Async';

import { deliveryAddRequest } from '~/store/modules/delivery/actions';

import api from '~/services/api';
import { Container, ButtonConfirm } from './styles';

// import { deliveryAddRequest } from '~/store/modules/delivery/actions';

const schema = Yup.object().shape({
  product: Yup.string().required('Product is required'),
});

export default function Delivery() {
  const [recipients, setRecipients] = useState([]);
  const [selected, setSelected] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadRecipients() {
      const response = await api.get('recipients');

      for (const rec in response.data) {
        // console.tron.log(response.data[rec].recipient);
        setSelected(...selected, response.data[rec].recipient);
      }
      setRecipients(selected);
    }
    loadRecipients();
  }, []);

  const filterRecipients = (inputValue) => {
    return recipients.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const promiseOptionsRecipient = (inputValue) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(filterRecipients(inputValue));
      }, 1000);
    });

  const filterDeliveryman = (inputValue) => {
    return recipients.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const promiseOptionsDeliveryman = (inputValue) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(filterDeliveryman(inputValue));
      }, 1000);
    });

  function handleDelivery(data) {
    dispatch(deliveryAddRequest(data));
  }

  return (
    <Container>
      <header>
        <strong>Gerenciando encomendas</strong>
      </header>

      <div>
        <Form schema={schema} onSubmit={handleDelivery}>
          <strong>Destinatário</strong>
          <AsyncSelect
            cacheOptions
            defaultOptions
            loadOptions={promiseOptionsRecipient}
          />
          <strong>Entregador</strong>
          <AsyncSelect
            cacheOptions
            defaultOptions
            loadOptions={promiseOptionsDeliveryman}
          />
          <strong>Nome do produto</strong>
          <Input name="product" placeholder="Descrição do produto" />
          <Link to="/deliveries" style={{ color: '#FFF', background: '#666' }}>
            VOLTAR
          </Link>

          <ButtonConfirm>
            <MdCheck color="#FFFF" size={20} />
            <p>SALVAR</p>
          </ButtonConfirm>
        </Form>
      </div>
    </Container>
  );
}
