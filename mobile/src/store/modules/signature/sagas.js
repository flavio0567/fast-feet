import { Alert } from 'react-native';
import { takeLatest, put, call, all } from 'redux-saga/effects';

import api from '~/services/api';

import { signatureSuccess, signatureFailure } from './actions';

export function* signature({ payload }) {
  console.tron.log('saga-signature ', payload)
  try {
    const { id, data, path } = payload;
    console.tron.log('saga-issue signature ', id, data, path)
    const signature = Object.assign({
      data,
      path,
    });

    const response = yield call(api.post, `delivery/${id}`, signature);

    Alert.alert('Success!', 'signature updated!');

    yield put(signatureSuccess(response.data));
  } catch (err) {
    Alert.alert('Signature delivered', 'Error saving problem, try again later!', err);
    yield put(signatureFailure());
  }
}

export default all([takeLatest('@issue/SIGNATURE_REQUEST', signature)]);
