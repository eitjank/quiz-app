package lt.quiz.backend.quiz.question.option;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lt.quiz.backend.quiz.question.Question;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "option")
public class Option {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @JsonBackReference
    @ManyToOne
    private Question question;
    @Column(nullable = false)
    @NotNull
    private String value;

}
