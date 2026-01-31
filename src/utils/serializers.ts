// This function must be used for every response that is sent from the server.
function serializeResponse(data = {}, errors = {}) {
  return {
    success: Object.keys(errors).length === 0,
    errors,
    data,
  };
}

// Exports.
export { serializeResponse };
