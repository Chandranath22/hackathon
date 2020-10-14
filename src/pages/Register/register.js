import React, { useState } from 'react';
import './register.scss';
import axios from 'axios';
import Input from '../../components/inputField/input';
import OptionsButton from '../../components/optionsButton/optionsButton';

const Register = () => {
    const[email, setEmail] = useState(''); //user email id
    const[password, setPassword] = useState(''); //user password
    const[confirmPass, setConfirmPass] = useState('');
    const[name, setName] = useState(''); 
    const[phone, setPhone] = useState('');   // confirm password

    const onFormSubmit = () => {
        if(confirmPass === password) {
            console.log(true);
            console.log(password);
        } else {
            console.log(false);
        }
        console.log('clicked');
        // console.log(email);  
        // console.log(name);  
        // console.log(phone); 
        const data = {
            name,
            email,
            phone,
            password
        }
        axios.post('http://localhost:9000/api/register', data).then(res => {
            console.log(res);
            window.location.href = '/candidate_login';
        })
        .catch(err => {
            console.log(err);
        })

    };
    return (
        <div className="register">
            <div className="register-form">
                <div className="header-section">
                    <h3 className="company-name">Question-Answers-Portal</h3>
                </div>
                <div className="subheader-section">
                    <h2 className="header-text">Register</h2>
                    <h4 className="header-sub-text">Enter your email-id and password</h4>
                </div>
                <div className="input-section">
                    <form className="input-form" onSubmit={e => { e.preventDefault() }}>
                    <Input
                            label="Name"
                            type={"name"}
                            placeholder="Your Name"
                            setValue={(e) => setName(e)}
                        />
                        <Input
                            label="Email Id"
                            type={"email"}
                            placeholder="name@domain.com"
                            setValue={(e) => setEmail(e)}
                        />
                        <Input
                            label="Phone Number"
                            type={"number"}
                            placeholder="Your phone number"
                            setValue={(e) => setPhone(e)}
                        />
                        <Input 
                            label="Password"
                            type={"password"}
                            placeholder="password"
                            setValue={(e) => setPassword(e)}
                        />
                        <Input
                            label="Confirm Password"
                            type={"password"}
                            placeholder="re-type password"
                            setValue={(e) => setConfirmPass(e)}
                        />
                        <input
                            type="submit"
                            value="Register"
                            className="signin-button"
                            onClick={() => onFormSubmit()}
                        />
                    </form>
                </div>
            </div>
            <div className="options-layout">
                <OptionsButton value="Candidate Login" address="/candidate_login"/>
                <OptionsButton value="Admin Login" address="/admin_login"/>
            </div>
        </div>
    )
}

export default Register;