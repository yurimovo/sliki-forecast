import React, {useContext, useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {useNavigate} from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import firebase from "firebase";
import {Context} from "../../index";

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: '83vh',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey'
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    }
}))

export const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState('Email must not be empty');
    const [passwordError, setPasswordError] = useState('Password must not be empty');
    const [formValid, setFormValid] = useState(false);
    const history = useNavigate();
    const classes = useStyles();

    const {auth} = useContext(Context);

    const emailHandler = (e) => {
        setEmail(e.target.value);
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Incorrect Email');
        } else {
            setEmailError('');
        }
    };

    const passwordHandler = (e) => {
        setPassword(e.target.value);
         if (e.target.value.length < 4 || e.target.value.length > 8) {
           setPasswordError('Password length must be longer than 4 and shorter than 8 symbols')
           if (!e.target.value) {
             setPasswordError('Password must not be empty')
           }
         } else {
           setPassword('')
         }
    };

    const blurHandler = (e) => {
        if (e.target.name === 'email') {
            setEmailDirty(true);
        } else if (e.target.name === 'password') {
            setPasswordDirty(true);
        }
    }

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError])

    /*const handleLogin = async () => {
        try {
            await doRegister(email, password);
            history.push('/');
        } catch (e) {
            console.log(e.message);
        }
    }*/

    const login = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const {user} = auth.signInWithPopup(provider);
        console.log(user);
    }

    return (
        <Container component={'main'} maxWidth={'xs'}>
            <form className={classes.form} noValidate>
                <Grid container className={classes.container}>
                    <Grid item sm={12}>
                        <Typography variant={'h5'} className={classes.title}>
                            Авторизация
                        </Typography>
                    </Grid>
                    <Grid item sm={4}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            type={'email'}
                            placeholder={'mail_name@example.com'}
                            onBlur={e => blurHandler(e)}
                            value={email}
                            onChange={e => emailHandler(e)}
                        />
                    </Grid>
                    <Grid item sm={4}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={e => passwordHandler(e)}
                        />
                    </Grid>
                    <Grid item sm={4}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            /*onClick={handleLogin}*/
                            disabled={!formValid}
                        >
                            Войти
                        </Button>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={login}
                            disabled={!formValid}
                        >
                            Войти
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/register" variant="body2">
                                    Нет учетной записи? Зарегистрируйтесь
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}