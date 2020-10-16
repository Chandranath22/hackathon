import React from 'react';
import './user.scss';

const User = (props) => {
    console.log(props.data);
    const onBackPress = () => {
        window.location.href = '/admin_home';
    }
    return (
        <div className="answers-page">
            <div className="header-section">
                <h3 className="header-text">{props.data.name}</h3>
                <input type="submit" className="back-button" value="Back" onClick={onBackPress}/>
            </div>
            <div className="answers">
                {props.data.sql_answers.map(answer => {
                    return (
                        <div className="answer" key={answer.number}>
                            <p>{answer.number}. </p>
                            <p>{answer.answer}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default User;