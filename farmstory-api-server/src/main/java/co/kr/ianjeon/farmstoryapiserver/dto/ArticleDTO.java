package co.kr.ianjeon.farmstoryapiserver.dto;

import lombok.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class ArticleDTO {

    private int no;
    private String cate;
    private String title;
    private String content;
    @Builder.Default
    private int comment = 0;
    @Builder.Default
    private int file = 0;

    @Builder.Default
    private int hit = 0;
    private String writer;
    private String regip;
    private String rdate;

}
