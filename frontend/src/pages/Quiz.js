import React, { useState } from "react";
import "./Quiz.css";

function Quiz() {
    const [questions, setQuestions] = useState([
        {
            question: "What is the capital of France?",
            options: ["Paris", "Madrid", "London", "Berlin"],
            answer: "Paris"
        },
        {
            question: "What is the largest country in the world?",
            options: ["USA", "China", "Russia", "India"],
            answer: "Russia"
        },
        {
            question: "What is the currency of Japan?",
            options: ["Yen", "Dollar", "Euro", "Pound"],
            answer: "Yen"
        }
    ]);

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleAnswerOptionClick = (answer) => {
        if (answer === questions[currentQuestion].answer) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div className="quiz">
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
                            {questions[currentQuestion].question}
                        </div>
                    </div>
                    <div className="answer-section">
                        {questions[currentQuestion].options.map((option) => (
                            <button className="answer-button" onClick={() => handleAnswerOptionClick(option)}>
                                {option}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default Quiz;
