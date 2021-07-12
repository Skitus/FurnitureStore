import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import furniture from "./furniture";
import filter from "./filter";
import cage from "./cage";
import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
    furniture,
    filter,
    cage,
    form: formReducer
});

const composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhansers(applyMiddleware(thunk)));

window.store = store;

export default store;
