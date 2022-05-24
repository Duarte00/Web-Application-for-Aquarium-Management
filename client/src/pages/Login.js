import React, {useState} from "react";
import Axios from 'axios';
import{Link , useNavigate} from "react-router-dom";

function Login() {

    const [usernameLogin, setUsernameLogin] = useState('')
    const [passwordLogin, setPassworLongin] = useState('')

    const [loginStatus, setLoginStatus] = useState(false)

    Axios.defaults.withCredentials = true;

    let navigate = useNavigate();

    const login = (e) => {
      e.preventDefault();
      Axios.post('http://localhost:3001/login', {
        username: usernameLogin, 
        password: passwordLogin
      }).then((respose) => {
        if (respose.data.auth==false){
          setLoginStatus(false);
        }else{
          setLoginStatus(true);
          navigate('../profile');
          /*console.log(respose);*/
        }
      });
    };

    
    

  return (  
    <div>

      <Link to="./protectedRoute" state={{loginStatus: loginStatus}}></Link>

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
                <button className="btn mt-3"  onClick={login }>Login</button>
            </form>
            <div className="text-center fs-6" >
            <a id="regiterLogin" href="/register">Register</a> 
            </div>
        </div>
                 
      </div>
  )
}

export default Login