import * as actions from '../action-types/authTypes'

const login = (auth) => {
    return {
        type: actions.LOGIN
    }
}

const logout = (auth) => {
    return {
        type: actions.LOGOUT
    }
}

const checkAuth = () => {
    return {
        type: actions.CHECKAUTH
    }
}

/*const getSimCards = () => {
    return {
        type: actions.GETSIMCARD
    }
}*/

export {
    login,
    logout,
    checkAuth
}