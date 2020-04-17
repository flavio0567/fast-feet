export function signatureRequest(id, data, path) {
  console.tron.log('dentro da action:', id, data, path)
  return {
    type: '@signature/SIGNATURE_REQUEST',
    payload: { id, data, path }
  };
}

export function signatureSuccess(delivery) {
  return {
    type: '@signature/SIGNATURE_SUCCESS',
    payload: { delivery }
  }
}

export function signatureFailure() {
  return {
    type: '@signature/SIGNATURE_FAILURE',
  }
}
