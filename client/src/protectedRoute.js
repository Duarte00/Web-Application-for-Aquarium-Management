import React,{useState, useEffect,} from 'react'
import { Navigate, useLocation, Outlet} from "react-router-dom";
import { Spinner } from "react-bootstrap";
import Axios from "axios"

function protectedRoute(props) {

    const [isAuthed, setIsAuthed] = useState();
useEffect(() => {
Axios.get("isUserAuth",{
  withCredentials: true,
  baseURL: "http://localhost:3001/",
}).then((res) => setIsAuthed(res.data.auth)).catch((e) => setIsAuthed(false));
  }, []);
 if (isAuthed === undefined)
    return (
      <>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </>
    );
  return isAuthed ? <Outlet /> : <Navigate to="/login" />;
}

export default protectedRoute;

