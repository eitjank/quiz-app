import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

function QuizList() {
    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/quizzes').then(response=>setQuizzes(response.data));
    }, []);

    return (
        <div>
            <h2>Quizzes</h2>
            <ul>
                {quizzes.map((quiz) => (
                    <li key={quiz.id}>
                        <Link to={`/quizzes/${quiz.id}`}>{quiz.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default QuizList;
