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
