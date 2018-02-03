import React from 'react'

import { container, subHeader } from 'sharedStyles/styles.css'
import { optionsContainer, option1, roundOr, option2, vote, percentage, agree, originalQuestion } from './styles.css'
//add in vote percentage per option
//and mark which div the user clicked on
const PostDetails = (props) => {
  console.log(props)
  return (
    <div className={container}>
      <h3 className={subHeader}>{'Would You Rather...'}</h3>
      <div className={optionsContainer}>
        
        <div className={option1} onClick={props.option1Clicked}>
          <div>
            <span className={vote}/>
          </div>
            <div className={percentage}> {'100%'}</div>
            <div className={agree}> {'3 agree'}</div>
            <div className={originalQuestion}> {props.post.option1}</div>
          <div style={{textAlign: 'center', margin: '10px',}}>
            {props.post.option1}
          </div>
        </div>
        
        <div className={roundOr}>{'Or'}</div>
        
        <div className={option2} onClick={props.option2Clicked}>{props.post.option2}</div>
        
      </div>
    </div>
  )
}

export default PostDetails
