import React from 'react';
import { Link } from 'react-router';
import NavLink from './NavLink';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>
          <Link to="/">Redux Boiler Plate</Link>
        </h1>

        <div className="nav-bar">
          <NavLink to="/someComponent" activeClassName="active">to someComponent</NavLink>
          <NavLink to="/someComponent2" activeClassName="active">to someComponent2</NavLink>
        </div>

        {/* because just this.props.childen doesn't get you access to the children's props  */}
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}
