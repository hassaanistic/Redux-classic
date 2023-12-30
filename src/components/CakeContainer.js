import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of Cakes - {props.ALLCAKES}</h2>
      <button onClick={props.BUYONECAKE}>Buy cake</button>
    </div>
  )
}

//these maps get the params from the store and pass in the component as a prop
//these make props from the states
const mapStateToProps = (state) => {
  return {
    ALLCAKES: state.cake.numOfCakes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // /BUYONECAKE is equal to a function 
    BUYONECAKE : () => dispatch(buyCake())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
