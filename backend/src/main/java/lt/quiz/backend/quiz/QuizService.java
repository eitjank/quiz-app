package lt.quiz.backend.quiz;

import lt.quiz.backend.exception.NotFoundException;
import lt.quiz.backend.exception.UnauthorizedException;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuizService {

    private final QuizRepository quizRepository;

    QuizService(QuizRepository quizRepository) {
        this.quizRepository = quizRepository;
    }

    public List<Quiz> getAllQuizzes() {
        return quizRepository.findAll();
    }

    public Quiz getQuizById(Long quizId) {
        return quizRepository.findById(quizId).orElseThrow(() -> new NotFoundException("Quiz not found"));
    }

    public Quiz createQuiz(Quiz quiz, Jwt jwt) {
        quiz.setUserId(jwt.getSubject());
        return quizRepository.save(quiz);
    }

    public Quiz updateQuiz(Long quizId, Quiz quiz, Jwt jwt) {
        Quiz existingQuiz = quizRepository.findById(quizId).orElseThrow(() -> new NotFoundException("Quiz not found"));
        if (existingQuiz.getUserId() != null && !existingQuiz.getUserId().equals(jwt.getSubject())) {
            throw new UnauthorizedException("You are not authorized to update this quiz");
        }
        existingQuiz.setTitle(quiz.getTitle());
        existingQuiz.setQuestions(quiz.getQuestions());
        return quizRepository.save(existingQuiz);
    }

    public void deleteQuiz(Long quizId, Jwt jwt) {
        Quiz existingQuiz = quizRepository.findById(quizId).orElseThrow(() -> new NotFoundException("Quiz not found"));
        if (existingQuiz.getUserId() != null && !existingQuiz.getUserId().equals(jwt.getSubject())) {
            throw new UnauthorizedException("You are not authorized to delete this quiz");
        }
        quizRepository.deleteById(quizId);
    }
}

