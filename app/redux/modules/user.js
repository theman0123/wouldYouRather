import auth, { saveUser, logout } from 'helpers/auth'

const AUTH_USER = 'AUTH_USER'
const UNAUTH_USER = 'UNAUTH_USER'
const FETCHING_USER = 'FETCHING_USER'
const FETCHING_USER_ERROR = 'FETCHING_USER_ERROR'
const FETCHING_USER_SUCCESS = 'FETCHING_USER_SUCCESS'
const REMOVE_FETCHING_USER = 'REMOVE_FETCHING_USER'

const authUser = (uid) => {
  return {
    type: AUTH_USER,
    uid,
  }
}

const unauthUser = () => {
  return {
    type: UNAUTH_USER,
  }
}

const fetchingUser = () => {
  return {
    type: FETCHING_USER,
  }
}

const fetchingUserError = (error) => {
  console.warn(error)
  return {
    type: FETCHING_USER_ERROR,
    error: 'Error Fetching User',
  }
}

const fetchingUserSuccess = (uid, user, timestamp) => {
  return {
    type: FETCHING_USER_SUCCESS,
    uid,
    user,
    timestamp,
  }
}

const removeFetchingUser = () => {
  return {
    type: REMOVE_FETCHING_USER,
  }
}

export function fetchAndHandleUserLogin () {
  return function (dispatch) {
    dispatch(fetchingUser())
    
    return auth().then(({user, credentials}) => {
      const userData = user.providerData[0]
      const userInfo = {
        name: userData.displayName,
        uid: user.uid,
      }
      return dispatch(fetchingUserSuccess(user.uid, userInfo, Date.now()))
    })
      .then(({user}) => saveUser(user))
      .then((user) => dispatch(authUser(user.uid)))
      .catch((error) => dispatch(fetchingUserError(error)))
  }
}

const initialManageUserState = {
  lastUpdated: 0,
  info: {
    name: '',
    uid: '',
  },
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

export default function user (state = initialState, action) {
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
