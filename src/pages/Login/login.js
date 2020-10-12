import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './login.scss';

import Input from '../../components/inputField/input';
import OptionsButton from '../../components/optionsButton/optionsButton';

const Login = () => {
    const[admin, setAdmin] = useState(false) //Checkif user is logging through admin route
    const[email, setEmail] = useState(''); //user email id
    const[password, setPassword] = useState(''); //user password
    const location = useLocation();

    const onFormSubmit = () => {
        if(location.pathname === "/admin_login") {
            setAdmin(true)
        }
        console.log('clicked');
        console.log(email);
        console.log(password);
        console.log(admin);
    };
    
    return (
        <div className="login">
             <div className="login-form">
                <div className="header-section">
                    <h3 className="company-name">Question-Answers-Portal</h3>
                </div>
                <div className="subheader-section">
                    <h2 className="header-text">
                        {location.pathname === "/candidate_login" ? "Candidate Login" : "Admin Login"}
                    </h2>
                    <h4 className="header-sub-text">Enter your Question-Answers-Portal email-id and password</h4>
                </div>
                <div className="input-section">
                    <form className="input-form" onSubmit={e => { e.preventDefault() }}>
                        <Input
                            label="Email Id"
                            type={"email"}
                            placeholder="name@domain.com"
                            setValue={(e) => setEmail(e)}
                        />
                        <Input
                            label="Password"
                            type={"password"}
                            placeholder="password"
                            setValue={(e) => setPassword(e)}
                        />
                        <input
                            type="submit"
                            value="Sign in"
                            className="signin-button"
                            onClick={() => onFormSubmit()}
                        />
                    </form>
                    <input
                        type="submit"
                        value="Forgot password?"
                        className="forgot-password"
                    />
                </div>
            </div>
            <div className="options-layout">
                <OptionsButton
                    value={location.pathname === "/candidate_login" ? "Admin Login" : "Candidate Login"}
                    address={location.pathname === "/candidate_login" ? "/admin_login" : "/candidate_login"}/>
                <OptionsButton value="Register Candidate" address="/register"/>
            </div>
        </div>
    )
}

export default Login;