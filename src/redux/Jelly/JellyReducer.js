import { ADD_JELLY, REMOVE_JELLY } from "./JellyType"

const initialState = {
  numOfJellies : 0
};
 const jellyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_JELLY:
      return {
        ...state,
        numOfJellies: state.numOfJellies + 1,
      };
    case REMOVE_JELLY:
      return {
        ...state,
        numOfJellies: state.numOfJellies - 1,
      };
    default:
      return state;
  }
};

export default jellyReducer ;