package lt.quiz.backend.quiz;

import lt.quiz.backend.NotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuizService {

    private final QuizRepository quizRepository;

    QuizService(QuizRepository quizRepository){
        this.quizRepository = quizRepository;
    }

    public List<Quiz> getAllQuizzes() {
        return quizRepository.findAll();
    }

    public Quiz getQuizById(Long quizId) {
        return quizRepository.findById(quizId).orElseThrow(() -> new NotFoundException("Quiz not found"));
    }

    public Quiz createQuiz(Quiz quiz) {
        return quizRepository.save(quiz);
    }

    public Quiz updateQuiz(Long quizId, Quiz quiz) {
        Quiz existingQuiz = quizRepository.findById(quizId).orElseThrow(() -> new NotFoundException("Quiz not found"));
        existingQuiz.setTitle(quiz.getTitle());
        existingQuiz.setQuestions(quiz.getQuestions());
        return quizRepository.save(existingQuiz);
    }

    public void deleteQuiz(Long quizId) {
        quizRepository.deleteById(quizId);
    }
}

