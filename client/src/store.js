import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import appReducer from './reducer';

export default createStore(
    combineReducers({
        form: formReducer,
        app: appReducer
    })
);