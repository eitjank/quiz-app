import React, {useState} from "react";
import {Navigate} from "react-router-dom";

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleFormSubmit = (event) => {
        event.preventDefault();
        // TODO: Implement authentication logic here
        setIsLoggedIn(true);
    };

    if (isLoggedIn) {
        return <Navigate to="/main"/>;
    }


    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" value={password}
                           onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
