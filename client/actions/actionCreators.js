// does not hot reload
export function addBird(name, species) {
  console.log("actionCreator dispatching ADD_BIRD")
  return {
    type: 'ADD_BIRD',
    name,
    species,
  }
}

export function removeBird(index) {
  console.log("removeBird action dispatched")
  return {
    type: 'REMOVE_BIRD',
    index,
  }
}

export function addPlane(destination) {
  console.log("addPlane action dispatched")
  return {
    type: 'ADD_PLANE',
    destination,
  }
}

export function removePlane(index) {
  console.log("removePlane action dispatched")
  return {
    type: 'REMOVE_PLANE',
    index,
  }
}
