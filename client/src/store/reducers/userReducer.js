import * as actions from '../action-types/userTypes'
import isUppercase from "validator/es/lib/isUppercase";

const initialState = {
    userId: '',
    userName: '',
    isAdmin: false
}

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case actions.SAVE_USER:
            return {
                ...state,
                auth: true
            }

        case actions.CHECK_USER:
            if(localStorage.getItem('userName')) {
                return {
                    ...state,
                }
            } else {
                return {
                    ...state,
                }
            }

        default:
            return state
    }
}

export default userReducer