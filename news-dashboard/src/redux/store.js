
import { legacy_createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'
import newsReducer from './reducer';

const store =  legacy_createStore(newsReducer, applyMiddleware(thunk));

export default store;
