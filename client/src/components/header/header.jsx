import React from 'react';
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
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../store/actions/authActions";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    appBar: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundImage: `url(${HeaderBackground})`
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
    const auth = useSelector(state => state.auth);
    const isAdmin = localStorage.getItem('isAdmin');
    const history = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout())
        history('/auth')
    }

    return (
        <AppBar position={'fixed'} className={classes.appBar}>
            <Grid container className={classes.gridContainer}>
               <Grid item md={4} className={classes.gridItemLogo}>
                   <img src={HeaderLogo} />
               </Grid>
               <Grid item md={6}>
                   <Toolbar>
                       {!auth ?
                       <>
                           <Button
                               className={classes.headerButton}
                               color={'primary'}
                               variant={'contained'}
                           >
                               <Link className={classes.headerLink} to={'/auth'}>Войти</Link>
                           </Button>
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
                                   onClick={handleLogout}
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