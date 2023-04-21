package lt.quiz.backend.quiz.question;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
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
    @JsonBackReference
    @ManyToOne
    private Quiz quiz;
    @Column(nullable = false)
    @NotNull
    @Size(min = 2, max = 100)
    private String text;
    @JsonManagedReference
    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL, orphanRemoval = true)
    @NotNull
    private List<Option> options;
    @Column(nullable = false)
    @NotNull
    private int answerIndex;
    private String explanation;

}
