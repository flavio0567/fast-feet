import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { deliverymanSuccess, deliverymanFailure } from './actions';

export function* deliverymanEdit({ payload }) {
  try {
    const { id, nome, email } = payload.data;

    const deliveryman = { id, nome, email };

    const response = yield call(api.put, `deliveryman/${id}`, deliveryman);

    toast.success('Success, deliveryman created!');

    yield put(deliverymanSuccess(response.data));
    history.push('/deliverymen');
  } catch (err) {
    toast.error('Error saving deliveryman, try again!');
    yield put(deliverymanFailure());
  }
}

export default all([
  takeLatest('@deliveryman/DELIVERYMAN_EDIT_REQUEST', deliverymanEdit),
]);
