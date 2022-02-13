import React from 'react'

import SlikiLogo from '../../media/logo.png'

import './header.css'
import Auth from "../auth/auth"

const Header = () => {
    return (
        <div className={'container header'}>
            <div className={'row align-items-center'}>
                <div className={'col-md-6'}>
                    <img className={'rounded mx-left d-block img'} src={SlikiLogo} alt={'logo'}/>
                </div>
                <div className={'col-md-6'}>
                    <Auth/>
                </div>
            </div>
        </div>
    )
}

export default Header