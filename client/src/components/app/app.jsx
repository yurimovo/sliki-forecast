import React, {useContext} from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";
import {useRoutes} from "../../routes/routes";
import {Auth} from "../auth/auth";
import {Context} from "../../index";
import {useAuthState} from "react-firebase-hooks/auth";
import Loader from "../loader/loader";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    }
}));

const App = () => {
    const classes = useStyles();
    const routes = useRoutes();

    const {auth} = useContext(Context);
    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        return <Loader />
    };

    return (
        <Grid container md={12} className={classes.root}>
            <Grid item className={classes.header}>
                <Header />
            </Grid>
            <Grid item className={classes.body}>
                {!user ? <Auth /> :
                    <div>
                        {routes}
                    </div>
                }
            </Grid>
            <Grid item className={classes.footer}>
                <Footer />
            </Grid>
        </Grid>
    )
}

export default App