import React from 'react';
import '../Home/home.scss';

import OptionsButton from '../../components/optionsButton/optionsButton';

const User = props => {
    console.log(props.data);
    
    return (
        <div className="home-page">
            <OptionsButton 
                value={props && props.data && props.data.name ? props.data.name : ''}
            />
            {props.data.sql_answers.map(answer => {
                return (
                    <div>
                        <p>{answer.number}</p>
                        <p>{answer.answer}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default User;