import { ref } from 'config/constants'

function saveToPosts (post) {
  const postId = ref.child('posts').push().key
  const postPromise = ref.child(`posts/${postId}`).set({...post, postId})
  
  return {
    postId,
    postPromise,
  }
}

function saveVoteCount (postId) {
  return ref.child(`voteCount/${postId}`).set({1: 0, 2: 0})
}

export function savePost (post) {
  const { postId, postPromise } = saveToPosts(post)
  
  return Promise.all([
    postPromise,
    saveVoteCount(postId)
  ]).then(() => ({...post, postId}))
}

export function fetchPostsIds () {
  return ref.child('posts').once('value')
    .then((snapshot) => snapshot.val() || {}) 
  }

export function fetchUserVoted (uid) {
  return ref.child(`userVoted/${uid}`).once('value')
    .then((snapshot) => snapshot.val() || {})
}

export function saveUserVote (uid, postId, option) {
  return ref.child(`userVoted/${uid}/${postId}`).set({selected: option})
}


//from now on always start on 0!
//we could then just run a simple reduce function like so:
//      snapshot.val()
//        ? snapshot.val().reduce((initial, current) => {
//        initial[current] = snapshot.val().current
//      }, {})
//      : {}
//or do this shot.val()[1], snapshot.val().reverse.pop)

export function fetchVoteCount (postId) {
  return ref.child(`voteCount/${postId}`).once('value')
    .then((snapshot) => ({1: snapshot.val()[1], 2: snapshot.val()[2],}) || {})
}

export function incrementVoteCount (postId, option) {
  return ref.child(`voteCount/${postId}/${option}`)
    .transaction((currentValue = 0) => currentValue + 1)
}

export function decrementVoteCount (postId, option) {
  return ref.child(`voteCount/${postId}/${option}`)
    .transaction((currentValue = 0) => currentValue - 1)
}

export function fetchPost (postId) {
  return ref.child(`/posts/${postId}`).once('value')
    .then((snapshot) => snapshot.val())
}
