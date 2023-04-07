import Quiz from "./pages/quiz/Quiz";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Main from "./pages/main/Main";
import {AuthenticationGuard} from "./components/AuthenticationGuard";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/quizzes/:id" element={<AuthenticationGuard component={Quiz}/> }/>
            </Routes>
        </Router>
    );
}

export default App;
