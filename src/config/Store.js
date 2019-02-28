import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import HomeReducer from "../modules/home/HomeReducer";

const appReducer = combineReducers({
  home: HomeReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default createStore(rootReducer, {}, applyMiddleware(thunk));
