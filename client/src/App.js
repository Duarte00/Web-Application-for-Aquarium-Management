import './App.css';
import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import Profile from './pages/Profile'
import ErrorPage from './pages/ErrorPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProtectedRoute from './protectedRoute';
import login from './pages/Login';

/*      <Route exact path='/' element={<ProtectedRoute/>}>
          <Route exact path='/profile' element={<Profile/>}/>
        </Route>
        */ 
function App() {

  return (

    <Router> 
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>

        <Route element={<ProtectedRoute/>}>
          <Route path='/profile' element={<Profile />} />
        </Route>

        <Route path='*' element={<ErrorPage />}/>
      </Routes>
      <div>footer</div>
    </Router>
  );
}

export default App;


