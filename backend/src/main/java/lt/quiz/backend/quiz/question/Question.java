package lt.quiz.backend.quiz.question;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lt.quiz.backend.quiz.question.option.Option;
import lt.quiz.backend.quiz.Quiz;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "question")
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    private Quiz quiz;
    @Column(nullable = false)
    private String text;
    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Option> options;
    @Column(nullable = false)
    private int answerIndex;
    private String explanation;

}
