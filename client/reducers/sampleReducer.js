// reducers take the state and the action (keep in mind reducer composition)
function sampleReducer(state=[], action) {
  switch(action.type) {
    case 'SOME_ACTION':
      console.log('reducer processing someAction');
      return // Some altered State. State must be returned by reducer.
    case 'SOME_OTHER_ACTION':
      ...
    default:
      return state;
  }
}

export default sampleReducer;
