import { createStore,applyMiddleware,combineReducers } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { authReducer } from "./reducers/authReducer";

const reducer=combineReducers({
    auth:authReducer
})

const store=createStore(reducer,{},composeWithDevTools(applyMiddleware(thunk)));

export default store;