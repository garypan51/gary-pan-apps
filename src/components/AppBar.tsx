import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import MaterialAppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import "./AppBar.scss"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export const AppBar = () => {
    const classes = useStyles();

    return (
        <MaterialAppBar id={"app-bar"} position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    App Bar Header
                </Typography>
                <Button color="inherit">Contact</Button>
            </Toolbar>
        </MaterialAppBar>
    );
}
