import produce from 'immer';

const INITIAL_STATE = {
  issue: null,
};

export default function issue(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@issue/REPORT_ISSUE_SUCCESS':
      return produce(state, draft => {
        draft.issue = action.payload.issue;
      });
      default:
        return state;
    }
}
