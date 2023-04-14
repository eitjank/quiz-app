package lt.quiz.backend.quiz.question;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/questions")
public class QuestionController {

    private final QuestionService questionService;

    QuestionController(QuestionService questionService){
        this.questionService = questionService;
    }

    @GetMapping
    public List<Question> getAllQuestions() {
        return questionService.getAllQuestions();
    }

    @GetMapping("/quiz/{quizId}")
    public List<Question> getQuestionsByQuizId(@PathVariable Long quizId) {
        return questionService.getQuestionsByQuizId(quizId);
    }

    @GetMapping("/{questionId}")
    public Question getQuestionById(@PathVariable Long questionId) {
        return questionService.getQuestionById(questionId);
    }

    @PostMapping
    public Question createQuestion(@RequestBody Question question) {
        return questionService.createQuestion(question);
    }

    @PutMapping("/{questionId}")
    public Question updateQuestion(@PathVariable Long questionId, @RequestBody Question question) {
        return questionService.updateQuestion(questionId, question);
    }

    @DeleteMapping("/{questionId}")
    public void deleteQuestion(@PathVariable Long questionId) {
        questionService.deleteQuestion(questionId);
    }
}
