import React, { useState, useEffect } from 'react';
import { MdMoreHoriz, MdDelete, MdEdit } from 'react-icons/md';

import api from '~/services/api';

import { Container, Badge, NotificationList } from './styles';

export default function DeliverymanList() {
  const [visible, setVisible] = useState(false);
  const [deliverymen, setDeliverymen] = useState([]);

  useEffect(() => {
    async function loadIssues() {
      const response = await api.get(`deliveryman`);
      console.tron.log(response.data);
      setDeliverymen(response.data);
    }

    loadIssues();
  }, []);

  // function handleAddNewDelivery() {

  // }

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <header>
        <strong>Problemas na entrega</strong>
      </header>

      <div className="container">
        <div className="row">
          <div className="col-lg-1">
            <h3>ID</h3>
          </div>
          <div className="col-lg-2">
            <h3>Foto</h3>
          </div>
          <div className="col-lg-2">
            <h3>Nome</h3>
          </div>
          <div className="col-lg-2">
            <h3>Email</h3>
          </div>
          <div className="col-lg-1">
            <h3>Ações</h3>
          </div>
        </div>
      </div>

      <ul>
        {deliverymen.map((deliveryman) => (
          <div className="container">
            <div className="row">
              <li key={deliveryman.id}>
                <div className="col-lg-1">
                  <span>#{deliveryman.id} </span>
                </div>

                <div className="col-lg-3">
                  <img
                    src={`https://ui-avatars.com/api/?name=${deliveryman.name}`}
                    alt="avatar"
                  />
                </div>

                <div className="col-lg-3">
                  <span>{deliveryman.name} </span>
                </div>

                <div className="col-lg-3">
                  <span>{deliveryman.email} </span>
                </div>

                <div className="col-lg-1">
                  <Badge onClick={handleToggleVisible}>
                    <MdMoreHoriz color="#6666" size={20} />
                  </Badge>
                  <NotificationList visible={visible}>
                    <span>
                      <MdEdit color="#4A88EB" size={20} />
                      Edit
                    </span>
                    <span>
                      <MdDelete color="#FF0000" size={20} />
                      Excluir
                    </span>
                  </NotificationList>
                </div>
              </li>
            </div>
          </div>
        ))}
      </ul>
    </Container>
  );
}
