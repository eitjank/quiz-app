import React from 'react';
import {Link} from "react-router-dom";
import LogoutButton from "../../components/LogoutButton";
import Profile from "../../components/profile/Profile";
import {useAuth0} from '@auth0/auth0-react';
import './Main.css';
import LoginButton from "../../components/LoginButton";

function Main() {
    const {isAuthenticated} = useAuth0();


    return (
        <div className="main-container">
            <h1 className="main-heading">Welcome to the Quiz App</h1>
            {isAuthenticated ? (
                <div className="user-info-container">
                    <LogoutButton/>
                    <Profile/>
                    <p className="main-message">Welcome to the main page!</p>
                    <ul className="quiz-list">
                        <li>
                            <Link to="/quiz" className="quiz-link">Quiz 1</Link>
                        </li>
                    </ul>
                </div>
            ) : (
                <LoginButton/>
            )}
        </div>
    );
}

export default Main;
