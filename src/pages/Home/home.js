import React from 'react';
import './home.scss';

import OptionsButton from '../../components/optionsButton/optionsButton';

const Home = () => {
    return (
        <div className="home-page">
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