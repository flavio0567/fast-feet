/* eslint-disable prefer-object-spread */
import { takeLatest, put, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { deliveryDeleteSuccess, deliveryFailure } from './actions';

export function* deliveryDelete({ payload }) {
  try {
    const { id } = payload.data;

    const response = yield call(api.delete, `delivery/${id}`);

    toast.success('Success, delivery deleted!');

    yield put(deliveryDeleteSuccess(response.data));
    history.push('/deliveries');
  } catch (err) {
    toast.error('Error deleting delivery, try again!');
    yield put(deliveryFailure());
  }
}

export default all([
  takeLatest('@delivery/DELIVERY_DELETE_REQUEST', deliveryDelete),
]);
