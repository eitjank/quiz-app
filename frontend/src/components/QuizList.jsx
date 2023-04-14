import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";
import callApi from "../api/callApi";

function QuizList() {
    const [quizzes, setQuizzes] = useState([]);
    const {getAccessTokenSilently} = useAuth0();

    useEffect(() => {
        async function fetchData() {
            try {
                const token = await getAccessTokenSilently();
                const {data, error} = await callApi('/api/quizzes', token);
                if (data) {
                    setQuizzes(data);
                }
                if (error) {
                    console.error('Error fetching data:', error);
                }
            } catch (e) {
                console.log(e.message);
            }
        }
        fetchData();
    }, [getAccessTokenSilently]);

    return (
        <div>
            <h2>Quizzes</h2>
            <ul>
                {quizzes.map((quiz) => (
                    <li key={quiz.id}>
                        <Link to={`/quizzes/${quiz.id}`}>{quiz.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default QuizList;
