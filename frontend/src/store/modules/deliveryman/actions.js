export function deliverymanAddRequest(data) {
  return {
    type: '@deliveryman/DELIVERYMAN_ADD_REQUEST',
    payload: { data },
  };
}

export function deliverymanEditRequest(data) {
  return {
    type: '@deliveryman/DELIVERYMAN_EDIT_REQUEST',
    payload: { data },
  };
}

export function deliverymanDeleteRequest(data) {
  return {
    type: '@deliveryman/DELIVERYMAN_DELETE_REQUEST',
    payload: { data },
  };
}

export function deliverymanSuccess(delivery) {
  return {
    type: '@deliveryman/DELIVERYMAN_SUCCESS',
    payload: { delivery },
  };
}

export function deliverymanDeleteSuccess() {
  return {
    type: '@deliveryman/DELIVERYMAN_DELETE_SUCCESS',
  };
}

export function deliverymanFailure() {
  return {
    type: '@deliveryman/DELIVERYMAN_FAILURE',
  };
}
