const rootReducer = (state, action) => {
  switch (action.type) {
    case 'SET_POSTS_INDEX':
      return {
        ...state,
        posts: action.payload.posts,
      }
    case 'SET_SEARCH_INDEX':
      return {
        ...state,
        searchResult: action.payload.tracks,
      }

    case 'SET_TRACK_DETAILS':
      return {
        ...state,
        searchResult: null,
        trackDetails: action.payload,
      }
    case 'SET_ERROR_MESSAGE':
      return {
        ...state,
        errorMessage: action.payload,
      }
    default:
      return state
  }
}

export default rootReducer
