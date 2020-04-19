import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/fastfeet-logo.png';

import { Container, Wrapper, Profile } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  function handleSingOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Wrapper>
        <nav>
          <img src={logo} alt="Fastfeet" />
          <ul>
            <li>
              <Link to="/deliveries">ENCOMENDAS</Link>
              <Link to="/deliverymen">ENTRAGADORES</Link>
              <Link to="/recipients">DESTINATÁRIOS</Link>
              <Link to="/problems">PROBLEMAS</Link>
            </li>
          </ul>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <button type="button" onClick={handleSingOut}>
                sair do sistema
              </button>
            </div>
          </Profile>
        </aside>
      </Wrapper>
    </Container>
  );
}
