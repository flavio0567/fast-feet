export function deliveryAddRequest(data) {
  return {
    type: '@delivery/DELIVERY_ADD_REQUEST',
    payload: { data },
  };
}

export function deliveryEditRequest(data) {
  return {
    type: '@delivery/DELIVERY_EDIT_SUCCESS',
    payload: { data },
  };
}

export function deliveryDeleteRequest(data) {
  return {
    type: '@delivery/DELIVERY_DELETE_REQUEST',
    payload: { data },
  };
}

export function deliverySuccess(delivery) {
  return {
    type: '@delivery/DELIVERY_SUCCESS',
    payload: { delivery },
  };
}

export function deliveryDeleteSuccess() {
  return {
    type: '@delivery/DELIVERY_DELETE_SUCCESS',
  };
}

export function deliveryFailure() {
  return {
    type: '@delivery/DELIVERY_FAILURE',
  };
}
