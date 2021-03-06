/* eslint-disable prefer-object-spread */
import { takeLatest, put, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { deliverySuccess, deliveryFailure } from './actions';

export function* deliveryAdd({ payload }) {
  try {
    const { product } = payload.data;

    const delivery = { product, recipient_id: 10, deliveryman_id: 6 };

    const response = yield call(api.post, 'delivery', delivery);

    toast.success('Success, delivery created!');

    yield put(deliverySuccess(response.data));
    history.push('/deliveries');
  } catch (err) {
    toast.error('Error saving deilvery, try again!');
    yield put(deliveryFailure());
  }
}

export default all([takeLatest('@delivery/DELIVERY_ADD_REQUEST', deliveryAdd)]);
