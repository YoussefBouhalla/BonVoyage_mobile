const initialState = {}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'OURTOURSSEARCH':
    return payload

  default:
    return state
  }
}
