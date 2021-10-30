import React from 'react';
import { useLocation, useHistory } from 'react-router';
import useAuth from './../../../Hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    
    const location = useLocation();
    const history = useHistory();

    // console.log('came from', location.state?.from);
    const redirect_uri = location.state?.from || "/home";

    const handleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div className="text-center bg-secondary">
            <div className="pt-4">
                {/* <button onClick={signInUsingGoogle} className="btn btn-warning">Google SignIn</button> */}
                {<button onClick={handleLogin} className="btn btn-warning">Google SignIn</button>}
            </div>
            <img className="img-fluid" src="https://i.ibb.co/WFxWgBC/login.webp" alt="login" />
        </div>
    );
};

export default Login;