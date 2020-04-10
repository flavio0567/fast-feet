import produce from 'immer';

const INITIAL_STATE = {
  // token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/LOGON_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/LOGON_SUCCESS': {
        draft.user = action.payload.user;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case '@auth/LOGON_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_OUT': {
        // draft.token = null;
        draft.signed = false;
        break;
      }
      default:
    }
  });
}
