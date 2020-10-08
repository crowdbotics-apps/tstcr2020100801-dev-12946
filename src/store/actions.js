import * as types from "./constants"

export const registration_post_restauth_registration_create = data => ({
  type: types.REGISTRATION_POST_RESTAUTH_REGISTRATION_CREATE,
  data
})

export const registration_post_restauth_registration_createSucceeded = (
  response,
  starter
) => ({
  type: types.REGISTRATION_POST_RESTAUTH_REGISTRATION_CREATE_SUCCEEDED,
  response,
  starter
})

export const registration_post_restauth_registration_createFailed = (
  error,
  starter
) => ({
  type: types.REGISTRATION_POST_RESTAUTH_REGISTRATION_CREATE_FAILED,
  error,
  starter
})
export const testconnector_post__create = data => ({
  type: types.TESTCONNECTOR_POST__CREATE,
  data
})
export const testconnector_post__createSucceeded = (response, starter) => ({
  type: types.TESTCONNECTOR_POST__CREATE_SUCCEEDED,
  response,
  starter
})
export const testconnector_post__createFailed = (error, starter) => ({
  type: types.TESTCONNECTOR_POST__CREATE_FAILED,
  error,
  starter
})
