import Quiz from "./pages/quiz/Quiz";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Main from "./pages/main/Main";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/quiz" element={<Quiz/>}/>
            </Routes>
        </Router>
    );
}

export default App;
