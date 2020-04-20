import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { recipientSuccess, recipientFailure } from './actions';

export function* recipientDelete({ payload }) {
  try {
    const { id } = payload.data;

    const response = yield call(api.delete, `recipients/${id}`);

    toast.success('Success, recipient deleted!');

    yield put(recipientSuccess(response.data));
    history.push('/recipients');
  } catch (err) {
    toast.error('Error delieting recipient, try again!');
    yield put(recipientFailure());
  }
}

export default all([
  takeLatest('@recipient/RECIPIENT_ADD_REQUEST', recipientDelete),
]);
