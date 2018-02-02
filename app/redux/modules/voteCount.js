import { fetchVoteCount } from 'helpers/api'
import { ADD_VOTE } from './voteCount'

const FETCHING_VOTE_COUNT = 'FETCHING_VOTE_COUNT'
const FETCHING_VOTE_COUNT_SUCCESS = 'FETCHING_VOTE_COUNT_SUCCESS'
const FETCHING_VOTE_COUNT_ERROR = 'FETCHING_VOTE_COUNT_ERROR'

const fetchingVoteCount = () => {
  return {
    type: FETCHING_VOTE_COUNT,
  }
}

const fetchingVoteCountError = (error) => {
  return {
    type: FETCHING_VOTE_COUNT_ERROR,
    error: 'Error Fetching Vote Count',
  }
}

const fetchingVoteCountSuccess = (voteCount) => {
  return {
    type: FETCHING_VOTE_COUNT_SUCCESS,
    voteCount,
  }
}

export function initFetchVoteCount () {
  return function (dispatch) {
    dispatch(fetchingVoteCount())
    
    fetchVoteCount(postId)
      .then((voteCount) => dispatch(fetchingVoteCountSuccess(voteCount)))
      .catch((error) => dispatch(fetchingVoteCountError(error)))
  }
}
  
const initialState = {
  isFetching: false,
  error: '', 
}

export default function voteCount (state= initialState, action) {
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
        voteCount,
      }
    case ADD_VOTE:
      return typeof state[action.postId] === 'undefined'
        ? state
        : {
          ...state,
          [action.postId]: count(state[action.postId], action),
        }
    default:
      return state
  }
}
  