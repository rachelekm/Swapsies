import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer as formReducer} from 'redux-form';
import appReducer from './reducers/reducer-app';
import authReducer from './reducers/reducer-auth';
import thunk from 'redux-thunk';

import {loadAuthToken} from './local-storage';
import {setAuthToken, refreshAuthToken} from './actions/actions-auth';

const store = createStore(
    combineReducers({
        form: formReducer,
        app: appReducer,
        auth: authReducer
    }),
    applyMiddleware(thunk)
);

const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;