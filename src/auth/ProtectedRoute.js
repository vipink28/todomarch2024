import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

function ProtectedRoute(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        let local = localStorage.getItem("todouser");
        if (local) {
            let localuser = JSON.parse(local);
            if (localuser) {
                setIsLoggedIn(true);
            }
        } else {
            navigate("/login");
        }
    }, []);

    return (
        isLoggedIn ? <Outlet /> : null
    );
}

export default ProtectedRoute;