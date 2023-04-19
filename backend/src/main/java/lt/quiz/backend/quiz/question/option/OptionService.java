package lt.quiz.backend.quiz.question.option;

import lt.quiz.backend.exception.NotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class OptionService {

    private final OptionRepository optionRepository;

    OptionService(OptionRepository optionRepository){
        this.optionRepository = optionRepository;
    }


    public Option getOptionById(Long optionId) {
        return optionRepository.findById(optionId).orElseThrow(() -> new NotFoundException("Option not found"));
    }

    public List<Option> getOptionsByQuestionId(Long questionId) {
        return optionRepository.findByQuestionId(questionId);
    }

    public Option createOption(Option option) {
        return optionRepository.save(option);
    }

    public Option updateOption(Long optionId, Option option) {
        Option existingOption = optionRepository.findById(optionId).orElseThrow(() -> new NotFoundException("Option not found"));
        existingOption.setValue(option.getValue());
        return optionRepository.save(existingOption);
    }

    public void deleteOption(Long optionId) {
        optionRepository.deleteById(optionId);
    }

}