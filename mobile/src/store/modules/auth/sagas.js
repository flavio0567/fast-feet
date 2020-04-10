import { Alert } from 'react-native';
import { takeLatest, call, put, all, delay } from 'redux-saga/effects';

import api from '~/services/api';

import { logonSuccess, logonFailure } from './actions';

export function* logon({ payload }) {
  try {
    const { deliveryman_id } = payload;

    const response = yield call(api.get, `deliveryman/${deliveryman_id}/deliveries`, {
      // params: { id: deliveryman_id },
    });

    const user = response.data[0];

    if (!user.deliveryman) {
      Alert.alert('Logon error', "User is not a deliveryman.");
      return;
    }

    // yield delay(2000);
    console.tron.warn(user)
    yield put(logonSuccess(user));

    // history.push('/dashboard');
  } catch (err) {
    Alert.alert(
      'Authtentication failure',
      'Logon failure, try again');
    yield put(logonFailure());
  }
}

// export function setToken({ payload }) {
//   if (!payload) return;

//   const { token } = payload.auth;

//   if (token) {
//     api.defaults.headers.Authorization = `Barer ${token}`;
//   }
// }

export default all([
  // takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/LOGON_REQUEST', logon),
  // takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
