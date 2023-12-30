import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function NewCakeContainer(props) {
 
    const [number , setNumber] = useState(1)
    return (
    <div>
      <h2>NEW CAKES- {props.ALLCAKES}</h2>
      <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
      <button onClick={()=>props.BUYONECAKE(number)}>Buy {number} cake</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    ALLCAKES: state.cake.numOfCakes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // /BUYONECAKE is equal to a function 
    BUYONECAKE : (number) => dispatch(buyCake(number))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)
