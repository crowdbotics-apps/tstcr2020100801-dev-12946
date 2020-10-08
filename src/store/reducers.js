import * as types from "./constants"

const initialState = { testConnector: [], registration: [] }

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case types.TESTCONNECTOR_POST__CREATE:
    case types.TESTCONNECTOR_POST__CREATE_SUCCEEDED:
    case types.TESTCONNECTOR_POST__CREATE_FAILED:
      return Object.assign({}, state, {
        testConnector: [...state.testConnector, action.response]
      })
    case types.REGISTRATION_POST_RESTAUTH_REGISTRATION_CREATE:
    case types.REGISTRATION_POST_RESTAUTH_REGISTRATION_CREATE_SUCCEEDED:
    case types.REGISTRATION_POST_RESTAUTH_REGISTRATION_CREATE_FAILED:
      return Object.assign({}, state, {
        registration: [...state.registration, action.response]
      })
    default:
      return state
  }
}
