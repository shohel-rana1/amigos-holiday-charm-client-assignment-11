import React, { useState } from 'react';
import './Login.css'
import { useLocation, useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInWithGoogle } = useAuth();

    //to place order after login
    const [error, setError] = useState('');
    const location = useLocation()
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_uri);
                setError('');
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            })
    };
    return (
        <div className="backgrnd-img">
            <div className="container login-form ">
                <div className="py-5 px-5 my-5 google-login text-left text-info">
                    <h2>Login Please</h2>
                    <div><h6>Login With Google</h6></div>
                    <div className="text-lg-start">
                        <button onClick={handleGoogleLogin} type="submit" className="btn btn-secondary w-100 text-info">Google Sing In</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;