import React from 'react';
import './landingPage.scss';

import OptionsButton from '../../components/optionsButton/optionsButton';

const Home = () => {
    return (
        <div className="landing-page">
            <div className="header-section">
                <h1 className="company-namer">Question</h1>
                <h1 className="company-namer">Answers</h1>
                <h1 className="company-namer">Portal</h1>
            </div>
            <div className="landing-page-options">
                <OptionsButton 
                    value="Admin Login"
                    address="/admin_login"
                />
                <OptionsButton 
                    value="Candidate Login"
                    address="/candidate_login"
                />
                <OptionsButton
                    value="Register"
                    address="/register"
                />
            </div>
        </div>
    )
}

export default Home;