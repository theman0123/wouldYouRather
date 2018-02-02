import { fetchUserVoted } from 'helpers/api.js'

const FETCHING_USER_VOTED = 'FETCHING_USER_VOTED'
const FETCHING_USER_VOTED_ERROR = 'FETCHING_USER_VOTED_ERROR'
const FETCHING_USER_VOTED_SUCCESS = 'FETCHING_USER_VOTED_SUCCESS'
const ADD_VOTE = 'ADD_VOTE'

// userVoted

export const fetchingUserVoted = () => {
  return {
    type: FETCHING_USER_VOTED,
  }
}

export const fetchingUserVotedError = (error) => {
  return {
    type: FETCHING_USER_VOTED_ERROR,
    error: 'Error Fetching User Votes... Or the user has none',
  }
}

export const fetchingUserVotedSuccess = (userVotes) => {
  return {
    type: FETCHING_USER_VOTED_SUCCESS,
    userVoted,
  }
}
//add vote should cancel a pre-existing vote (if exists)
export const addVote = (postId, option) => {
  return {
    type: ADD_VOTE,
    postId,
    option,//object with selected: option1/2
  }
}

export function setUserVoted () {
  return function (dispatch, getState) {
    const uid = getState().user.authedId
    
    dispatch(fetchingUserVoted())

    fetchUserVoted(uid)
      .then((userVotes) => dispatch(fetchingUserVotedSuccess(userVotes)))
      .catch((error) => dispatch(fetchingUserVotedError(error)))
  }
}

export function addAndHandleUserVote (postId, option) {
  return function (dispatch, getState) {
    const uid = getState().user.authedId
    const userVote = getState().userVoted.postId
    const changeSelected = option === 1 ? 2 : 1
    
    !userVote ? dispatch(addVote(postId, option))
      : userVote.option === option ? null
        : (
          dispatch(addVote(postId, option)),
          decrementVoteCount(postId, changeSelected), incrementVoteCount(postId, option))
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
        selected: action.postId.selected
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
        userVotes, //[{postId: selected: option1/2}]
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