import { fetchUserVoted, incrementVoteCount, decrementVoteCount, saveUserVote } from 'helpers/api.js'

const FETCHING_USER_VOTED = 'FETCHING_USER_VOTED'
const FETCHING_USER_VOTED_ERROR = 'FETCHING_USER_VOTED_ERROR'
const FETCHING_USER_VOTED_SUCCESS = 'FETCHING_USER_VOTED_SUCCESS'
export const ADD_VOTE = 'ADD_VOTE'

const fetchingUserVoted = () => {
  return {
    type: FETCHING_USER_VOTED,
  }
}

const fetchingUserVotedError = (error) => {
  return {
    type: FETCHING_USER_VOTED_ERROR,
    error: 'Error Fetching User Votes... Or the user has none',
  }
}

const fetchingUserVotedSuccess = (uid, userVotes) => {
  return {
    type: FETCHING_USER_VOTED_SUCCESS,
    uid,
    userVotes,
  }
}

const addVote = (postId, option) => {
  return {
    type: ADD_VOTE,
    postId,
    option,
  }
}

export function setUserVoted () {
  return function (dispatch, getState) {
    const uid = getState().user.authedId
    
    dispatch(fetchingUserVoted())

    fetchUserVoted(uid)
      .then((userVotes) => dispatch(fetchingUserVotedSuccess(uid, userVotes)))
      .catch((error) => dispatch(fetchingUserVotedError(error)))
  }
}
///need to change this
//should be an array of database.voteCount.postId.1/2: [uid, uid, uid]
//switching votes should remove user from one array and adding to another.
//voteCount should just pull array length and add one.
export function addAndHandleUserVote (postId, option) {
  return function (dispatch, getState) {
    const uid = getState().user.authedId
    const userVote = getState().userVoted.postId
    const changeSelected = option === 1 ? 2 : 1

    userVote === undefined
      ? (dispatch(addVote(postId, option)), incrementVoteCount(postId, option),
      saveUserVote(uid, postId, option))
      : userVote.option === option ? null
        : (
          dispatch(addVote(postId, option)),
          decrementVoteCount(postId, changeSelected), incrementVoteCount(postId, option),
          setUserVoted(uid, postId, option))
            .catch((error) => {
              console.warn(error)
              dispatch(addVote(postId, null))
            })
  }
}

const initialManageUserVotedState = {
  selected: '',
}

function manageUserVoted (state = initialManageUserVotedState, action) {
  switch(action.type) {
    case ADD_VOTE:
      return {
        ...state,
        selected: action.option
      }
    default:
      return state
  }
}
  

const initialState = {
  isFetching: false,
  error: '', 
}

export default function userVoted (state= initialState, action) {
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
        isFetching: false,
        [action.uid]: action.userVotes,
      }
    case ADD_VOTE:
      return {
        ...state,
        [action.postId]: manageUserVoted(state[action.postId], action),
      }
    default:
      return state
  }
}