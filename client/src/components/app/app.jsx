import React, { useEffect } from 'react'
import Header from "../header/header"
import Footer from "../footer/footer"

import { useDispatch, useSelector } from "react-redux"
import { checkAuth } from "../../store/actions/authActions"
import { useNavigate } from 'react-router-dom'

import {useRoutesMain} from "../../routes/routes"

import './app.css'

const App = () => {
    const routesMain = useRoutesMain(true)
    const dispatch = useDispatch()
    const history = useNavigate()
    const auth = useSelector(state => state.auth)

    /*useEffect(() => {
        dispatch(checkAuth())
        if (!auth) {
            history('/auth')
        }
    })*/

    return (
        <div className={'container main'}>
            <div className={'row'}>
                <div className="col-sm-12" style={{padding: 0}}>
                    <Header />
                </div>
            </div>
            <div className={'row'}>
                {/*{auth ? null :*/}
                    <div className={'col-sm-12'}>
                        {routesMain}
                    </div>
                {/*}*/}
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