export function deliveryAddRequest(data) {
  return {
    type: '@deilvery/DELIVERY_ADD_REQUEST',
    payload: { data },
  };
}

export function deliveryAddSuccess(delivery) {
  return {
    type: '@deilvery/DELIVERY_ADD_SUCCESS',
    payload: { delivery },
  };
}

export function deliveryAddFailure() {
  return {
    type: '@deilvery/DELIVERY_ADD_FAILURE',
  };
}
