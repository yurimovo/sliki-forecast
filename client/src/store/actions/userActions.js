import * as actions from '../action-types/userTypes'

const saveUser = (user) => {
    return {
        type: actions.SAVE_USER
    }
}

const checkUser = (user) => {
    return {
        type: actions.CHECK_USER
    }
}