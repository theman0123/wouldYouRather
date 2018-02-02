import React from 'react'

import { container, subHeader } from 'sharedStyles/styles.css'
import { optionsContainer, option1, round, option2 } from './styles.css'
//add in vote percentage per option
//and mark which div the user clicked on
const PostDetails = (props) => {
  return (
    <div className={container}>
      <h3 className={subHeader}>{'Would You Rather...'}</h3>
      <div className={optionsContainer}>
        
        <div className={option1} onClick={props.option1Clicked}>{props.post.option1}</div>
        
        <div className={round}>{'Or'}</div>
        
        <div className={option2} onClick={props.option2Clicked}>{props.post.option2}</div>
        
      </div>
    </div>
  )
}

export default PostDetails
