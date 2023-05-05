import * as api from '../api/authApi'

export const loginAction = formData => async dispatch => {
    dispatch({type: 'LOGIN_INIT'})
    return api.login(formData)
        .then(() => {
            dispatch({type: 'LOGIN_SUCCESS'})
        })
        .catch(error => {
            dispatch({
                type: 'LOGIN_ERROR',
                payload: error.message
            })
        })
}

export const registerAction = formData => async dispatch => {
    dispatch({type: 'REGISTER_INIT'});
    return api.register(formData)
        .then(()=> {
            dispatch({type: 'REGISTER_SUCCESS'})
        })
        .catch(error => {
            dispatch({
                type: 'REGISTER_ERROR',
                payload: error.message
            })
        })
}

export const logoutAction = () => async dispatch => {
    api.logout()
        .then(() => {
            dispatch({
                type: 'LOGOUT_SUCCESS'
            })
        })
        .catch(error => {
            dispatch({
                type: 'LOGOUT_ERROR',
                payload: error.message
            })
        })
}

export const listenToAuthChanges = () => dispatch => {
    dispatch({type: 'AUTH_ON_INIT'});
    api.onAuthStateChanges(async user => {
        if (user) {
            const userProfile = await api.getUserProfile(user.uid);
            dispatch({type: 'AUTH_ON_SUCCESS', payload: userProfile});
        } else {
            dispatch({type: 'AUTH_ON_ERROR'});
        }
    })
}
