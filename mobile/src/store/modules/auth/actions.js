export function logonRequest(deliveryman_id) {
  return {
    type: '@auth/LOGON_REQUEST',
    payload: { deliveryman_id },
  };
}

export function logonSuccess(user) {
  return {
    type: '@auth/LOGON_SUCCESS',
    payload: { user },
  };
}

export function logonFailure() {
  return {
    type: '@auth/LOGON_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
