import React from 'react'
import PropTypes from 'prop-types'
import { default as ReactModal } from 'react-modal'
//import { formatDuck } from 'helpers/utils'
import {
  Top, pointer, InputContainer,
  Input, submitBtn, darkBtn } from './styles.css'

const modalStyles = {
  content: {
    width: 350,
    margin: '0px auto',
    height: 520,
    borderRadius: 5,
    background: '#EBEBEB',
    padding: 0,
  },
}

const Modal = (props) => {
  function submitQuery () {
    console.log('submit', props.title, props.option1, props.option2)
    
  }

  return (
    <div>
      <span className={darkBtn} onClick={props.openModal}>{'New Decision'}</span>

      <ReactModal
        style={modalStyles}
        isOpen={props.isOpen}
        onRequestClose={props.closeModal}
        contentLabel='Modal for Writing a Decision'>

        <div className={Top}>
          <span>{'New Poll!'}</span>
          <span onClick={props.closeModal} className={pointer}>{'X'}</span>
        </div>
        <div className={InputContainer}>
          <textarea
            onChange={(e) => props.updateModalTitle(e.target.value)}
            value={props.title}
            maxLength={140}
            type='text'
            className={Input}
            placeholder="Title" />
        </div>
        <div className={InputContainer}>
          <textarea
            onChange={(e) => props.updateModalOption1(e.target.value)}
            value={props.option1}
            maxLength={140}
            type='text'
            className={Input}
            placeholder="What's on your mind?" />
        </div>
        <div className={InputContainer}>
          <textarea
            onChange={(e) => props.updateModalOption2(e.target.value)}
            value={props.option2}
            maxLength={140}
            type='text'
            className={Input}
            placeholder="What's on your mind?" />
        </div>
        <button
          className={submitBtn}
          disabled={props.isSubmitDisabled}
          onClick={submitQuery}>
          {'Finished'}
        </button>
      </ReactModal>
    </div>
  )
}
ReactModal.setAppElement('body');

const {object, string, func, bool} = PropTypes

Modal.propTypes = {
  isOpen: bool.isRequired,
  isSubmitDisabled: bool.isRequired,
  user: object.isRequired,
  openModal: func.isRequired,
  closeModal: func.isRequired,
  title: string.isRequired,
  option1: string.isRequired,
  option2: string.isRequired,
}

export default Modal
