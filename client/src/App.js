import './App.css';
import React, {useState} from "react";
import Axios from 'axios';

function App() {

  const [usernameReg, setUsernameReg] = useState('')
  const [passwordReg, setpasswordReg] = useState('')
  const [emailReg, setemailReg] = useState('')

  const [usernameLogin, setUsernameLogin] = useState('')
  const [passwordLogin, setPassworLongin] = useState('')

  const [loginStatus, setLoginStatus] = useState('')

  const register = () => {
    Axios.post('http://localhost:3001/register', {
      username: usernameReg, 
      password: passwordReg,
      email: emailReg
    }).then((respose) => {
      console.log(respose);
    })
  }

  const login = () => {
    Axios.post('http://localhost:3001/login', {
      username: usernameLogin, 
      password: passwordLogin
    }).then((respose) => {
      if (respose.data.message){
        setLoginStatus(respose.data.message);
      }else{
        setLoginStatus(respose.data[0].username);
      }
    });
  };

  return (
    <div className="App">

          <div className="registration">
            <h1>registration</h1>
            <label>Username</label><br></br>
            <input type="text" onChange={(e)=> {
              setUsernameReg(e.target.value)
              }} 
            /><br></br>
            <label>password</label><br></br>
            <input type="text" 
            onChange={(e)=> {
              setpasswordReg(e.target.value)
              }} /><br></br>
              <label>email</label><br></br>
            <input type="text" 
            onChange={(e)=> {
              setemailReg(e.target.value)
              }} /><br></br>
            <button onClick={register}> Register </button>
          </div>

          <div className="login">
            <h1>login</h1>
            <input type="text" placeholder="Username..." 
            onChange={(e)=> {
              setUsernameLogin(e.target.value)
              }}/>
            <input type="password" placeholder="Password..."
            onChange={(e)=> {
              setPassworLongin(e.target.value)
              }}/>
            <button onClick={login}> Login </button>
          </div>
          
          <h1>{loginStatus}</h1>

    </div>
  );
}

export default App;