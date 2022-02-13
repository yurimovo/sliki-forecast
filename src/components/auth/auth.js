import React from 'react'
import LoginButton from "../../ui/buttons/login-button/login-button"
import RegisterButton from "../../ui/buttons/register-button/register-button"
import PersonalPageButton from "../../ui/buttons/personal-page-button/personal-page-button";

const Auth = () => {
    return (
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-sm-6'}>
                    <PersonalPageButton/>
                </div>
                <div className={'col-sm-3'}>
                    <LoginButton/>
                </div>
                <div className={'col-sm-3'}>
                    <RegisterButton/>
                </div>
            </div>
        </div>
    )
}

export default Auth