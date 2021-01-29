import axios from 'axios'
import store from '../state/store/store'

const API_URL = 'http://localhost:3000/api'

const TrackService = {
  async index(search) {
    let response = await axios.get(`${API_URL}/tracks`, {
      params: {
        q: search,
      },
    })
    store.dispatch({ type: 'SET_SEARCH_INDEX', payload: response.data })
  },
}

export default TrackService
