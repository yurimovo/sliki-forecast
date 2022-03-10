import React, {useContext} from 'react'
import Header from "../header/header"
import Footer from "../footer/footer"

import {useRoutes} from "../../routes/routes"

import './app.css'
import {Auth} from "../auth/auth"
import {Context} from "../../index";
import {useAuthState} from "react-firebase-hooks/auth";

const App = () => {
    const routes = useRoutes();

    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);

    return (
        <div className={'container main'}>
            <div className={'row'}>
                <div className="col-sm-12">
                    <Header />
                </div>
            </div>
            <div className={'row'}>
                {!user ? <Auth /> :
                    <div className={'col-sm-12'}>
                        {routes}
                    </div>
                }
            </div>
            <div className={'row'}>
                <div className={'col-md-12'}>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default App