import produce from 'immer';

const INITIAL_STATE = {
  signature: null,
};

export default function issue(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@signature/SIGNATURE_SUCCESS':
      return produce(state, draft => {
        draft.signature = action.payload.delivery;
      });
      default:
        return state;
    }
}
