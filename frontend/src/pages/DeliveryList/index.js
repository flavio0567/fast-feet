import React, { useState, useEffect } from 'react';
import { MdAdd, MdMoreHoriz, MdEdit, MdDelete, MdLooks } from 'react-icons/md';
import { Link } from 'react-router-dom';

import api from '~/services/api';

import { Container, Badge, NotificationList } from './styles';

export default function DeliveryList() {
  const [visible, setVisible] = useState(false);

  const [search, setSearch] = useState('');

  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    async function loadDelivery() {
      const response = await api.get('delivery');

      setDeliveries(response.data);
    }
    loadDelivery();
  }, []);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  function handleInputChange(e) {
    setSearch(e.target.value);
  }

  // eslint-disable-next-line prefer-const
  let filtereDeliveries = deliveries.filter((delivery) => {
    return String(delivery.id).indexOf(search) !== -1;
  });

  return (
    <Container>
      <header>
        <strong>Gerenciando encomendas</strong>
        <aside>
          <input
            type="text"
            placeholder="Buscar pelo nro da encomenda"
            value={search}
            onChange={handleInputChange}
          />
        </aside>
        <Badge>
          <Link to="/delivery" style={{ color: '#7159c1' }}>
            <MdAdd color="#FFF" size={20} />
            <p>CADASTRAR</p>
          </Link>
        </Badge>
      </header>

      <div className="container">
        <div className="row">
          <div className="col-lg-1">
            <h3>ID</h3>
          </div>
          <div className="col-lg-2">
            <h3>Destinatário</h3>
          </div>
          <div className="col-lg-2">
            <h3>Entregador</h3>
          </div>
          <div className="col-lg-1">
            <h3>Cidade</h3>
          </div>
          <div className="col-lg-1">
            <h3>Estado</h3>
          </div>
          <div className="col-lg-2">
            <h3>Status</h3>
          </div>
          <div className="col-lg-1">
            <h3>Ações</h3>
          </div>
        </div>
      </div>

      <ul>
        {filtereDeliveries.map((delivery) => (
          <div className="container">
            <div className="row">
              <li key={delivery.id}>
                <div className="col-lg-1">
                  <span>#{delivery.id} </span>
                </div>
                <div className="col-lg-3">
                  <span>{delivery.recipient.name} </span>
                </div>
                <div className="col-lg-3">
                  <img
                    src={`https://ui-avatars.com/api/?name=${delivery.recipient.name}`}
                    alt="avatar"
                  />
                  <span>{delivery.deliveryman.name} </span>
                </div>
                <div className="col-lg-3">
                  <span>{delivery.recipient.user.cidade} </span>
                </div>
                <div className="col-lg-2">
                  <span>{delivery.recipient.user.estado} </span>
                </div>
                <div className="col-lg-2">
                  <span>Status</span>
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
                      <MdEdit color="#4A88EB" size={20} />
                      Editar
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
