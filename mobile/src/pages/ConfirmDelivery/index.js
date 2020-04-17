import React from 'react';

import Camera from '~/components/Camera';

import { Container, Header, TextSnap } from './styles';

export default function ConfirmDelivery() {
  return (
    <Container>
      <Header>
        <TextSnap>
          Confirmar entrega
        </TextSnap>
      </Header>

      <Camera />

    </Container>

  );
}
