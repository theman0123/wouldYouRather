import React, { Component } from 'react'
import { container, largeHeader, subHeader } from './styles.css'

const Home = () => (
  <div className={container}>
    <div className={largeHeader}>
      {'Would You Rather'}
    </div>
    <p className={subHeader}>
      {'The 100 year old American Classic'}
    </p>
  </div>
)

export default Home
