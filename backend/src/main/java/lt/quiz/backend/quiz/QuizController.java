package lt.quiz.backend.quiz;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/quizzes")
public class QuizController {

    private final QuizService quizService;

    QuizController(QuizService quizService){
        this.quizService = quizService;
    }

    @GetMapping
    public List<Quiz> getAllQuizzes() {
        return quizService.getAllQuizzes();
    }

    @GetMapping("/{quizId}")
    public Quiz getQuizById(@PathVariable Long quizId) {
        return quizService.getQuizById(quizId);
    }

    @PostMapping
    public Quiz createQuiz(@RequestBody Quiz quiz, @AuthenticationPrincipal Jwt jwt) {
        return quizService.createQuiz(quiz, jwt);
    }

    @PutMapping("/{quizId}")
    public Quiz updateQuiz(@PathVariable Long quizId, @RequestBody Quiz quiz, @AuthenticationPrincipal Jwt jwt) {
        return quizService.updateQuiz(quizId, quiz, jwt);
    }

    @DeleteMapping("/{quizId}")
    public void deleteQuiz(@PathVariable Long quizId, @AuthenticationPrincipal Jwt jwt) {
        quizService.deleteQuiz(quizId, jwt);
    }
}
