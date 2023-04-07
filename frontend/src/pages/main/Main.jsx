import React from 'react';
import LogoutButton from "../../components/LogoutButton";
import {useAuth0} from '@auth0/auth0-react';
import './Main.css';
import LoginButton from "../../components/LoginButton";
import QuizList from "../../components/QuizList";

function Main() {
    const {isAuthenticated} = useAuth0();


    return (
        <div className="main-container">
            <h1 className="main-heading">Welcome to the Quiz App</h1>
            {isAuthenticated ? (
                <div className="user-info-container">
                    <LogoutButton/>
                    <p className="main-message">Welcome to the main page!</p>
                    <QuizList/>
                </div>
            ) : (
                <LoginButton/>
            )}
        </div>
    );
}

export default Main;
