import produce from 'immer';

const INITIAL_STATE = {
  deliveryman: null,
};

export default function deliveryman(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@deliveryman/DELIVERYMAN_SUCCESS': {
        draft.deliveryman = action.payload.deliveryman;
        break;
      }
      case '@deliveryman/DELIVERYMAN_DELETE_SUCCESS': {
        draft.deliveryman = action.payload.deliveryman;
        break;
      }
      default:
    }
  });
}
