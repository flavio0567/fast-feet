import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import issue from './issue/sagas';

export default function* rootSaga() {
  return yield all([auth, issue]);
}
