import axios from 'axios'
import store from '../state/store/store'

const API_URL = 'https://tuneshare-ca.herokuapp.com/api'

const PostService = {
  async index() {
    let response = await axios.get(`${API_URL}/posts`)
    store.dispatch({ type: 'SET_POSTS_INDEX', payload: response.data })
  },
  async create(trackDetails, description, navigate, credentials) {
    try {
      let response = await axios.post(
        `${API_URL}/posts`,
        {
          post: {
            track: trackDetails.track,
            artists: trackDetails.artists,
            image: trackDetails.image,
            preview: trackDetails.preview,
            description: description,
          },
        },
        { headers: credentials }
      )
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
    try {
      let response = await axios.delete(
        `${API_URL}/posts/${postId}`,
        { post_id: postId },
      )
      store.dispatch({
        type: 'SET_DELETE_POST',
        payload: postId,
      })
    } catch (error) {
      store.dispatch({
        type: 'SET_ERROR_MESSAGE',
        payload: error.response.data.message,
      })
    }
  },
}

export default PostService
