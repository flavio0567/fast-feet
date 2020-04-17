import React, { useMemo } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { format } from 'date-fns';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container, Tracking, StuffLine, SelectDetail, LocaleText, PointText, DetailText, SubmitButton } from './styles';

export default function Detail({ route, navigation }) {
  const { data } = route.params;

  const dateFormatted = useMemo(
    () => format(new Date(data.start_date), "dd/MM/y"),
  );

  return (
    <Container>
      <Tracking>
        <StuffLine>
          <Icon name="local-shipping" size={20} color="#7159c1" />
          <Text> Informações da entrega</Text>
        </StuffLine>
          <Text>DESTINATÁRIO</Text>
          <Text>{data.recipient.name}</Text>

          <Text>ENDEREçO DE ENTREGA</Text>
          <Text>{data.recipient.user.rua}</Text>
          <Text>{data.recipient.user.numero}</Text>
          <Text>{data.recipient.user.complemento}</Text>
          <Text>{data.recipient.user.cidade}</Text>
          <Text>{data.recipient.user.estado}</Text>
          <Text>{data.recipient.user.cep}</Text>
          <Text>PRODUTO</Text>
          <Text>{data.product}</Text>

      </Tracking>

      <SelectDetail>
        <View>
        <StuffLine>
          <Icon name="today" size={20} color="#7159c1" />
          <Text>Situação da entrega</Text>
        </StuffLine>
          <LocaleText>STATUS</LocaleText>
          <Text>Pendente</Text>

          <StuffLine>
            <Text>DATA DE RETIRADA</Text>
            <PointText>
              {data.start_date
              ? dateFormatted
              : null
            }</PointText>
            <Text>DATA DE ENTREGA</Text>
            <PointText>
              {data.end_date
              ? dateFormatted
              : null
            }</PointText>
          </StuffLine>
        </View>
      </SelectDetail>

      <View>
          <SubmitButton onPress={() => navigation.navigate('ReportIssue', { data }) }>
            <Icon name="close-circle-outline" size={20} color="red" />
            <DetailText>Informar Problema</DetailText>
          </SubmitButton>

          <SubmitButton onPress={() => navigation.navigate('ShowIssue') }>
            <Icon name="information-outline" size={20} color="orange" />
            <DetailText>Visualizar Problema</DetailText>
          </SubmitButton>

          <SubmitButton onPress={() => navigation.navigate('ConfirmDelivery') }>
            <Icon name="check-circle-outline" size={20} color="#7159c1" />
            <DetailText>Confirmar Entrega</DetailText>
          </SubmitButton>
        </View>
    </Container>
  );
}
