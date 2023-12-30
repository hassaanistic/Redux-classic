import React from 'react'
import { addJelly  ,removeJelly} from '../redux'
import { useSelector, useDispatch } from 'react-redux'

const JellyContainer = () => {

    const jellies = useSelector(state => state.jelly.numOfJellies)
    const dispatch = useDispatch();
    return (
        <>
            <h1>Jellies - {jellies}</h1>
            <button onClick={() => dispatch(addJelly())}>Add Jelly</button>
            
            <button onClick={() => dispatch(removeJelly())}>Remove Jelly</button>
        </>
    )

}

export default JellyContainer
