import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const QuizForm = () => {
    const navigate = useNavigate();
    const [quizData, setQuizData] = useState({
        title: "",
        questions: [
            {
                text: "",
                options: [],
                answerIndex: null,
            },
        ],
    });

    const handleTitleInputChange = (event) => {
        const {value} = event.target;
        setQuizData((prevQuizData) => ({
            ...prevQuizData,
            title: value,
        }));
    };

    const handleQuestionInputChange = (event, index) => {
        const {value} = event.target;
        setQuizData((prevQuizData) => {
            const updatedQuestions = [...prevQuizData.questions];
            updatedQuestions[index].text = value;
            return {...prevQuizData, questions: updatedQuestions};
        });
    };

    const handleOptionInputChange = (event, questionIndex, optionIndex) => {
        const {value} = event.target;
        setQuizData((prevQuizData) => {
            const updatedQuestions = [...prevQuizData.questions];
            updatedQuestions[questionIndex].options[optionIndex] = value;

            return {...prevQuizData, questions: updatedQuestions};
        });
    };

    const handleAddQuestion = () => {
        setQuizData((prevQuizData) => {
            return {
                ...prevQuizData,
                questions: [
                    ...prevQuizData.questions,
                    {text: "", options: [], answerIndex: null},
                ],
            };
        });
    };

    const handleRemoveQuestion = (index) => {
        setQuizData((prevQuizData) => {
            const updatedQuestions = [...prevQuizData.questions];
            updatedQuestions.splice(index, 1);
            return {...prevQuizData, questions: updatedQuestions};
        });
    };

    const handleAddOption = (index) => {
        setQuizData((prevQuizData) => {
            const updatedQuestions = [...prevQuizData.questions];
            updatedQuestions[index].options.push("");
            return {...prevQuizData, questions: updatedQuestions};
        });
    };

    const handleRemoveOption = (questionIndex, optionIndex) => {
        setQuizData((prevQuizData) => {
            const updatedQuestions = [...prevQuizData.questions];
            updatedQuestions[questionIndex].options.splice(optionIndex, 1);
            return {...prevQuizData, questions: updatedQuestions};
        });
    };

    const handleSelectAnswer = (questionIndex, optionIndex) => {
        setQuizData((prevQuizData) => {
            const updatedQuestions = [...prevQuizData.questions];
            updatedQuestions[questionIndex].answerIndex = optionIndex;
            return {...prevQuizData, questions: updatedQuestions};
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const {title, questions: quizQuestions} = quizData;
        const data = {
            title,
            questions: quizQuestions.map(({text, options, answerIndex}) => ({
                text,
                options: options.map(val => ({value: val})),
                answerIndex
            })),
        };
        // Send data to backend for quiz creation
        axios.post("http://localhost:8080/api/quizzes", data)
            .then((response) => {
                console.log("Response:", response);
            })
            .catch((error) => {
                console.log("Error:", error);
            });
        navigate("/quiz-management");
    };

    return (
        <div>
            <h2>Create Quiz</h2>
            <form>
                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        value={quizData.title}
                        onChange={handleTitleInputChange}
                    />
                </label>
                <h3>Questions:</h3>
                {quizData.questions.map((question, questionIndex) => (
                    <div key={questionIndex}>
                        <label>
                            Question {questionIndex + 1}:
                            <input
                                type="text"
                                name="question"
                                value={question.text}
                                onChange={(event) => handleQuestionInputChange(event, questionIndex)}
                            />
                        </label>
                        <h4>Options:</h4>
                        {question.options.map((option, optionIndex) => (
                            <div key={optionIndex}>
                                <label>Option {optionIndex + 1}:</label>
                                <input
                                    type="text"
                                    name="options"
                                    value={option}
                                    onChange={(event) => handleOptionInputChange(event, questionIndex, optionIndex)}
                                />
                                <button
                                    type="button"
                                    onClick={() => handleRemoveOption(questionIndex, optionIndex)}
                                >
                                    Remove Option
                                </button>
                            </div>
                        ))}
                        <button
                            type="button" onClick={() => handleAddOption(questionIndex)}>Add Option
                        </button>
                        <label>
                            Correct Answer:
                            <select
                                value={question.answerIndex}
                                onChange={(event) =>
                                    handleSelectAnswer(questionIndex, event.target.value)
                                }
                            >
                                <option value={null}>Select Answer</option>
                                {question.options.map((_, optionIndex) => (
                                    <option key={optionIndex} value={optionIndex}>
                                        Option {optionIndex + 1}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <button
                            type="button"
                            onClick={() => handleRemoveQuestion(questionIndex)}
                        >
                            Remove Question
                        </button>
                    </div>
                ))}
                <button type="button" onClick={handleAddQuestion}>
                    Add Question
                </button>
                <button type="submit" onClick={handleSubmit}>
                    Create Quiz
                </button>
            </form>
        </div>
    );
};

export default QuizForm;
