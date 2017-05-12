import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'

export default class Main extends React.Component {

  render() {
    return (
      <div>
        <h1>
          <Link to="/">Redux Boiler Plate</Link>
        </h1>

        <div className="nav-bar">
          <NavLink to="/bird" activeClassName="active">Add A Bird</NavLink>
          <NavLink to="/plane" activeClassName="active">Add A Plane</NavLink>
        </div>

        {/* because just this.props.childen doesn't get you access to the children's props  */}
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}
