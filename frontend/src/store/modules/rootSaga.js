import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import delivery from './delivery/sagas';
import deliveryedit from './delivery/sagasupdate';
import deliverydelete from './delivery/sagasdelete';
import recipientadd from './recipient/sagas';
import recipientedit from './recipient/sagasupdate';
import recipientdelete from './recipient/sagasdelete';
import deliveryman from './deliveryman/sagas';
import deliverymanedit from './deliveryman/sagasupdate';
import deliverymandelete from './deliveryman/sagasdelete';

export default function* rootSaga() {
  return yield all([
    auth,
    delivery,
    deliveryedit,
    deliverydelete,
    recipientadd,
    recipientedit,
    recipientdelete,
    deliveryman,
    deliverymanedit,
    deliverymandelete,
  ]);
}
