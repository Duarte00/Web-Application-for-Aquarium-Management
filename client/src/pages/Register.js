import React, {useState} from "react";
import Axios from 'axios';
import{useNavigate} from "react-router-dom";

function Register() {

  const [usernameReg, setUsernameReg] = useState('')
  const [passwordReg, setpasswordReg] = useState('')
  const [emailReg, setemailReg] = useState('')

  let navigate = useNavigate();

  const register = () => {
    Axios.post('http://localhost:3001/register', {
      username: usernameReg, 
      password: passwordReg,
      email: emailReg
    }).then((respose) => {
      console.log(respose);
      navigate('../login');
    })
  }

  return (
    <div>

        <div className="wrapper">
            <div className="text-center mt-4 name"> Register </div>
            <form className="p-3 mt-3">
                <div className="form-field d-flex align-items-center"> <span className="far fa-user"></span> 
                <input type="text" placeholder="username" 
              onChange={(e)=> {
                setUsernameReg(e.target.value)
                }}/> </div>

                <div className="form-field d-flex align-items-center"> <span className="fas fa-key"></span> 
                <input type="password" placeholder="password"
              onChange={(e)=> {
                setpasswordReg(e.target.value)
                }}/> </div> 

              <div className="form-field d-flex align-items-center"> <span className="fas fa-key"></span> 
                <input type="text" placeholder="email"
              onChange={(e)=> {
                setemailReg(e.target.value)
                }}/> </div> 
                <button className="btn mt-3" onClick={register}>Register</button>
            </form>
        </div>

    </div>
  )
}

export default Register