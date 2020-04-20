import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { recipientSuccess, recipientFailure } from './actions';

export function* recipientAdd({ payload }) {
  try {
    const recipient = payload.data;

    const response = yield call(api.post, 'recipients', recipient);

    toast.success('Success, recipient created!');

    yield put(recipientSuccess(response.data));
    history.push('/recipients');
  } catch (err) {
    toast.error('Error saving recipient, try again!');
    yield put(recipientFailure());
  }
}

export default all([
  takeLatest('@recipient/RECIPIENT_ADD_REQUEST', recipientAdd),
]);
