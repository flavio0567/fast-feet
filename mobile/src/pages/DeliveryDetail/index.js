import React, { useMemo } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { format } from 'date-fns';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

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
          <IconMaterial name="local-shipping" size={20} color="#7159c1" />
          <Text> Informações da entrega</Text>
        </StuffLine>
          <LocaleText>DESTINATÁRIO</LocaleText>
          <Text>{data.recipient.name}</Text>

          <LocaleText>ENDEREçO DE ENTREGA</LocaleText>
          <Text>{data.recipient.user.rua}</Text>
          <Text>{data.recipient.user.numero}</Text>
          <Text>{data.recipient.user.complemento}</Text>
          <Text>{data.recipient.user.cidade}</Text>
          <Text>{data.recipient.user.estado}</Text>
          <Text>{data.recipient.user.cep}</Text>
          <LocaleText>PRODUTO</LocaleText>
          <Text>{data.product}</Text>

      </Tracking>

      <SelectDetail>
        <View>
        <StuffLine>
          <IconMaterial name="today" size={20} color="#7159c1" />
          <Text>Situação da entrega</Text>
        </StuffLine>
          <LocaleText>STATUS</LocaleText>
          <Text>Pendente</Text>

          <StuffLine>
            <LocaleText>DATA DE RETIRADA</LocaleText>
            <PointText>
              {data.start_date
              ? dateFormatted
              : null
            }</PointText>
            <LocaleText>DATA DE ENTREGA</LocaleText>
            <Text>--/--/--</Text>
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

          <SubmitButton onPress={() => navigation.navigate('ShowIssue', { data }) }>
            <Icon name="information-outline" size={20} color="orange" />
            <DetailText>Visualizar Problema</DetailText>
          </SubmitButton>

          <SubmitButton onPress={() => navigation.navigate('ConfirmDelivery', { data }) }>
            <Icon name="check-circle-outline" size={20} color="#7159c1" />
            <DetailText>Confirmar Entrega</DetailText>
          </SubmitButton>
        </View>
    </Container>
  );
}
