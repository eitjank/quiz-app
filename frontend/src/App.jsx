import Quiz from "./pages/quiz/Quiz";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Main from "./pages/main/Main";
import {AuthenticationGuard} from "./components/AuthenticationGuard";
import NavigationBar from "./components/NavigationBar";
import Profile from "./pages/profile/Profile";
import QuizForm from "./pages/QuizForm";
import QuizManagement from "./pages/QuizManagement";

function App() {
    return (
        <Router>
            <NavigationBar/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/quizzes/:id" element={<AuthenticationGuard component={Quiz}/> }/>
                <Route path="/profile" element={<AuthenticationGuard component={Profile}/> }/>
                <Route path="/quiz-form" element={<AuthenticationGuard component={QuizForm}/> }/>
                <Route path="/quiz-management" element={<AuthenticationGuard component={QuizManagement}/> }/>
            </Routes>
        </Router>
    );
}

export default App;
