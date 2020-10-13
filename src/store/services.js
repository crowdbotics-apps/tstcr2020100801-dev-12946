import axios from "axios"
const registration = axios.create({
  baseURL: "https://tstcr2020100801-dev-12946.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const test = axios.create({
  baseURL: "http://879976904ff5.ngrok.io",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const testConnector = axios.create({
  baseURL: "http://da3097b9b2b0.ngrok.io/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function registration_post_restauth_registration_create(action) {
  return registration.post(`/rest-auth/registration/`, null, {
    data: action.data
  })
}
function test2_post__create(action) {
  return test.post(`/`, null, { data: action.data })
}
function testconnector_post__create(action) {
  return testConnector.post(`/`, null, { data: action.data })
}
export const apiService = {
  registration_post_restauth_registration_create,
  test2_post__create,
  testconnector_post__create
}
