import React, {useEffect, useState} from "react";
import "./Quiz.css";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

function Quiz() {
    const [quiz, setQuiz] = useState(null);
    const {id} = useParams();
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8080/api/questions/quiz/${id}`)
            .then(response => {
                setQuiz(response.data[0].quiz);
                setQuestions(response.data);
            })
            .catch((error) => console.log(error));
    }, [id]);


    if (!questions || questions.length === 0) { // Check if questions are loaded
        return <div>Loading quiz...</div>;
    }

    const handleAnswerOptionClick = (answer) => {
        if (answer === questions[currentQuestion].answerIndex) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    function handleBackButtonClick() {
        navigate("/");
    }

    return (
        <div>
            <h2>{quiz && quiz.name}</h2>
            <button className="back-button" onClick={handleBackButtonClick}>Back To Main Page</button>
            {showScore ? (
                <div className="score-section">
                    <h2>You scored {score} out of {questions.length}</h2>
                </div>
            ) : (
                <>
                    <div className="question-section">
                        <h2 className="question-count">
                            Question {currentQuestion + 1} of {questions.length}
                        </h2>
                        <div className="question-text">
                            {questions[currentQuestion].text}
                        </div>
                    </div>
                    <div className="answer-section">
                        {questions[currentQuestion].options.map((option, index) => (
                            <button key={index} className="answer-button"
                                    onClick={() => handleAnswerOptionClick(index)}>
                                {option.value}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default Quiz;
