import React, { Component, Fragment } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Homepage from './components/homepage/Homepage'
import CategoryDetailPage from './components/categoryDetailPage/CategoryDetailPage'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div className="App">
            <Route exact path='/' component={Homepage} />
            <Route exact path='/:path' component={CategoryDetailPage} />
          </div>
        </Switch>
      </Router>
    )
  }
}

export default App
