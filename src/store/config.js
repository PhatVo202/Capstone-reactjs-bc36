import { combineReducers, createStore } from "redux";
import { userReducer } from "./reducers/userReducer";
import { registerUserReducer } from "./reducers/registerUser";

const rootReducer = combineReducers({
  userReducer: userReducer,
  registerUserReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
