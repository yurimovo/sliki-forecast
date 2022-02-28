import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app/app'
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from 'react-redux'
import { authStore } from './store/stores/authStore'

ReactDOM.render(
    <Provider  store={authStore}>
        <Router>
            <App />
        </Router>
    </Provider>,
  document.getElementById('root')
)
