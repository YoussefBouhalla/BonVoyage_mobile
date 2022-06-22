const initialState = []

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'SETCITIES':
    return payload

  default:
    return state
  }
}
