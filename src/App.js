import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Api from './services/api'

const useStyles = makeStyles(theme => ({
  loginContainer: {
    padding: theme.spacing(3, 2),
    width: "30%",
    display: "flex",
    flexDirection: "column",
  },
  marginTOP:{
    marginTop: theme.spacing(2)
  }
}));

export default function App() {
  const classes = useStyles();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  
  async function handleClickLogin(){
    let body = { "ursername": username, "password": password }
    debugger
    let response = await Api.post("/login", body )
    console.log(response)
  }

  function handleChangeUsername(event){
    const VALUE = event.target.value
    setUsername(VALUE)
  }

  function handleChangePassword(event){
    const VALUE = event.target.value
    setPassword(VALUE)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Paper className={classes.loginContainer}>
          <TextField label="UserName" variant="outlined" onChange={handleChangeUsername}/>
          <TextField className={classes.marginTOP} label="Password" type="password" variant="outlined" onChange={handleChangePassword} />
          <Button className={classes.marginTOP}  variant="contained" color="primary" onClick={handleClickLogin}>
            Login
          </Button>
        </Paper>
      </header>
    </div>
  );
}