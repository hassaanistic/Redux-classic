import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { buyCake } from '../redux'


const HooksCakeContainer = () => {

//    const numberOfCakes =  useSelector(state => state.numOfCakes)
   const numberOfCakes =  useSelector(state => state.cake.numOfCakes)
   //use dispatch return the reference of the function from the store 
   const dispatch = useDispatch()
  return (
    <div>
        <h2>Num of Cakes -{numberOfCakes} </h2>
        <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
  //selector is equal to the mapStateToProp function
}

export default HooksCakeContainer