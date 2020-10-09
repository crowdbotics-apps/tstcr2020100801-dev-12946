import axios from "axios"
const test = axios.create({
  baseURL: "http://879976904ff5.ngrok.io",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const testConnector = axios.create({
  baseURL: "http://da3097b9b2b0.ngrok.io/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const registration = axios.create({
  baseURL: "https://tstcr2020100801-dev-12946.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const tstcrAPI = axios.create({
  baseURL: "https://tstcr2020100801-dev-12946.botics.co/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function test2_post__create(action) {
  return test.post(`/`, null, { data: action.data })
}
function testconnector_post__create(action) {
  return testConnector.post(`/`, { data: action.data })
}
function registration_post_restauth_registration_create(action) {
  return registration.post(`/rest-auth/registration/`, null, { data: action.data })
}
function api_v1_customtext_list(action) {
  return tstcrAPI.get(`/api/v1/customtext/`)
}
function api_v1_customtext_read(action) {
  return tstcrAPI.get(`/api/v1/customtext/${action.id}/`)
}
function api_v1_customtext_update(action) {
  return tstcrAPI.put(`/api/v1/customtext/${action.id}/`, { data: action.data })
}
function api_v1_customtext_partial_update(action) {
  return tstcrAPI.patch(`/api/v1/customtext/${action.id}/`, {
    data: action.data
  })
}
function api_v1_homepage_list(action) {
  return tstcrAPI.get(`/api/v1/homepage/`)
}
function api_v1_homepage_read(action) {
  return tstcrAPI.get(`/api/v1/homepage/${action.id}/`)
}
function api_v1_homepage_update(action) {
  return tstcrAPI.put(`/api/v1/homepage/${action.id}/`, { data: action.data })
}
function api_v1_homepage_partial_update(action) {
  return tstcrAPI.patch(`/api/v1/homepage/${action.id}/`, { data: action.data })
}
function api_v1_login_create(action) {
  return tstcrAPI.post(`/api/v1/login/`)
}
function api_v1_signup_create(action) {
  return tstcrAPI.post(`/api/v1/signup/`, { data: action.data })
}
function rest_auth_login_create(action) {
  return tstcrAPI.post(`/rest-auth/login/`, { data: action.data })
}
function rest_auth_logout_list(action) {
  return tstcrAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(action) {
  return tstcrAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(action) {
  return tstcrAPI.post(`/rest-auth/password/change/`, { data: action.data })
}
function rest_auth_password_reset_create(action) {
  return tstcrAPI.post(`/rest-auth/password/reset/`, { data: action.data })
}
function rest_auth_password_reset_confirm_create(action) {
  return tstcrAPI.post(`/rest-auth/password/reset/confirm/`, {
    data: action.data
  })
}
function rest_auth_registration_create(action) {
  return tstcrAPI.post(`/rest-auth/registration/`, { data: action.data })
}
function rest_auth_registration_verify_email_create(action) {
  return tstcrAPI.post(`/rest-auth/registration/verify-email/`, {
    data: action.data
  })
}
function rest_auth_user_read(action) {
  return tstcrAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(action) {
  return tstcrAPI.put(`/rest-auth/user/`, { data: action.data })
}
function rest_auth_user_partial_update(action) {
  return tstcrAPI.patch(`/rest-auth/user/`, { data: action.data })
}
export const apiService = {
  test2_post__create,
  testconnector_post__create,
  registration_post_restauth_registration_create,
  api_v1_customtext_list,
  api_v1_customtext_read,
  api_v1_customtext_update,
  api_v1_customtext_partial_update,
  api_v1_homepage_list,
  api_v1_homepage_read,
  api_v1_homepage_update,
  api_v1_homepage_partial_update,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_list,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
