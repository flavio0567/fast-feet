import React, { useState, useEffect } from 'react';
import { MdMoreHoriz, MdDelete, MdLooks } from 'react-icons/md';

import api from '~/services/api';

import { Container, Badge, NotificationList } from './styles';

export default function DeliveryProblemList() {
  const [visible, setVisible] = useState(false);
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    async function loadIssues() {
      const response = await api.get('problems');

      setIssues(response.data);
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
          <div className="col-lg-3">
            <h3>Encomenda</h3>
          </div>
          <div className="col-lg-6">
            <h3>Problema</h3>
          </div>
          <div className="col-lg-1">
            <h3>Ações</h3>
          </div>
        </div>
      </div>

      <ul>
        {issues.map((issue) => (
          <div className="container">
            <div className="row">
              <li key={issue.id}>
                <div className="col-lg-2">
                  <span>#{issue.id} </span>
                </div>

                <div className="col-lg-8">
                  <span>{issue.description} </span>
                </div>

                <div className="col-lg-1">
                  <Badge onClick={handleToggleVisible}>
                    <MdMoreHoriz color="#6666" size={20} />
                  </Badge>
                  <NotificationList visible={visible}>
                    <span>
                      <MdLooks color="#7159c1" size={20} />
                      Visualizar
                    </span>
                    <span>
                      <MdDelete color="#FF0000" size={20} />
                      Cancelar encomenda
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
