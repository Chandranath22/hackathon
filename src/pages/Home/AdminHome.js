import React, { useState, useEffect } from 'react';
import axios from 'axios';
import User from '../Users/User';
import { Button } from 'antd';
import './home.scss';

import OptionsButton from '../../components/optionsButton/optionsButton';

const AdminHome = () => {
    const [userData, setUserData] = useState([]);
    const [openUser, setOpenUser] = useState(false);
    const [dataToSend, setDataToSend] = useState([]);
    useEffect(() => {
        async function getUserData() {
            const result = await axios.get('http://localhost:9000/api/getAllUserData');
            if (result.data.message === 'successful') {
                setUserData(result.data.data);
            }
        }
        getUserData();
    }, []);
    const handleClick = user => {
        console.log('I am clicked');
        setOpenUser(true)
        setDataToSend(user)
    }
    return (
        <div className="home-page">
            <div className="header-section">
                <h1 className="company-namer">See Answers. Choose a User</h1>
            </div>
            {userData.length > 0 ? userData.map((user, index) => {
                return (
                    <div className="home-options">
                        <Button
                            type="primary"
                            key={index}
                            onClick={() => {
                                handleClick(user)
                            }}
                        >{user.name}</Button>
                    </div>
                )
            }) : ''}
            {openUser ? <User data={dataToSend} /> : ''}
        </div>
    )
}

export default AdminHome;