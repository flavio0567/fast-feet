import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import api from '../../services/api';

import DeliveredList from '~/components/DeliveredList';

import { Container } from './styles';

export default function Delivered({ data: id }) {
  const [deliveries, setDeliveries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    loadDelivered();
  }, []);

  async function loadDelivered() {
    if (loading) {
      return;
    }

    if (total && page > total) return;

    setLoading(true);

    const response = await api.get(`deliveryman/${id}/deliveries`, {
      params: { page, delivered: true },
    });
    setDeliveries([...deliveries, ...response.data.rows]);
    setTotal(Math.floor(response.headers['x-total-count'] / 5));
    setPage(page + 1);
    setLoading(false);
  }

  return (
    <Container>

      <FlatList
        data={deliveries}
        keyExtractor={item => String(item.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={() => loadDelivered()}
        onEndReachedThreshold={0.2}
        renderItem={({ item }) => (
            <DeliveredList data={item} />
        )}
      />

    </Container>
  );
}
