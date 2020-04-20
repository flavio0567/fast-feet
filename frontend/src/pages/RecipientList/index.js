import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd, MdMoreHoriz, MdDelete, MdEdit } from 'react-icons/md';

import api from '~/services/api';

import { Container, Badge, NotificationList } from './styles';

export default function RecipientList() {
  const [visible, setVisible] = useState(false);
  const [recipients, setRecipients] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function loadRecipients() {
      const response = await api.get('recipients');

      setRecipients(response.data);
    }

    loadRecipients();
  }, []);

  function handleInputChange(e) {
    setSearch(e.target.value);
  }

  // eslint-disable-next-line prefer-const
  let filtereRecipients = recipients.filter((recipient) => {
    return (
      recipient.recipient.name.toLowerCase().indexOf(search.toLowerCase()) !==
      -1
    );
  });

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <header>
        <strong>Gerenciamento destinatário</strong>
        <aside>
          <input
            type="text"
            placeholder="Buscar por destinatário"
            value={search}
            onChange={handleInputChange}
          />
        </aside>
        <Badge>
          <Link to="/recipient" style={{ color: '#7159c1' }}>
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
          <div className="col-lg-3">
            <h3>Nome</h3>
          </div>
          <div className="col-lg-3">
            <h3>Endereço</h3>
          </div>
          <div className="col-lg-1">
            <h3>Ações</h3>
          </div>
        </div>
      </div>

      <ul>
        {filtereRecipients.map((recipient) => (
          <div className="container">
            <div className="row">
              <li key={recipient.id}>
                <div className="col-lg-1">
                  <span>#{recipient.id} </span>
                </div>

                <div className="col-lg-3">
                  <span>{recipient.recipient.name} </span>
                </div>

                <div className="col-lg-3">
                  <span>
                    {recipient.rua} {recipient.numero}, {recipient.cidade} - {recipient.estado}
                  </span>
                </div>

                <div className="col-lg-1">
                  <Badge onClick={handleToggleVisible}>
                    <MdMoreHoriz color="#6666" size={20} />
                  </Badge>
                  <NotificationList visible={visible}>
                    <span>
                      <MdEdit color="#4A88EB" size={20} />
                      Editar
                    </span>
                    <span>
                      <MdDelete color="#FF9999" size={20} />
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
