import React from 'react';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CardComp from '../UI/Card/CardComp'
import { Container } from '@material-ui/core';

const LoginPage=()=>{

    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }));
    const classes = useStyles();

    
    
    
    return (
        <Container maxWidth="sm" >
                <CardComp>                                                


    <h3> Welcome to our Chat App ,please login</h3>
    <form className={classes.root} noValidate autoComplete="off">
    
    <TextField type="email" id="outlined-basic" label="Enter your E-mail" variant="outlined" />
    <TextField type="password" id="outlined-basic" label="Enter your password" variant="outlined" />
    <Button variant="contained" color="primary">
      Login
    </Button>
  </form>
  </CardComp>
            </Container>
        
  );
}

export default LoginPage;