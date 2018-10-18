import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Homepage from './containers/homepage/Homepage'
import CategoryDetailPage from './containers/categoryDetailPage/CategoryDetailPage'

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/:path' component={CategoryDetailPage} />
    </Switch>
  </Router>
)

export default App
