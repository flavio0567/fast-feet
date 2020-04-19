import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdCheck } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';

import AsyncSelect from 'react-select/lib/Async';
import api from '~/services/api';
import { Container, Badge, ButtonConfirm } from './styles';

type State = {
  inputValue: string,
};

// import { deliveryAddRequest } from '~/store/modules/delivery/actions';

const schema = Yup.object().shape({
  product: Yup.string().required('Product is required'),
});

export default function Delivery() {
  // const [deliveryman, setDeliveryman] = useState('');
  const [recipients, setRecipients] = useState('');
  // const [recipientSelected, setRecipientSelected] = useState('');
  // const dispatch = useDispatch();

  useEffect(() => {
    async function loadRecipients() {
      const response = await api.get('recipient');
      console.tron.log('useEffect', response.data);
      setRecipients(response.data.rows);
    }
    loadRecipients();
  }, []);

  function handleInputChange(newValue) {
    const inputValue = newValue.replace(/\W/g, '');
    setRecipients({ inputValue });
    return inputValue;
  }

  // function handleSubmit({ recipient_id, deliveryman_id, product }) {
  //   dispatch(deliveryAddRequest(recipient_id, deliveryman_id, product));
  // }

  return (
    <Container>
      <header>
        <strong>Gerenciando encomendas</strong>
      </header>

      <div>
        <strong>Destinatário</strong>
        <AsyncSelect
          cacheOptions
          loadOptions={recipients}
          defaultOptions
          onInputChange={handleInputChange}
        />

        <Form schema={schema} onSubmit={() => {}}>
          <Input name="product" placeholder="Descrição do produto" />
          <Link to="/deliveries" style={{ color: '#FFF', background: '#666' }}>
            voltar
          </Link>
          {/* <Badge> */}
          <ButtonConfirm>
            <MdCheck color="#FFFF" size={20} />
            <p>SALVAR</p>
          </ButtonConfirm>
          {/* </Badge> */}
        </Form>
      </div>
    </Container>
  );
}
