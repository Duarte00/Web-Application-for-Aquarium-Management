import React, {useEffect, useState} from "react";
import Axios from 'axios';
import{Link} from "react-router-dom";

function Login() {
    

    const [usernameLogin, setUsernameLogin] = useState('')
    const [passwordLogin, setPassworLongin] = useState('')

    const [loginStatus, setLoginStatus] = useState(false)


    Axios.defaults.withCredentials = true;

    const login = () => {
      Axios.post('http://localhost:3001/login', {
        username: usernameLogin, 
        password: passwordLogin
      }).then((respose) => {
        if (!respose.data.auth){
          setLoginStatus(false);
        }else{
          localStorage.setItem("token", respose.data.token)
          setLoginStatus(true);
        }
      });
    };

    const userAuthenticate = () => {
      Axios.get('http://localhost:3001/isUserAuth', {
        headers: {
        "x-access-token": localStorage.getItem("token")
        },
      }).then((respose => {
        console.log(respose);
      })) 
    }

    
    useEffect( ()=> {
      Axios.get("http://localhost:3001/login").then((respose) => {
        if (respose.data.loggedIn === true){
          setLoginStatus(respose.data.user[0].username);
        }
      });
    }, []);
    
    

  return (  
    <div>

      <Link to="./protectedRoute" state={{loginStatus: loginStatus}} className="link"/>

        <div className="wrapper">
            <div className="text-center mt-4 name"> Login </div>
            <form className="p-3 mt-3">
                <div className="form-field d-flex align-items-center"> <span className="far fa-user"></span> 
                <input type="text" placeholder="Username..." 
              onChange={(e)=> {
                setUsernameLogin(e.target.value)
                }}/> </div>

                <div className="form-field d-flex align-items-center"> <span className="fas fa-key"></span> 
                <input type="password" placeholder="Password..."
              onChange={(e)=> {
                setPassworLongin(e.target.value)
                }}/> </div> 
                <button className="btn mt-3"  onClick={login} >Login</button>
            </form>
            <div className="text-center fs-6" > <a id="regiterLogin" >Forget password?</a> or 
            <a id="regiterLogin" href="/register">Register</a> 
            </div>
        </div>
          
          {loginStatus && (
            <button onClick={userAuthenticate}> Check of Authenticated </button>
          )}
                 
      </div>
  )
}

export default Login