import axios from 'axios'
import store from '../state/store/store'

const API_URL = 'http://localhost:3000/api'

const PostService = {
  async index() {
    let response = await axios.get(`${API_URL}/posts`)
    store.dispatch({ type: 'SET_POSTS_INDEX', payload: response.data })
  },
  async create(trackDetails, description, navigate) {
    try {
      let response = await axios.post(`${API_URL}/posts`, {
        post: {
          track: trackDetails.track,
          artists: trackDetails.artists,
          image: trackDetails.image,
          preview: trackDetails.preview,
          description: description,
        },
      })
      navigate('HomeScreen')
      return alert(`${response.data.message}`)
    } catch (error) {
      store.dispatch({
        type: 'SET_ERROR_MESSAGE',
        payload: error.response.data.message,
      })
    }
  },
  async delete(postId) {
    let response = await axios.delete(`${API_URL}/posts/${postId}`, {
      post: { post_id: postId },
    })
    store.dispatch({
      type: "SET_DELETE_POST",
      payload: []
    })
  },
}

export default PostService
