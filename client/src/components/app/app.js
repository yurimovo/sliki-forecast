import React from 'react'
import Header from "../header/header"
import Body from "../body/body"
import Footer from "../footer/footer"

import './app.css'

const App = () => {
    return (
        <div className={'container main'}>
            <div className={'row'}>
                <div className={'col-md-12'}>
                    <Header/>
                </div>
            </div>
            <div className={'row'}>
                <div className={'col-sm-12'}>
                    <Body/>
                </div>
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