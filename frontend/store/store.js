import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const configureStore = (preloadedState = {}) =>
    createStore(rootReducer, 
        preloadedState, 
        applyMiddleware(thunk
            , logger                             //this is to see your logs (actions, state) in chrome developer tools
        )
    );

export default configureStore;