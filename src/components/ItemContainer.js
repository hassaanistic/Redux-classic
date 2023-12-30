import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../redux'

const ItemContainer = (props) => {
    return (
        <div>
            <h1>Item - {props.item}</h1>
            <button onClick={props.buyItem}>Buy Item</button>

        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake
        ? ownProps.cake.numOfCakes
        : state.iceCream.numberOfIceCreams
    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchAction = ownProps.cake
        ? () => dispatch(buyCake())
        : () => dispatch(buyIceCream())

    return {
        buyItem: dispatchAction
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
// export default connect(null, mapDispatchToProps)(ItemContainer) // if you are not using mapStateToProps and mapDispatchToProps, you can use null 