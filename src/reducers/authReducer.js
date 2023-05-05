import {combineReducers} from "redux";

function createAuthReducer() {
    const user = (state = null, action) => {
        switch (action.type) {
            case 'LOGOUT_SUCCESS':
                return null
            case 'AUTH_ON_INIT':
                return null
            case 'AUTH_ON_SUCCESS':
                return action.payload
            case 'AUTH_ON_ERROR':
            default:
                return state;
        }
    }
    const isChecking = (state = false, action) => {
        switch (action.type) {
            case 'REGISTER_INIT':
                return true
            case 'LOGIN_INIT':
                return true
            case 'REGISTER_SUCCESS':
            case 'LOGIN_SUCCESS':
                return true
            case 'AUTH_ON_INIT':
                return true
            case 'AUTH_ON_SUCCESS':
                return false
            case 'AUTH_ON_ERROR':
                return false
            default:
                return state
        }
    }
    return combineReducers({
        user,
        isChecking
    })
}

export default createAuthReducer();
