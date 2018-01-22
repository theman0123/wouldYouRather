import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Navigation } from 'components'
import { HomeContainer, LoginContainer } from 'containers'
import * as styles from 'sharedStyles/styles.css'

function App () {
  return (
    <Router>
      <div>
        <Navigation isAuthed={false}/>
        
        <Route exact path='/' component={HomeContainer} />
        <Route path='/login' component={LoginContainer} />
      </div>
    </Router>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
