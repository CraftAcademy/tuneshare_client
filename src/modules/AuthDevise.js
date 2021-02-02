import axios from 'axios'
import store from '../state/store/store'
import AsyncStorage from '@react-native-community/async-storage'

const apiUrl = 'http://localhost:3000'
const defaultOptions = {
  host: apiUrl,
  mode: 'local',
  debug: false,
  useRoles: false,
}
const storage = AsyncStorage
const storageKey = 'auth-storage'
const storageRoleKey = 'auth-roles'
class Auth {
  constructor(options) {
    this.options = { ...defaultOptions, ...options }
    this.roles = options.useRoles ? [] : undefined
    this.apiUrl = `${options.host}${options.prefixUrl ? options.prefixUrl : ''}`
    this.apiAuthUrl = `${this.apiUrl}${
      options.authUrl ? options.authUrl : '/auth'
    }`
    this.emailInput = options.emailInput ? options.emailInput : 'email'
    this.passwordField = options.passwordField
      ? options.passwordField
      : 'password'
    this.signInUrl = `${this.apiAuthUrl}${
      this.options.authUrl ? this.options.authUrl.signIn : '/sign_in'
    }`
    this.signOutUrl = `${this.apiAuthUrl}${
      this.options.authUrl ? this.options.authUrl.signIn : '/sign_out'
    }`
    this.validateTokenUrl = `${this.apiAuthUrl}${
      this.options.authUrl
        ? this.options.authUrl.validateToken
        : '/validate_token'
    }`
    axios.interceptors.response.use(
      response => {
        if (Array.isArray(response.data)) {
          return {
            ...response,
            total: parseInt(response.headers['data-count']),
          }
        }
        return response
      },
      error => {
        return Promise.reject(error)
      }
    )
  }
  test() {
    axios
      .get(this.signInUrl)
      .then(response => {
        console.log(`Connection success: `)
        console.table(response.data)
      })
      .catch(error => {
        if (error.response) {
          console.log('Connection success')
        } else {
          console.log('Connection errror')
        }
      })
  }
  tokenHeaders() {
    return this.session
  }
  signIn(email, password) {
    return new Promise(async (resolve, reject) => {
      try {
        const signInResponse = await axios.post(this.signInUrl, {
          [this.emailInput]: email,
          [this.passwordField]: password,
        })
        this.setSession(signInResponse.headers)
        const validateResponse = await this.validateToken(
          signInResponse.headers
        )
        this.setRoles(validateResponse)
        resolve(validateResponse)
      } catch (error) {
        reject(error)
      }
    })
  }
  validateToken(headers) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.get(this.validateTokenUrl, {
          params: {
            uid: headers.uid,
            client: headers.client,
            'access-token': headers['access-token'],
          },
        })
        store.dispatch({
          type: 'SET_CREDENTIALS',
          payload: response.headers,
        })
        store.dispatch({
          type: 'SET_USER_ID',
          payload: response.data.data.id,
        })
        this.setSession(response.headers)
        resolve(response.data)
      } catch (err) {
        reject(err)
      }
    })
  }
  async setSession(headers) {
    if (!this.session) {
      return (this.session = headers)
    }
    const session = {
      ['access-token']: headers['access-token']
        ? headers['access-token']
        : this.session['access-token'],
      ['cache-control']: headers['cache-control']
        ? headers['cache-control']
        : this.session['cache-control'],
      client: headers.client ? headers.client : this.session.client,
      ['content-type']: headers['content-type']
        ? headers['content-type']
        : this.session['content-type'],
      expiry: headers.expiry ? headers.expiry : this.session.expiry,
      ['token-type']: headers['token-type']
        ? headers['token-type']
        : this.session['token-type'],
      uid: headers.uid ? headers.uid : this.session.uid,
    }
    this.session = { ...session }
    await storage.setItem(storageKey, JSON.stringify(session))
  }
  async setRoles(response) {
    if (this.options.useRoles) {
      try {
        this.roles = response && response.data ? response.data.roles : []
        await storage.setItem(storageRoleKey, JSON.stringify(this.roles))
      } catch (error) {
        console.log(error)
      }
    }
  }
}
export default Auth
