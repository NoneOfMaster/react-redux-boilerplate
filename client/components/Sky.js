import React from 'react'

export default class Sky extends React.Component {

  renderPlane(plane, index) { // index comes from of .map()
    return (
      <div className="plane" key={index}>
        &#9992; destination: {plane.destination}
        <div className="x-button" onClick={this.props.removePlane.bind(null, index)}>&times;</div>
      </div>
    )
  }

  /* irl redundence here would be refactored */
  renderBird(bird, index) {
    return (
      <div className="bird" key={index}>
        &#128038; {`${bird.name} the ${bird.type}`}
        <div className="x-button" onClick={this.props.removeBird.bind(null, index)}>&times;</div>
      </div>
    )
  }

  render() {
    return (
      <div className="sky">
        <h4>planes in the sky</h4>
        {this.props.planes.map(this.renderPlane.bind(this))}
        <h4>birds in the sky</h4>
        {this.props.birds.map(this.renderBird.bind(this))}
      </div>
    )
  }
}
