import produce from 'immer';

const INITIAL_STATE = {
  recipient: null,
};

export default function recipient(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@recipient/RECIPIENT_SUCCESS': {
        draft.recipient = action.payload.recipient;
        break;
      }
      case '@recipient/RECIPIENT_DELETE_SUCCESS': {
        draft.recipient = action.payload.recipient;
        break;
      }
      default:
    }
  });
}
