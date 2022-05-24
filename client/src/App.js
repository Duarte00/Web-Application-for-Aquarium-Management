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
import Topnavbar from './pages/Topnavbar';
import AquariumInfo from './pages/AquariumInfo';
import Fishes from './pages/Fishes';

function App() {

  return (
<div>



    <Router> 
    <Routes>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>

        <Route path='/' element={<Home />}/>

        <Route element={<ProtectedRoute/>}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/AquariumInfo/:ida' element={<AquariumInfo />} />
          <Route path='/AquariumInfo/:ida/fishes/' element={<Fishes />} />
        </Route>


      <Route path='*' element={<ErrorPage />}/>
    </Routes>
  </Router>
  <footer className='footer'>footer</footer>
  </div>
  );
}

export default App;


