import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './login.scss';
import Input from '../../components/inputField/input';
import OptionsButton from '../../components/optionsButton/optionsButton';

import useAdminLogin from '../../hooks/useAdminLogin';
import useCandidateLogin from '../../hooks/useCandidLogin';

const Login = ({ getEmail }) => {
    const[email, setEmail] = useState(''); //user email id
    const[password, setPassword] = useState('');
    const location = useLocation();
    const[adminLogin] = useAdminLogin();
    const[candidateLogin] = useCandidateLogin();

    // useEffect(() => {
    //     setUrl(location.pathname);
    //     console.log(message);
    //     console.log(cmessage);
    // }, [message, location.pathname, cmessage, popupMsg])

    const onFormSubmit = () => {
        if(location.pathname === "/admin_login") {
            const data = {
                email,
                password
            }
            adminLogin(data);
                getEmail(data.email);
                window.location.href = '/admin_home';
        } else {
            const data = {
                email,
                password
            };
            candidateLogin(data);
                getEmail(email);
                window.location.href = '/home';
        }
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