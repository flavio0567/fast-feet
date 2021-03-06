/* eslint-disable prefer-object-spread */
import { takeLatest, put, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { deliverySuccess, deliveryFailure } from './actions';

export function* deliveryEdit({ payload }) {
  try {
    const { id } = payload.data;

    const response = yield call(api.put, `delivery/${id}`);

    toast.success('Success, delivery updated!');

    yield put(deliverySuccess(response.data));
    history.push('/deliveries');
  } catch (err) {
    toast.error('Error updating delivery, try again!');
    yield put(deliveryFailure());
  }
}

export default all([
  takeLatest('@delivery/DELIVERY_EDIT_REQUEST', deliveryEdit),
]);
