import axios from 'axios';
import React, { useState } from 'react';
import './mysql.scss';

const MySQL = () => {
    const allQuestions = [{
        number : 1,
        question : "1. Write a query to get Product name and quantity/unit",
    } , {
        number : 2,
        question: "2. Write a query to get current Product list (Product ID and name)"
    } , {
        number : 3,
        question : "3. Write a query to get discontinued Product list (Product ID and name)"
    }, {
        number : 4,
        question : "4. Write a query to get most expense and least expensive Product list (name and unit price)"
    }, {
        number : 5,
        question : "5. Write a query to get Product list (id, name, unit price) where current products cost less than $20"
    }];
    const [answersArray, setAnswersArray] = useState([]);
    const [currIndex, setCurrentIndex] = useState(0);
    const [answer, setAnswer] = useState('');
    const handleChange = value => {
        setAnswer(value);
    };

    const ResetAnswer = () => {
        setAnswer('');
    }

    const submitAnswer = () => {
        console.log(answer);
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

    const backHome = () => {
        window.location.href = '/home';
    }

    const onPressNext = () => {
        setAnswer('');
        setCurrentIndex(currIndex+1)
    }

    const submitTest = () => {
        const email = localStorage.getItem('email');
        console.log(email);
        console.log(answersArray);
        if (email) {
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
                    <p className="text" style={{textIndent: "20px"}}>Please see the below er-diagram for reference.</p>
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
                    <input className="submit-ans" type="submit" value="Home" onClick={backHome}/>
                    {currIndex !== 0 ? <input type="submit" className="submit-ans" value="Prev" onClick={() => setCurrentIndex(currIndex-1)} /> : ''}
                    {currIndex !== 4 ? <input type="submit" className="submit-ans" value="Next" onClick={onPressNext} /> : <input type="submit" className="submit-ans" value="Finish" onClick={() => submitTest()} />}
                </div>
            </div>
            <div className="answers-tab">
                <textarea type="text" className="input-area" onChange={(e) => handleChange(e.target.value)} value={answer}/>
                <div className="button-layout">                    
                    <input type="submit" className="submit-ans" value="Reset" onClick={ResetAnswer} />
                    <input type="submit" className="submit-ans" value="Submit" onClick={() => submitAnswer()}/>
                </div>
            </div>
        </div>
    )
}

export default MySQL;