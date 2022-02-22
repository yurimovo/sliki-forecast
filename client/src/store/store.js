import { createStore } from "redux"

import authReducer from "./reducers/authReducer"

const store = createStore(authReducer, window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION())

export {
    store
}