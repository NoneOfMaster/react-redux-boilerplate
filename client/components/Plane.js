import React from 'react';
import { Link } from 'react-router';
import Sky from './Sky';

export default class Plane extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    const destination = this.refs.destination.value;
    this.props.addPlane(destination);
  }

  render() {
    return (
      <div>

        <form className="form" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref="destination" placeholder="enter destination" />
          <input type="submit" hidden /> {/* submit input needed for enter key to work */}
        </form>

        <Sky {...this.props} />
      </div>
    );
  }
}
