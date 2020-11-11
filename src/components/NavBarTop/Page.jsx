import { CssBaseline } from '@material-ui/core';
import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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

function Page(props){
    const classes = useStyles();
    const isEmpty = props.navBar.length === 0;
    return (
        <Fragment>
            <CssBaseline />
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            {isEmpty ? 'Base' : props.navBar.name }
                        </Typography>
                        
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        </Fragment>
    )
}

export default Page;