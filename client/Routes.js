import React from 'react'

// import react router deps
import { Router, Route, IndexRoute } from 'react-router'
// binds react and redux (which can be used with anything not just react)
import { Provider } from 'react-redux'
// curly bracket for named export instead of default export, exported redux history instead of browserHistory
import store, { history } from './store'

// Import Components
// todo: index these
import ReduxConnection from './ReduxConnection'
import Sky from './components/Sky'
import Bird from './components/Bird'
import Plane from './components/Plane'

export default class Routes extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={ReduxConnection}>
            <IndexRoute component={Sky}></IndexRoute>
            <Route path="/bird" component={Bird}></Route>
            <Route path="/plane" component={Plane}></Route>
          </Route>
        </Router>
      </Provider>
    )
  }
}
