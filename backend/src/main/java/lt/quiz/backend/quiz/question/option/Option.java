package lt.quiz.backend.quiz.question.option;

import jakarta.persistence.*;
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
    @ManyToOne
    private Question question;
    @Column(nullable = false)
    private String value;

}
