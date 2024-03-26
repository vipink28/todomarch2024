import React, { useState } from 'react';

function Login(props) {
    const [formData, setFormData] = useState(null);

    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const submitForm = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/users?email=${formData.email}&password=${formData.password}`, { method: "GET" });
        const user = await response.json();

        alert("logged in successfully");

    }


    return (
        <form>
            <div className='mb-3'>
                <label className='form-label'>Email</label>
                <input type="text" name='email' className='form-control' onChange={handleChange} />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Password</label>
                <input type="password" name='password' className='form-control' onChange={handleChange} />
            </div>
            <button onClick={submitForm} className='btn btn-primary'>Login</button>
        </form>
    );
}

export default Login;