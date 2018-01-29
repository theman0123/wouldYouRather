const OPEN_MODAL = 'OPEN_MODAL'
const CLOSE_MODAL = 'CLOSE_MODAL'
const UPDATE_MODAL_TITLE = 'UPDATE_MODAL_TITLE'
const UPDATE_MODAL_OPTION1 = 'UPDATE_MODAL_OPTION1'
const UPDATE_MODAL_OPTION2 = 'UPDATE_MODAL_OPTION2'

export const openModal = () => {
  return {
    type: OPEN_MODAL,
  }
}

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  }
}

export const updateModalTitle = (title) => {
  return {
    type: UPDATE_MODAL_TITLE,
    title,
  }
}

export const updateModalOption1 = (option1) => {
  return {
    type: UPDATE_MODAL_OPTION1,
    option1,
  }
}

export const updateModalOption2 = (option2) => {
  return {
    type: UPDATE_MODAL_OPTION2,
    option2,
  }
}

const initialState = {
  isOpen: false,
  title: '',
  option1: '',
  option2: '',
}

export default function modal (state = initialState, action) {
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
    case UPDATE_MODAL_TITLE:
      return {
        ...state,
        title: action.title,
      }
    case UPDATE_MODAL_OPTION1:
      return {
        ...state,
        option1: action.option1,
      }
    case UPDATE_MODAL_OPTION2:
      return {
        ...state,
        option2: action.option2,
      }
    default:
      return state
  }
}
