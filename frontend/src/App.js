import Quiz from "./pages/quiz/Quiz";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/main" element={<Main/>}/>
                <Route path="/quiz" element={<Quiz/>}/>
            </Routes>
        </Router>
    );
}

export default App;
