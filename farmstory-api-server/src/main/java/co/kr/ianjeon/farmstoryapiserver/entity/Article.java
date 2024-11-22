package co.kr.ianjeon.farmstoryapiserver.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
@Entity
@Table(name = "Article")
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int no;
    private String cate;
    private String title;
    private String content;
    private int comment;
    private int file;
    private int hit;

    @ManyToOne
    @JoinColumn(name = "writer", referencedColumnName = "uid")
    private User writer;

    private String regip;

    @CreationTimestamp
    private LocalDate rdate;


}
