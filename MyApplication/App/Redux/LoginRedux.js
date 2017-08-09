import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  loginRequest: ['username', 'password'],
  loginSuccess: ['response'],
  loginFailure: ['error'],
  logout: null
})

export const LoginTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: false,
  response: null,
  error: null
})

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state) =>
  state.merge({ fetching: true, response: null })

// successful api lookup
export const success = (state, action) => {
  const { response } = action
  return state.merge({ fetching: false, error: null, response })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, response: null })

/* ------------- Hookup Reducers To Types ------------- */
export const logout = (state) => INITIAL_STATE

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: request,
  [Types.LOGIN_SUCCESS]: success,
  [Types.LOGIN_FAILURE]: failure,
  [Types.LOGOUT]: logout
})
// Is the current user logged in?
export const isLoggedIn = (loginState) => loginState.response !== null
