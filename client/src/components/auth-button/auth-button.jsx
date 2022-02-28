import React from 'react'
import LoginButton from "../../ui/buttons/login-button/login-button"
import LogoutButton from "../../ui/buttons/logout-button/logout-button"
import RegisterButton from "../../ui/buttons/register-button/register-button"
import PersonalPageButton from "../../ui/buttons/personal-page-button/personal-page-button"
import {useSelector} from "react-redux"

import AdminButton from "../../ui/buttons/admin-button/admin-button"

const AuthButton = () => {

    const auth = useSelector(state => state.auth)
    const isAdmin = localStorage.getItem('isAdmin')

    return (
        <div className={'container'}>
            <div className={'row buttons-style'}>
                <div className={'col-sm-6 text-center'}>
                    <PersonalPageButton/>
                </div>
                { !auth ?
                    <>
                        <div className={'col-sm-2 text-center'}>
                            <LoginButton/>
                        </div>
                        <div className={'col-sm-2 text-center'}>
                            <RegisterButton/>
                        </div>
                    </> :
                    <>
                        <div className={'col-sm-2 text-center'}>
                            <LogoutButton/>
                        </div>
                    </>
                }
                { isAdmin ?
                    <>
                        <div className={'col-sm-2 text-center'}>
                            <AdminButton/>
                        </div>
                    </> : null
                }
            </div>
        </div>
    )
}

export default AuthButton