import axios from 'axios'
import store from '../state/store/store'

const API_URL = 'https://tuneshare-2021.herokuapp.com/api'

const Comments = {
  async index(postId) {
    let response = await axios.get(`${API_URL}/posts/${postId}/comments`)
    store.dispatch({
      type: 'DISPLAY_POST_COMMENTS',
      payload: response.data.comments,
    })
  },
  async create(postId, credentials, text) {
    let response = await axios.post(
      `${API_URL}/posts/${postId}/comments`,
      {
        post_id: postId,
        content: text,
      },
      { headers: credentials }
    )
  },
}

export default Comments
