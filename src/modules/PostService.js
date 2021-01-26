import axios from 'axios'
import store from '../state/store/store'

const API_URL = 'http://localhost:3000/api'

const PostService = {
  async index() {
    let response = await axios.get(`${API_URL}/posts`)
    store.dispatch({ type: 'SET_POSTS_INDEX', payload: response.data })
  },
}

export default PostService
