import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { deliverymanSuccess, deliverymanFailure } from './actions';

export function* deliverymanAdd({ payload }) {
  try {
    const deliveryman = payload.data;

    const response = yield call(api.post, 'deliveryman', deliveryman);

    toast.success('Success, deliveryman created!');

    yield put(deliverymanSuccess(response.data));
    history.push('/deliverymen');
  } catch (err) {
    toast.error('Error saving deliveryman, try again!');
    yield put(deliverymanFailure());
  }
}

export default all([
  takeLatest('@deliveryman/DELIVERYMAN_ADD_REQUEST', deliverymanAdd),
]);
