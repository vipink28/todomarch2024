import React from 'react';
import illustration from '../assets/illustration.png';
import { Link, Outlet } from 'react-router-dom';

function Home(props) {
    return (
        <div className='container-fluid h-100'>
            <div className='row h-100'>
                <div className='d-flex align-items-center justify-content-center h-100 col-lg-6 flex-column bg-primary'>
                    <h1 className='display-5 text-uppercase text-center text-white'>
                        An App to<br />
                        make your life<br />
                        <span className='display-2'>easy</span>
                    </h1>

                    <img className='img-fluid' src={illustration} alt="illustration" />
                </div>

                <div className='d-flex align-items-center justify-content-center h-100 col-lg-6 flex-column'>

                    <div className="card w-50">
                        <div className='card-header'>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </div>
                        <div className='card-body'>
                            <Outlet />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Home;