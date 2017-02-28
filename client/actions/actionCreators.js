// does not hot reload
export function someAction(name, species) {
  console.log("actionCreator dispatching someAction")
  return {
    type: 'SOME_ACTION', // type caps and underscores for reducers
    // firstPieceOfStateToUpdate,
    // secondPieceOfStateToUpdate, ...
  }
}
