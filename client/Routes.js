import React from 'react'

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// Import Components
// todo: index these
import Main from './components/Main'
import Sky from './components/Sky'
import Bird from './components/Bird'
import Plane from './components/Plane'

export default class Routes extends React.Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={Sky}></IndexRoute>
          <Route path="/bird" component={Bird}></Route>
          <Route path="/plane" component={Plane}></Route>
        </Route>
      </Router>
    )
  }
}
