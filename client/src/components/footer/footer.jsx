import React from 'react';
import {makeStyles} from "@material-ui/core";
import FooterBackground from '../../media/bg-positions.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundImage: `url(${FooterBackground})`,
        marginRight: '0',
        marginLeft: '0'
    }
}))

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            Footer
        </div>
    )
}

export default Footer