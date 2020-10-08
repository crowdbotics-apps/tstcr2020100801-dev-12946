import { put, call, all, spawn, takeEvery } from "redux-saga/effects"
import { apiService } from "./services"
import * as types from "./constants"
function* testconnector_post__createWorker(action) {
  try {
    const result = yield call(apiService.testconnector_post__create, action)
    yield put(actions.testconnector_post__createSucceeded(result, action))
  } catch (err) {
    yield put(actions.testconnector_post__createFailed(err, action))
  }
}
function* testconnector_post__createWatcher() {
  yield takeEvery(
    types.TESTCONNECTOR_POST__CREATE,
    testconnector_post__createWorker
  )
}
function* registration_post_restauth_registration_createWorker(action) {
  try {
    const result = yield call(
      apiService.registration_post_restauth_registration_create,
      action
    )
    yield put(
      actions.registration_post_restauth_registration_createSucceeded(
        result,
        action
      )
    )
  } catch (err) {
    yield put(
      actions.registration_post_restauth_registration_createFailed(err, action)
    )
  }
}
function* registration_post_restauth_registration_createWatcher() {
  yield takeEvery(
    types.REGISTRATION_POST_RESTAUTH_REGISTRATION_CREATE,
    registration_post_restauth_registration_createWorker
  )
}
export default function* rootSaga() {
  const sagas = [
    testconnector_post__createWatcher,
    registration_post_restauth_registration_createWatcher
  ]
  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      })
    )
  )
}
