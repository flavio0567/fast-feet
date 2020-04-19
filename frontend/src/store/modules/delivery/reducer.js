import produce from 'immer';

const INITIAL_STATE = {
  delivery: null,
};

export default function delivery(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@delivery/DELIVERY_ADD_SUCCESS': {
        draft.delivery = action.payload.delivery;
        break;
      }
      default:
    }
  });
}
