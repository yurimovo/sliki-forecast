import React, { useEffect } from 'react'
import Header from "../header/header"
import Footer from "../footer/footer"

import { useDispatch, useSelector } from "react-redux"
import { checkAuth } from "../../store/actions/authActions"
import { useNavigate } from 'react-router-dom'

import {useRoutes} from "../../routes/routes"

import './app.css'
import {Auth} from "../auth/auth"

const App = () => {
    const routes = useRoutes()
    const dispatch = useDispatch()
    const history = useNavigate()
    const auth = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(checkAuth())
        if (!auth) {
            history('/auth')
        }
    },[])

    return (
        <div className={'container main'}>
            <div className={'row'}>
                <div className="col-sm-12" style={{padding: 0}}>
                    <Header />
                </div>
            </div>
            <div className={'row'}>
                {!auth ? <Auth /> :
                    <div className={'col-sm-12'}>
                        {routes}
                    </div>
                }
            </div>
            <div className={'row'}>
                <div className={'col-md-12'}>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default App