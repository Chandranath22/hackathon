import axios from 'axios';
import React, { useState } from 'react';
import './mysql.scss';

const MySQL = () => {
    const allQuestions = [{
        number : 1,
        question : "Write a query to get Product name and quantity/unit",
    } , {
        number : 2,
        question: "Write a query to get current Product list (Product ID and name)"
    } , {
        number : 3,
        question : "Write a query to get discontinued Product list (Product ID and name)"
    }, {
        number : 4,
        question : "Write a query to get most expense and least expensive Product list (name and unit price)"
    }, {
        number : 5,
        question : "Write a query to get Product list (id, name, unit price) where current products cost less than $20"
    }];
    const [answersArray, setAnswersArray] = useState([]);
    const [currIndex, setCurrentIndex] = useState(0);
    const [answer, setAnswer] = useState('');
    const handleChange = value => {
        setAnswer(value);
    };

    const ResetAnswer = () => {
        
    }

    const submitAnswer = () => {
        const data = {
            number: allQuestions[currIndex].number,
            answer
        }
        const tempArray = answersArray;
        tempArray.push(data);
        setAnswersArray(tempArray);

        // New Line
        // while(currIndex <= 3)
        // setCurrentIndex(currIndex + 1);
        // ResetAnswer();

    };

    const submitTest = () => {
        const email = localStorage.getItem('email');
        console.log(answersArray);
        if (email !== null || email !== undefined) {
            const data = {
                email,
                test: 'MYSQL',
                answersArray
            }
            axios.post('http://localhost:9000/api/submitAnswer', data)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
        } else {
            console.log('Failed To Submit Test');
        }
    };
    return (
        <div className="mysql">
            <div className="question-tab">
                <div className="questions">
                    <p className="text">Please see the below er-diagram for reference.</p>
                    <p className="text">{allQuestions ? allQuestions[currIndex].question : ''} </p>
                </div>
                <div className="image-area">
                    <img
                        src={require('../../assets/images/northwind-er-relationship.png')}
                        alt="er-diagram"
                        className="er-image"
                    />
                </div>
                <div className="button-layout">
                    {currIndex !== 0 ? <input type="submit" className="submit-ans" value="Prev" onClick={() => setCurrentIndex(currIndex-1)} /> : ''}
                    {currIndex !== 4 ? <input type="submit" className="submit-ans" value="Next" onClick={() => setCurrentIndex(currIndex+1)} /> : <input type="submit" className="submit-ans" value="Finish" onClick={() => submitTest()} />}
                </div>
            </div>
            <div className="answers-tab">
                <textarea type="text" className="input-area" onChange={(e) => handleChange(e.target.value)}/>
                <div className="button-layout">                    
                    <input type="submit" className="submit-ans" value="Reset" onClick={() => ResetAnswer()} />
                    <input type="submit" className="submit-ans" value="Submit" onClick={() => submitAnswer()}/>
                </div>
            </div>
        </div>
    )
}

export default MySQL;