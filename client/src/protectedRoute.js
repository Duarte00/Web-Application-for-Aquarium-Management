import React from 'react'
import {Route, Navigate, useLocation, Outlet} from "react-router-dom";

function protectedRoute(props) {

    const location = useLocation();

    /*ir buscar o tken de outra forma para impedir a manipulação do mesmo*/

    const loginStatus = localStorage.getItem("token");
    
    return loginStatus ? <Outlet /> : <Navigate to="/"/>
}

export default protectedRoute;

