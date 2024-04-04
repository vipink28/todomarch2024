import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();

    //register
    const registerUser = async (formData) => {
        let config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }

        const checkUser = await fetch(`http://localhost:5000/users?email=${formData.email}`, { method: "GET" });
        if (checkUser.ok) {
            const user = await checkUser.json();
            if (user.length > 0) {
                setMessage("User already exists");
            } else {
                const response = await fetch(`http://localhost:5000/users`, config);
                if (response.status === 201) {
                    const user = await response.json();
                    localStorage.setItem("todouser", JSON.stringify(user));
                    setUser(user);
                    setMessage("User created successfully");
                    setTimeout(() => {
                        navigate("/task-list");
                    }, 3000)
                } else {
                    setMessage("something went wrong");
                }
            }
        } else {
            setMessage("something went wrong");
        }
    }


    //login

    const login = async (formData) => {

        const response = await fetch(`http://localhost:5000/users?email=${formData.email}&password=${formData.password}`, { method: "GET" });
        if (response.ok) {
            const user = await response.json();
            if (user.length > 0) {
                localStorage.setItem("todouser", JSON.stringify(user[0]))
                setUser(user[0])
                setMessage("logged in successfully");
                setTimeout(() => {
                    navigate("/task-list");
                }, 3000)
            }
        } else {
            setMessage("something went wrong, please try again");
        }
    }


    // check user exists in database
    const checkUserData = async (email) => {
        const response = await fetch(`http://localhost:5000/users?email=${email}`, { method: "GET" });
        if (response.ok) {
            const user = await response.json();
            if (user.length > 0) {
                setUser(user[0]);
            } else {
                localStorage.removeItem("todouser");
            }
        } else {
            console.log("something went wrong");
        }
    }

    const logout = () => {
        localStorage.removeItem("todouser");
        setUser(null);
        navigate("/login");
    }


    // get user on page load
    useEffect(() => {
        let local = localStorage.getItem("todouser");
        if (local) {
            let localuser = JSON.parse(local);
            checkUserData(localuser.email);
        }
    }, []);

    return (
        <AuthContext.Provider value={{
            user,
            message,
            registerUser,
            login,
            setMessage,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;