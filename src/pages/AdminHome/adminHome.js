import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'antd';
import './adminHome.scss';

import OptionsButton from '../../components/optionsButton/optionsButton';

const AdminHome = ({ setData }) => {
    const [userData, setUserData] = useState([]);
    const[courses, setCourses] = useState(false);

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
        setData(user);
        setCourses(true);
    }

    const logout = () => {
        window.location.href = '/admin_login';
    }
    // const getUsers = () => {
    //     if(userData.length > 0) {
    //         userData.map((user, index) => {
    //             return (
    //                 <div className="home-options">
    //                     <Button
    //                         type="primary"
    //                         key={index}
    //                         onClick={() => {
    //                             handleClick(user)
    //                         }}
    //                     >{user.name}</Button>
    //                 </div>
    //             )
    //         })
    //     }
    // }
    return (
        <div className="admin-home-page">
            <div className="header-section">
                <h1 className="header-text">Admin Home</h1>
                <h5 className="logout" onClick={() => logout()}>Logout</h5>
            </div>
            <div className="candidate-info">
                <div className="candidate-names">
                    {userData.length > 0 ? userData.map((user, index) => {
                        return (
                            <div className="names" key={index}>
                                <Button
                                    onClick={() => {
                                        handleClick(user)
                                    }}
                                    className="options"
                                >{user.name}</Button>
                            </div>
                        )
                    }) : ''}
                </div>
                <div className={courses ? "course-options" : "course-options close"}>
                    <OptionsButton value="MySQL" address="/admin_home/answers"/>
                    <OptionsButton value="Python" address="/questions/aws"/>
                    <OptionsButton value="AWS" address="/questions/aws"/>
                </div>
            </div>
        </div>
    )
}

export default AdminHome;