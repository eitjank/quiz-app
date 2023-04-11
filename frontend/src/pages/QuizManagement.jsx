import React, {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {Button} from "@mui/material";

const QuizManagement = () => {
    const [quizzes, setQuizzes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/api/quizzes').then(response => setQuizzes(response.data));
    }, []);

    const handleDeleteQuiz = async (quizId) => {
        axios.delete(`http://localhost:8080/api/quizzes/${quizId}`).then(() => {
            setQuizzes((prevQuizzes) => prevQuizzes.filter((quiz) => quiz.id !== quizId));
        }).catch((error) => console.log(error));

    };

    function handleEditQuiz(id) {
        navigate(`/quiz-management/quiz/${id}`, {state: {quizData: quizzes.find(q => q.id === id)}});
    }

    return (
        <div>
            <h2>Quiz Management</h2>
            <ul>
                {quizzes.map((quiz) => (
                    <li key={quiz.id}>
                        {quiz.title} -{" "}
                        <button onClick={() => handleEditQuiz(quiz.id)}>
                            Edit
                        </button>
                        <button onClick={() => handleDeleteQuiz(quiz.id)}>Delete</button>
                    </li>
                ))}
            </ul>

            <Button variant="contained" component={Link} to="/quiz-form">
                Create New Quiz
            </Button>
        </div>
    );
};

export default QuizManagement;
