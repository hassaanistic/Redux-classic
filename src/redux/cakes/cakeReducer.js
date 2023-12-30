import  BUY_CAKE  from "./cakeType";

const initialState = {
  numOfCakes: 10,
};
 const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        // numOfCakes: state.numOfCakes - 1, //before payload
        numOfCakes: state.numOfCakes - action.payload, //after
      };
    default:
      return state;
  }
};

export default cakeReducer;