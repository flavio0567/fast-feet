export function recipientAddRequest(data) {
  return {
    type: '@recipient/RECIPIENT_ADD_REQUEST',
    payload: { data },
  };
}

export function recipientEditRequest(data) {
  return {
    type: '@recipient/RECIPIENT_EDIT_REQUEST',
    payload: { data },
  };
}

export function recipientDeleteRequest(data) {
  return {
    type: '@recipient/RECIPIENT_DELETE_REQUEST',
    payload: { data },
  };
}

export function recipientSuccess(recipient) {
  return {
    type: '@recipient/RECIPIENT_SUCCESS',
    payload: { recipient },
  };
}

export function recipientDeleteSuccess() {
  return {
    type: '@recipient/RECIPIENT_DELETE_SUCCESS',
  };
}

export function recipientFailure() {
  return {
    type: '@recipient/RECIPIENT_FAILURE',
  };
}
