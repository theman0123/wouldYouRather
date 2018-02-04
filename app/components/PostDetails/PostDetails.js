import React from 'react'

import { container, subHeader } from 'sharedStyles/styles.css'
import { optionsContainer, option1, roundOr, option2, vote, percentage, agree, originalQuestion } from './styles.css'

const PostDetails = (props) => {

  const voteCountOne = props.voteCount ? props.voteCount[1]: null
  const voteCountTwo = props.voteCount ? props.voteCount[2]: null
  const percentageOne = voteCountOne / (voteCountOne + voteCountTwo)
  const percentageTwo = voteCountTwo / (voteCountOne + voteCountTwo)

  return (
    <div className={container}>
      <h3 className={subHeader}>{'Would You Rather...'}</h3>
        
          {props.userVoted
            ? (
              <div className={optionsContainer}>
                <div className={option1} onClick={props.option1Clicked}>
                  {props.userVoted === 1 ? <span className={vote}/> : null}
                  
                  <div className={percentage}> {Math.round(percentageOne * 100)}{'%'}</div>
                  
                  <div className={agree}> {voteCountOne}{' agrees'}</div>
                  
                  <div className={originalQuestion}> {props.post.option1}</div>
                </div>
                <div className={option2} onClick={props.option2Clicked}>
                  
                  <div className={percentage}> {Math.round(percentageTwo * 100)}{'%'}</div>
                  
                  <div className={agree}> {voteCountTwo}{' agrees'}</div>
                  
                  <div className={originalQuestion}> {props.post.option2}</div>
                  
                  {props.userVoted === 2 ? <span className={vote}/> : null}
                </div>
              </div>
            )
            : (
              <div className={optionsContainer}>
                <div className={option1} onClick={props.option1Clicked}>{props.post.option1}</div>

                <div className={roundOr}>{'Or'}</div>

                <div className={option2} onClick={props.option2Clicked}>{props.post.option2}</div>
              </div>
            )
          }
      </div>

  )
}

export default PostDetails
