import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Tracking = styled.View`
  margin: 10px;
`;

export const StuffLine = styled.View`
  flex-direction: row;
`;

export const PropertyText = styled.Text`
  margin-left: 10px;
  font-size: 16px;
  color: #7159c1;
  font-weight: bold;
`;

export const SelectDetail = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: #eee;
  margin: -10px;
  padding: 10px;
  background: #F8F9FD;
`;

export const LocaleText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #9999;
`;

export const PointText = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-weight: bold;
`;

export const DetailText = styled.Text`
  font-size: 14px;
  color: #7159c1;
  font-weight: bold;
`;

export const SubmitButton = styled(Button)`
  margin-top: 10px;
  background: #FFF;
`;
