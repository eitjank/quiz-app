package lt.quiz.backend.quiz.question.option;

import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/questions-options")
@CrossOrigin(origins = "http://localhost:3000")
public class OptionController {

    private final OptionService optionService;

    OptionController(OptionService optionService){
        this.optionService = optionService;
    }

    @GetMapping("/{optionId}")
    public Option getOptionById(@PathVariable Long optionId) {
        return optionService.getOptionById(optionId);
    }

    @GetMapping("/question/{questionId}")
    public List<Option> getOptionsByQuestionId(@PathVariable Long questionId) {
        return optionService.getOptionsByQuestionId(questionId);
    }

    @PostMapping
    public Option createOption(@RequestBody Option option) {
        return optionService.createOption(option);
    }

    @PutMapping("/{optionId}")
    public Option updateOption(@PathVariable Long optionId, @RequestBody Option option) {
        return optionService.updateOption(optionId, option);
    }

    @DeleteMapping("/{optionId}")
    public void deleteOption(@PathVariable Long optionId) {
        optionService.deleteOption(optionId);
    }
}