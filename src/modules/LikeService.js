import axios from 'axios'

const API_URL = 'https://tuneshare-2021.herokuapp.com/api'

const LikeService = {
  async create(postId, credentials) {
    let response = await axios.post(
      `${API_URL}/posts/${postId}/likes`,
      { post_id: postId },
      { headers: credentials }
    )
  },
}

export default LikeService
