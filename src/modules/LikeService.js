import axios from 'axios'

const API_URL = 'http://localhost:3000/api'

const LikeService = {
  async create(postId, credentials) {
    let response = await axios.post(`${API_URL}/posts/${postId}/likes`, {
      headers: credentials,
    })
    debugger
  },
}

export default LikeService
