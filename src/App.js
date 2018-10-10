import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Homepage from './components/homepage/Homepage'
import CategoryDetailPage from './components/categoryDetailPage/CategoryDetailPage'

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/:path' component={CategoryDetailPage} />
    </Switch>
  </Router>
)

export default App
