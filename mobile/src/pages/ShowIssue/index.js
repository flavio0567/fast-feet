import React, { useState, useEffect } from 'react';
import { FlatList, Text } from 'react-native';
import { format } from 'date-fns';

import api from '~/services/api';

import { Container, Header, ProductText, IssueView, BoxView, IssueText, DateIssue } from './styles';

function Item({ description, date }) {
  return (
    <BoxView>
      <IssueText>{description}</IssueText>
      <DateIssue>{format(new Date(date), "dd/MM/y")}</DateIssue>
    </BoxView>
  );
}

export default function ReportIssue({ route }) {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  console.tron.log(route.params.data);
  const { id, product } = route.params.data;

  useEffect(() => {
    loadIssues();
  }, []);

  async function loadIssues() {
    if (loading) {
      return;
    }

    if (total && page > total) return;

    setLoading(true);

    const response = await api.get(`delivery/${id}/problems`, {
      params: { page },
    });
    console.tron.log(response.data)
    setIssues([...issues, ...response.data.rows]);
    setTotal(Math.floor(response.headers['x-total-count'] / 5));
    setPage(page + 1);
    setLoading(false);
  }

  return (
    <Container>
      <Header>
        <ProductText>{product}</ProductText>
        <IssueView
        data={issues}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Item
            id={item.id}
            description={item.description}
            date={item.created_at}
          />
        )}
        />
      </Header>
    </Container>
  )
}
