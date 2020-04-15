import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import WaitingImg from '~/assets/statusWaiting.png';
import WithdrawnImg from '~/assets/statusWithdrawn.png';

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

export default function DeliveryList({ data }) {

  return (
    <Container>
      <Tracking>
        <StuffLine>
          <Icon name="local-shipping" size={20} color="#7159c1" />
          <PropertyText>{data.product}</PropertyText>
        </StuffLine>

        <Image  source={data.start_date ? WithdrawnImg : WaitingImg}
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

        <TouchableOpacity onPress={() => {} }>
        <DetailText>Ver detalhes</DetailText>
        </TouchableOpacity>
      </SelectDetail>

    </Container>
  );
}

DeliveryList.navigationOptions = ({ navigation }) => ({
  title: 'Detalhes da encomenda',
  DetailText: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Detail');
      }}
    >Ver detalhes</TouchableOpacity>
  ),
});
