import axios from 'axios'
import store from '../state/store/store'

const API_URL = 'https://tuneshare-2021.herokuapp.com/api'

const User = {
  async show(userId, credentials) {
    let response = await axios.get(`${API_URL}/users/${userId}`, {
      headers: credentials,
    })
    store.dispatch({
      type: 'DISPLAY_USER_PROFILE',
      payload: response.data.user,
    })
  },
}

export default User
