export function reportIssueRequest(id, description) {
  console.tron.log('dentro da action:', id, description)
  return {
    type: '@issue/REPORT_ISSUE_REQUEST',
    payload: { id, description }
  };
}

export function reportIssueSuccess(issue) {
  return {
    type: '@issue/REPORT_ISSUE_SUCCESS',
    payload: { issue },
  }
}

export function reportIssueFailure() {
  return {
    type: '@issue/REPORT_ISSUE_FAILURE',
  }
}
