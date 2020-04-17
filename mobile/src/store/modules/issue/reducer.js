import produce from 'immer';

const INITIAL_STATE = {
  issue: null,
};

export default function issue(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@issue/REPORT_ISSUE_SUCCESS': {
        draft.issue = action.payload.issue;
        break
      }
      default:
    }
  });
}
