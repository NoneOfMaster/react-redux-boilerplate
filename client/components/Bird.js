import React from 'react'
import { Link } from 'react-router'
import Sky from './Sky'

export default class Bird extends React.Component {

  handleSubmit(e) {
    e.preventDefault()
    const name = this.refs.name.value
    const species = this.refs.type.value // since 'type; is already a key of all actions
    this.props.addBird(name, species)
  }

  render() {
    return (
      <div>

        <form className="form" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref="name" placeholder="name" />
          <input type="text" ref="type" placeholder="type" />
          <input type="submit" hidden /> {/* submit input needed for enter key to work */}
        </form>

        <Sky {...this.props} />
      </div>

    )
  }
}
