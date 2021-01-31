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
    case "DISPLAY_POST_COMMENTS":
      return {
        ...state,
        postComments: action.payload,
      }
    case 'SET_POST_SHOW': 
      return {
        ...state,
        singlePost: action.payload,
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
