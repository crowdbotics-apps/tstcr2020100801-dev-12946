import axios from "axios"
const testConnector = axios.create({
  baseURL: "http://da3097b9b2b0.ngrok.io/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const registration = axios.create({
  baseURL: "https://tstcr2020100801-dev-12946.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function testconnector_post__create(action) {
  return testConnector.post(`/`, { data: action.data })
}
function registration_post_restauth_registration_create(action) {
  return registration.post(`/rest-auth/registration/`, { data: action.data })
}
export const apiService = {
  testconnector_post__create,
  registration_post_restauth_registration_create
}
