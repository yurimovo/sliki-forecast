import React, {useContext, useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core';
import {Link, useNavigate} from 'react-router-dom';

import HeaderBackground from '../../media/bg-header.png';
import HeaderLogo from '../../media/logo.png';
import firebase from "firebase";
import {Context} from "../../index";
import 'firebase/auth';
import {useAuthState} from "react-firebase-hooks/auth";

const useStyles = makeStyles((theme) => ({
    appBar: {
        display: 'flex',
        flexWrap: 'wrap',
        position: 'static',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundImage: `url(${HeaderBackground})`,
        padding: 'auto',
        margin: 'auto'
    },
    menuButton: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'right',
      marginRight: theme.spacing(1)
    },
    headerButton: {
        marginLeft: theme.spacing(1)
    },
    gridContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        marginLeft: theme.spacing(8)
    },
    gridItemLogo: {
        display: 'flex',
        justifyContent: 'center'
    },
    headerLink: {
        textDecoration: 'none',
        color: 'aliceblue',
        '&:hover': {
            textDecoration: 'none',
            color: 'aliceblue'
        },
        '&:visited': {
            textDecoration: 'none',
            color: 'aliceblue'
        }
    }
}));

const Header = () => {

    const classes = useStyles();
    const history = useNavigate();

    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);

    const [isAdmin, setIsAdmin] = useState(false);
    /*if (user.email === 'crazymanomsk@gmail.com') {
        setIsAdmin(true);
    };*/

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const {user} = await auth.signInWithPopup(provider);
        const userData = await auth.currentUser();
        if (userData.email === 'crazymanomsk@gmail.com') {
            setIsAdmin(true);
        }
        console.log(userData.email);
        console.log(user);
        history('/');
    }

    return (
        <AppBar position={'fixed'} className={classes.appBar}>
            <Grid container className={classes.gridContainer}>
               <Grid item md={4} className={classes.gridItemLogo}>
                   <img src={HeaderLogo} />
               </Grid>
               <Grid item md={6}>
                   <Toolbar>
                       {!user ?
                       <>
                           {/*<Button
                               className={classes.headerButton}
                               color={'primary'}
                               variant={'contained'}
                               onClick={login}
                           >
                               Войти
                           </Button>*/}
                           <Button
                               className={classes.headerButton}
                               color={'secondary'}
                               variant={'contained'}
                           >
                               <Link className={classes.headerLink} to={'/register'}>Регистрация</Link>
                           </Button>
                       </>
                           :
                       <>
                           <Button
                               className={classes.headerButton}
                               color={'secondary'}
                               variant={'contained'}
                           >
                               <Link
                                   className={'nav-item'} to={'/auth'}
                                   onClick={() => auth.signOut()
                                       .then(() => history('/auth'))}
                               >
                                   Выйти
                               </Link>
                           </Button>
                           <Button
                               className={classes.headerButton}
                               color={'secondary'}
                               variant={'contained'}
                           >
                               <Link className={classes.headerLink} to="/personal-page">Личный кабинет</Link>
                           </Button>
                       </>}
                       {isAdmin ?
                           <>
                               <Button
                                   className={classes.headerButton}
                                   color={'secondary'}
                                   variant={'contained'}
                               >
                                   <Link className={classes.headerLink} to="/race-result">Админка</Link>
                               </Button>
                           </> : null
                       }
                   </Toolbar>
               </Grid>
               <Grid item md={2}>
                   <IconButton
                       size="large"
                       edge="start"
                       color="inherit"
                       aria-label="menu"
                       sx={{ mr: 2 }}
                       className={classes.menuButton}
                   >
                       <MenuIcon />
                   </IconButton>
               </Grid>
            </Grid>
        </AppBar>
    )
}

export default Header