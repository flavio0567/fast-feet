import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { recipientSuccess, recipientFailure } from './actions';

export function* recipientEdit({ payload }) {
  try {
    const { id } = payload.data;

    const recipient = { name, rua, numero, complemento, estado, cidade, cep };

    const response = yield call(api.put, `recipients/${id}`, recipient);

    toast.success('Success, recipient created!');

    yield put(recipientSuccess(response.data));
    history.push('/recipients');
  } catch (err) {
    toast.error('Error saving recipient, try again!');
    yield put(recipientFailure());
  }
}

export default all([
  takeLatest('@recipient/RECIPIENT_ADD_REQUEST', recipientEdit),
]);
