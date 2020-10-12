import React from 'react';
import { Link } from 'react-router-dom'; 
import './optionsButton.scss';


const OptionsButton = ({ value, address, styles }) => {
    return (
        <Link to={address}>
            <input type="submit" className="options-button" value={value} style={styles}/>
        </Link>
    )
}

export default OptionsButton;