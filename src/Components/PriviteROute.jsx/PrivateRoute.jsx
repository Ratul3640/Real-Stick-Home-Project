import React from 'react';
import { useContext } from "react";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);


    if (!user) {
        return <Navigate to="/signIn" state={location?.pathname || '/real'}></Navigate>
    }


const PrivateRoute = () => {
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;