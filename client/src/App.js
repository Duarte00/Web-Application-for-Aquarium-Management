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
import AquariumInfo from './pages/AquariumInfo';
import Fishes from './pages/Fishes';
import Products from './pages/Products';
import Parameters from './pages/Parameters'
import Alerts from './pages/Alerts';
import Cycle from './pages/Cycle';
import Diseases from './pages/Diseases';
import Water from './pages/Water';

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
          <Route path='/AquariumInfo/:ida/products/' element={<Products />} />
          <Route path='/AquariumInfo/:ida/parameters/' element={<Parameters />} />
          <Route path='/AquariumInfo/alerts/' element={<Alerts />} />
        </Route>
        <Route path='*' element={<ErrorPage />}/>
        <Route path='/cycle' element={<Cycle/>} />
        <Route path='/diseases' element={<Diseases/>} />
        <Route path='/water' element={<Water/>} />
    </Routes>
  </Router>
  </div>
  );
}

export default App;


