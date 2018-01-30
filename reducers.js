// user

const initialManageUserState = {
  lastUpdated: 0,
  info: {
    name: '',
    uid: '',
  }
}

function manageUser (state = initialManageUserState, action) {
  switch(action.type) {
    case FETCHING_USER_SUCCESS:
      return {
        ...state,
        lastUpdated: Date.now(),
        info: action.user,
      }
    default:
      return state
  }
}

const initialState = {
  isAuthed: false,
  isFetching: false,
  error: '',
}

function user (state = initialState, action) {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        isAuthed: true,
        authedId: action.uid,
      }
    case UNAUTH_USER:
      return {
        ...state,
        isAuthed: false,
        authedId: '',
      }
    case FETCHING_USER:
      return {
        ...state,
        isFetching: true,
      }
    case FETCHING_USER_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    case FETCHING_USER_SUCCESS:
      return action.user === null
        ? {
          ...state,
          isFetching: false,
          error: '',
        }
        : {
          ...state,
          isFetching: false,
          [action.user.uid]: manageUser(state[action.user.uid], action),
        }
    case REMOVE_FETCHING_USER:
      return {
        ...state,
        isFetching: false,
      }
    default:
      return state
  }
}

//post

const initialState = {
  isFetching: true,
  error: '',
}

function post (state = initialState, action) {
  switch(action.type) {
    case FETCHING_POST:
      return {
        ...state,
        isFetching: true,
      }
    case FETCHING_POST_ERROR:
      return {
        ...state,
        error: action.error,
      }
    case ADD_POST:
    case FETCHING_POST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        [action.post.postId]: action.post,
      }
    case REMOVE_FETCHING_POST:
      return {
        ...state,
        isFetching: false,
        error: '', 
      }
    default:
      return state
  }
}

//modal

const initialState = {
  isOpen: false,
  title: '',
  option1: '',
  option2: '',
}

function modal (state = initialState, action) {
  switch(action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
      }
    case CLOSE_MODAL:
      return {
        ...state,
        isOpen: false,
        title: '',
        option1: '',
        option2: '',
      }
    case UPDATE_POST_TEXT:
      return {
        ...state,
        action.newPostText,
      }
    default:
      return state
  }
}

//voteCount

const initialState = {
  isFetching: false,
  error: '', 
}

function voteCount (state= initialState, action) {
  switch(action.type) {
    case FETCHING_VOTE_COUNT:
      return {
        ...state,
        isFetching: true,
      }
    case FETCHING_VOTE_COUNT_ERROR:
      return {
        ...state,
        error: action.error,
      }
    case FETCHING_VOTE_COUNT_SUCCESS:
      return {
        ...state,
        voteCount,//[postId]: option1: voteCount
      }
    default:
      return state
  }
}

//userVoted

const initialManageUserVotedState = {
  selected: '',
}

function manageUserVoted (state = initialManageUserVotedState, action) {
  switch(action.type) {
    case ADD_VOTE:
      return {
        ...state,
        selected: action.vote.selected
      }
    default:
      return state
  }
}

const initialState = {
  isFetching: false,
  error: '', 
}

function userVoted (state= initialState, action) {
  switch(action.type) {
    case FETCHING_USER_VOTED:
      return {
        ...state,
        isFetching: true,
      }
    case FETCHING_USER_VOTED_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    case FETCHING_USER_VOTED_SUCCESS:
      return {
        ...state,
        userVoted, //[{postId: selected: option1/2}]
      }
    case ADD_VOTE:
      return {
        ...state,
        [action.vote.postId]: manageUserVoted(state[action.vote.postId], action),
      }
    default:
      return state
  }
}

//feed

const initialState = {
  isFetching: true,
  error: '', 
}

function feed (state= initialState, action) {
  switch(action.type) {
    case FETCHING_FEED:
      return {
        ...state,
        isFetching: true,
      }
    case FETCHING_FEED_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    case FETCHING_FEED_SUCCESS:
      return {
        ...state,
        isFetching: true,
        postIds,
      }
    case ADD_NEW_POST_TO_FEED:
      return {
        ...state,
        postIds: state.postIds.unshift(action.newPostId)
      }
    default:
      return state
  }
}
