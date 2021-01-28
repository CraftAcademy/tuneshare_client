import axios from 'axios'
import store from '../state/store/store'

const API_URL = 'http://localhost:3000/api'

const PostService = {
  async index() {
    let response = await axios.get(`${API_URL}/posts`)
    store.dispatch({ type: 'SET_POSTS_INDEX', payload: response.data })
  },
  async create(trackDetails, description) {
    let response = await axios.post(`${API_URL}/posts`, {
      post: {
        track: trackDetails.track,
        artists: trackDetails.artists,
        image: trackDetails.image,
        preview: trackDetails.preview,
        description: description,
      },
    })
    store.dispatch({ type: 'SET_SUCCESS_MESSAGE', payload: response.data })
    return alert(`${response.data.message}`)
  },
}

export default PostService
