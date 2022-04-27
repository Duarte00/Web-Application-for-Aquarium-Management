import React from 'react'
import {Route, Navigate, useLocation} from "react-router-dom";
import {Outlet} from "react-router";
import Home from './pages/Home';

const ProtectedRoute = () => {

    const location = useLocation();

    const loginStatus = location.state?.loginStatus;
    
    return loginStatus ? <Outlet /> : <Home />
}

export default ProtectedRoute;

