import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import api from '~/services/api';

import DeliveryList from '~/components/DeliveryList';

import { Container } from './styles';

export default function Delivery({ data: id }) {
  const [deliveries, setDeliveries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadDeliveries();
  }, []);

  async function loadDeliveries() {
    if (loading) {
      return;
    }

    if (total && page > total) return;

    setLoading(true);

    const response = await api.get(`deliveryman/${id}/deliveries`, {
      params: { page, delivered: false },
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
        onEndReached={loadDeliveries}
        onEndReachedThreshold={0.1}
        renderItem={({ item }) => (
            <DeliveryList data={item} />
        )}
      />
    </Container>
  );
}
