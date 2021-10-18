import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/userReducer";
import thunk from "redux-thunk";

const middleware = [thunk];

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const reducers = combineReducers({
  user: rootReducer,
});


const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;


const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(reducers, enhancer);

export default store;