import { combineReducers } from "redux";

import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import jellyReducer from "./Jelly/JellyReducer"
import userReducer from "./users/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  jelly : jellyReducer,
  user : userReducer,
});

export default rootReducer;