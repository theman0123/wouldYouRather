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
    isFetching,
    error,
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
    [postId]: {
      option1: [uid],
      option2: [uid],
    }
  },
  userVoted: [
    [postId]: {
      selected: option1/2,
    }
  ],//listeners needed?
  listeners: {
    [listenersId]: true,
  },
  feed: {
    isFetching,
    error,
    postIds: [postId],
  },
}
