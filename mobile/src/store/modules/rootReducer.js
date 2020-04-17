import { combineReducers } from 'redux';

import auth from './auth/reducer';
import issue from './issue/reducer';
import signature from './signature/reducer';

export default combineReducers({
  auth,
  issue,
  signature,
});
