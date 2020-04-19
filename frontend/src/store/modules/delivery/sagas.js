/* eslint-disable prefer-object-spread */
import { takeLatest, put, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { deliveryAddSuccess, deliveryAddFailure } from './actions';

export function* deliveryAdd({ payload }) {
  try {
    const { recipient_id, deliveryman_id, product } = payload.data;

    const delivery = Object.assign({
      recipient_id,
      deliveryman_id,
      product,
    });

    const response = yield call(api.post, 'deilvery', delivery);

    toast.success('Success, delivery created!');

    yield put(deliveryAddSuccess(response.data));
  } catch (err) {
    toast.error('Error saving deilvery, try again!');
    yield put(deliveryAddFailure());
  }
}

export default all([takeLatest('@delivery/DELIVERY_ADD_REQUEST', deliveryAdd)]);
