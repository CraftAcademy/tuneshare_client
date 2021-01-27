const rootReducer = (state, action) => {
  switch (action.type) {
    case 'SET_POSTS_INDEX': 
      return {
        ...state,
        posts: action.payload.posts
      }
      case 'SET_SEARCH_INDEX': 
      return {
        ...state,
        searchResult: action.payload.tracks
      }
    default:
    return state
  }
}

export default rootReducer