import React from "react";
import {Link} from "react-router-dom";

function Main() {
    return (
        <div>
            <h1>Main Page</h1>
            <p>Welcome to the main page!</p>
            <ul>
                <li>
                    <Link to="/quiz">Quiz 1</Link>
                </li>
            </ul>
        </div>
    );
}

export default Main;
