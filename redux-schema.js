{
  user: {
    isAuthed,
    isFetching,
    error,
    [uid]: {
      lastUpdated,
      info: {
        uid,
        name,
      }
    }
  },
  modal: {
    isOpen,
    title,
    option1,
    option2,
  },
  posts: {
    [postId]: {
      lastUpdated,
      info: {
        postId,
        title,
        dateCreated,
        authorId: uid,
        option1: text,
        option2: text,
      }
    }
  },
  voteCount: {
    [postId]: 0,
  },
  userVoted: [
    [postId]: {
      selected: option1/2,
    }
  ],
  feed: {
    isFetching,
    error,
    postIds: [postId],
  },
}
