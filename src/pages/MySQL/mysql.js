import React from 'react';
import './mysql.scss';

const MySQL = () => {
    return (
        <div className="mysql">
            <div className="question-tab">
                <div className="questions">
                    <p className="text">Please see the below er-diagram for reference.</p>
                    <p className="text">Write a query to get Product name and quantity/unit.</p>
                </div>
                <div className="image-area">
                    <img
                        src={require('../../assets/images/northwind-er-relationship.png')}
                        alt="er-diagram"
                        className="er-image"
                    />
                </div>
                <div className="button-layout">
                    <input type="submit" className="submit-ans" value="Home"/>
                    <input type="submit" className="submit-ans" value="Prev"/>
                    <input type="submit" className="submit-ans" value="Next"/>
                </div>
            </div>
            <div className="answers-tab">
                <textarea type="text" className="input-area"/>
                <div className="button-layout">                    
                    <input type="submit" className="submit-ans" value="Reset"/>
                    <input type="submit" className="submit-ans" value="Submit"/>
                </div>
            </div>
        </div>
    )
}

export default MySQL;