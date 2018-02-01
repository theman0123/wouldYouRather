import React from 'react'

import { container, subHeader } from 'sharedStyles/styles.css'
import { optionsContainer, option1, round, option2 } from './styles.css'

function PostDetails ({post}) {
  console.log(post)
  function option1Click () {
    console.log('option1 clicked')
  }
  function option2Click () {
    console.log('option2 clicked')
  }
  return (
    <div className={container}>
      <h3 className={subHeader}>{'Would You Rather...'}</h3>
      <div className={optionsContainer}>
        
        <div className={option1} onClick={option1Click}>{post.option1}</div>
        
        <div className={round}>{'Or'}</div>
        
        <div className={option2} onClick={option2Click}>{post.option2}</div>
        
      </div>
    </div>
  )
}

export default PostDetails
