/* ***********************************************************
* A short word on how to use this automagically generated file.
* We're often asked in the ignite gitter channel how to connect
* to a to a third party api, so we thought we'd demonstrate - but
* you should know you can use sagas for other flow control too.
*
* Other points:
*  - You'll need to add this saga to sagas/index.js
*  - This template uses the api declared in sagas/index.js, so
*    you'll need to define a constant in that file.
*************************************************************/

import { call, put } from 'redux-saga/effects'
import LoginActions from '../Redux/LoginRedux'

export function * login (api, { username, password }) {
  if (password === '') {
    // dispatch failure

    yield put(LoginActions.loginFailure('WRONG'))
  } else {

    const response = yield call(api.login, username, password)
    if(response.ok)
    {
              // dispatch successful logins
        if(response.data.Ret == 0)
        {
          yield put(LoginActions.loginSuccess(response.data))
        }else{
          yield put(LoginActions.loginFailure("Incorrect"))
        }
      }else{
          yield put(LoginActions.loginFailure("Network failure"));
      }
  }
}
