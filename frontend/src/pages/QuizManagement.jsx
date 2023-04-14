import React, {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Button} from "@mui/material";
import {useAuth0} from "@auth0/auth0-react";
import callApi from "../api/callApi";

const QuizManagement = () => {
    const [quizzes, setQuizzes] = useState([]);
    const navigate = useNavigate();
    const {getAccessTokenSilently} = useAuth0();

    useEffect(() => {
        const fetchData = async () => {
            const token = await getAccessTokenSilently();
            const {data, error} = await callApi(`/api/quizzes`, token);
            if (data) {
                setQuizzes(data);
            }
            if (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [getAccessTokenSilently]);

    const handleDeleteQuiz = async (quizId) => {
        const token = await getAccessTokenSilently();
        const {error} = await callApi(`/api/quizzes/${quizId}`, token, "DELETE");
        if (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleEditQuiz = async (quizId) => {
        navigate(`/quiz-management/quiz/${quizId}`, {state: {quizData: quizzes.find(q => q.id === quizId)}});
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
