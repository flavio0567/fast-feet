import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { deliverymanDeleteSuccess, deliverymanFailure } from './actions';

export function* deliverymanDelete({ payload }) {
  try {
    const { id } = payload.data;

    const response = yield call(api.delete, `deliveryman/${id}`);

    toast.success('Success, deliveryman created!');

    yield put(deliverymanDeleteSuccess(response.data));
    history.push('/deliverymen');
  } catch (err) {
    toast.error('Error saving deliveryman, try again!');
    yield put(deliverymanFailure());
  }
}

export default all([
  takeLatest('@deliveryman/DELIVERYMAN_DELETE_REQUEST', deliverymanDelete),
]);
