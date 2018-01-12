// user

{
  type: AUTH_USER,
}

{
  type: UNAUTH_USER,
}

{
  type: FETCHING_USER,
}

{
  type: FETCHING_USER_ERROR,
  error: 'Error Fetching User',
}

{
  type: FETCHING_USER_SUCCESS,
  user,
}

{
  type: REMOVE_FETCHING_USER,
}


//post

{
  type: FETCHING_POST,
}

{
  type: FETCHING_POST_ERROR,
  error: 'Error Fetching Post',
}

{
  type: FETCHING_POST_SUCCESS,
  posts,
}

{
  type: ADD_POST,
  post,
}

{
  type: REMOVE_FETCHING_POST,
}

// modal

{
  type: OPEN_MODAL,
}

{
  type: CLOSE_MODAL,
}

{
  type: UPDATE_POST_TITLE,
  newPostTitle,
}

{
  type: UPDATE_POST_OPTION1,
  newPostOption1,
}

{
  type: UPDATE_POST_OPTION2,
  newPostOption2,
}

// voteCount

{
  type: FETCHING_VOTE_COUNT,
}

{
  type: FETCHING_VOTE_COUNT_ERROR,
  error: 'Error Fetching Vote Count',
}

{
  FETCHING: type_VOTE_COUNT_SUCCESS,
  voteCount,
}

// userVoted

{
  type: FETCHING_USER_VOTED,
}

{
  type: FETCHING_USER_VOTED_ERROR,
  error: 'Error Fetching User Votes',
}

{
  type: FETCHING_USER_VOTED_SUCCESS,
  userVoted,
}
//add vote should cancel a pre-existing vote (if exists)
{
  type: ADD_VOTE,
  postId,//object with selected: option1/2
}

//feed

{
  type: FETCHING_FEED,
}

{
  type: FETCHING_FEED_ERROR,
  error: 'Error Fetching Would You Rather Feed',
}

{
  type: FETCHING_FEED_SUCCESS,
  postIds,
}

{
  type: ADD_NEW_POST_TO_FEED,
  newPostId,
}

