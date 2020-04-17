import { combineReducers } from 'redux';

import auth from './auth/reducer';
import issue from './issue/reducer';

export default combineReducers({
  auth,
  issue,
});
