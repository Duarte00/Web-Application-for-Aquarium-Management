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
import Navbar from './pages/Topnavbar';

function App() {

  return (

    <Router> 
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>

        <Route element={<Navbar />}>

          <Route path='/' element={<Home />}/>

          <Route element={<ProtectedRoute/>}>
            <Route path='/profile' element={<Profile />} />
          </Route>

        </Route>

        <Route path='*' element={<ErrorPage />}/>
      </Routes>
      <div>footer</div>
    </Router>
  );
}

export default App;


