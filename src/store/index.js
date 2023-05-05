import thunkMiddleware from 'redux-thunk';
import authReducer from '../reducers/authReducer';
import {applyMiddleware, combineReducers, createStore} from 'redux';

export default function configureStore() {
    const middlewares = [
        thunkMiddleware,
    ];

    return createStore(
        combineReducers({
            auth: authReducer,
        }),
        applyMiddleware(...middlewares));
}
