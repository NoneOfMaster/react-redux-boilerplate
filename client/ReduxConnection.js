import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from './actions/actionCreators'
import Main from './components/Main'

// connect will connect the data from the store into whatever level component needed

function mapStateToProps(state) {
  console.log(state)
  return {
    birds: state.birds,
    planes: state.planes,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

const ReduxConnection = connect(mapStateToProps, mapDispatchToProps)(Main)

export default ReduxConnection
