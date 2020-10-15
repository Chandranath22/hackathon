import React from 'react';
import './home.scss';

import OptionsButton from '../../components/optionsButton/optionsButton';

const Home = () => {
    const logout = () => {
        window.location.href = '/candidate_login';
    };
    return (
        <div className="home-page">
            <h5 className="logout-button" onClick={() => logout()}>Logout</h5>
            <div className="header-section">
                <h1 className="company-namer">Question</h1>
                <h1 className="company-namer">Answers</h1>
                <h1 className="company-namer">Portal</h1>
            </div>
            <div className="home-options">
                <OptionsButton 
                    value="AWS"
                    address="/questions/aws"
                />
                <OptionsButton 
                    value="Python"
                    address="/questions/python"
                />
                <OptionsButton
                    value="MySQL"
                    address="/questions/mysql"
                />
            </div>
        </div>
    )
}

export default Home;