import axios from 'axios'
import store from '../state/store/store'

const API_URL = 'http://localhost:3000/api'

const Comments = {
  async index(postId) {
    debugger
    let response = await axios.get(`${API_URL}/posts/${postId}/comments`)
    store.dispatch({ type: 'DISPLAY_POST_COMMENTS', payload: response.data })
  },
}

export default Comments
