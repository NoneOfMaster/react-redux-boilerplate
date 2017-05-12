// reducers take the state and the action (keep in mind reducer composition)
function planes(state=[], action) {
  switch(action.type) {
    case 'ADD_PLANE':
      console.log('reducer adding plane')
      return [
        ...state,
        { destination: action.destination },
      ]
    case 'REMOVE_PLANE':
      console.log('reducer removing plane')
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index+1),
      ]
    default:
      return state
  }
}

export default planes
