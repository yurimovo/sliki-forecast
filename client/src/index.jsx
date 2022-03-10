import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { authStore } from './store/stores/authStore';
import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({apiKey: "AIzaSyA__5vAC_xAMuEV0cUFUXe6NYu2Z_pz8DE",
    authDomain: "forecast-d254f.firebaseapp.com",
    projectId: "forecast-d254f",
    storageBucket: "forecast-d254f.appspot.com",
    messagingSenderId: "1024954683004",
    appId: "1:1024954683004:web:29bb2da98cbcb8530383f9",
    measurementId: "G-75DT97D5G9"});

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
    <Provider  store={authStore}>
        <Context.Provider value={{
            firebase,
            auth,
            firestore
        }}>
            <Router>
                <App />
            </Router>
        </Context.Provider>
    </Provider>,
  document.getElementById('root')
)
