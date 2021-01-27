const rootReducer = (state, action) => {
  switch (action.type) {
    case 'SET_POSTS_INDEX': 
      return {
        ...state,
        posts: action.payload.posts
      }
    default:
    return state
  }
}

export default rootReducer