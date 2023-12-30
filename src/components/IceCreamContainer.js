import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux'

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of IceCreams - {props.numberOfIceCreams}</h2>
      <button onClick={props.BUYICECREAMS}>Buy IceCream</button>
    </div>
  )
}

//these maps get the params from the store and pass in the component as a prop
//these make props from the states
const mapStateToProps = (state) => {
  return {
    // numberOfIceCreams: state.numberOfIceCreams // we do this because we combine the state in the root 
    numberOfIceCreams: state.iceCream.numberOfIceCreams
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // /BUYONECAKE is equal to a function 
    BUYICECREAMS : () => dispatch(buyIceCream())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
