import React, { useMemo } from 'react';

import { format } from 'date-fns';
import { TouchableOpacity, View, Image } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import DeliveredImg from '~/assets/statusDelivered.png';

import {
  Container,
  Tracking,
  StuffLine,
  PropertyText,
  SelectDetail,
  LocaleText,
  PointText,
  DetailText,
} from './styles';

export default function DeliveredList({ data }) {
  const dateFormatted = useMemo(
    () => format(new Date(data.end_date), "dd/MM/y"),
  );

  return (
    <Container>
      <Tracking>
        <StuffLine>
          <Icon name="local-shipping" size={20} color="#7159c1" />
          <PropertyText>{data.product}</PropertyText>
        </StuffLine>

        <Image  source={DeliveredImg}
          style={{
          resizeMode: "contain",
          height: 100,
          width: 330
        }}/>
      </Tracking>

      <SelectDetail>
        <View>
          <LocaleText>Data</LocaleText>
          <PointText>{
            data.end_date
            ? dateFormatted
            : null
          }</PointText>
        </View>
        <View>
          <LocaleText>Cidade</LocaleText>
        <PointText>{data.recipient.user.cidade}</PointText>
        </View>

        <TouchableOpacity onPress={() => {}}>
        <DetailText>Ver detalhes</DetailText>
        </TouchableOpacity>
      </SelectDetail>

    </Container>
  );
}
