import React from 'react'
import LoginButton from "../../ui/buttons/login-button/login-button"
import RegisterButton from "../../ui/buttons/register-button/register-button"
import PersonalPageButton from "../../ui/buttons/personal-page-button/personal-page-button";

const AuthButton = () => {
    return (
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-sm-6 text-center'}>
                    <PersonalPageButton/>
                </div>
                <div className={'col-sm-3 text-center'}>
                    <LoginButton/>
                </div>
                <div className={'col-sm-3 text-center'}>
                    <RegisterButton/>
                </div>
            </div>
        </div>
    )
}

export default AuthButton