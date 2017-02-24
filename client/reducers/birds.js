// reducers take the state and the action (keep in mind reducer composition)
function birds(state=[], action) {
  switch(action.type) {
    case 'ADD_BIRD':
      console.log('reducer adding bird');
      return [
      ...state, {
        name: action.name, 
        type: action.species
      }]
    case 'REMOVE_BIRD':
      console.log('reducer removeing bird');
      return [
      ...state.slice(0, action.index),
      ...state.slice(action.index+1),
      ]
    default:
      return state;
  }
}

export default birds;
