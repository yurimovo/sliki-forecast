import * as actions from './actionTypes'

const initialState = {
    auth: false
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actions.LOGIN:
            return {
                ...state,
                auth: true
            }

        case actions.LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                auth: false
            }

        /*case actions.GETSIMCARD:
            return {
                ...state,
                fccId: '',
                simNumber: '',
                mountingDate: '',
                pultNumber: '',
                mountingPlace: '',
                mountingAddress: ''
            }*/

        case actions.CHECKAUTH:
            if(localStorage.getItem('token')) {
                return {
                    ...state,
                    auth: true
                }
            } else {
                return {
                    ...state,
                    auth: false
                }
            }

        default:
            return state
    }
}

export default reducer