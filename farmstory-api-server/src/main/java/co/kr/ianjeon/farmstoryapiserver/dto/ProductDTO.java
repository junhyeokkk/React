package co.kr.ianjeon.farmstoryapiserver.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProductDTO {
    private int pno;
    private String productName;
    private String type;
    private int price;
    private int point;
    private int discount;
    private int delivery;
    private int stock;

    // @JsonIgnore 속성은 JSON 출력에서 제외
    @JsonIgnore
    private MultipartFile thumbFile120;
    @JsonIgnore
    private MultipartFile thumbFile240;
    @JsonIgnore
    private MultipartFile thumbFile750;

    private String etc;

    // 추가필드
    private String thumb120;
    private String thumb240;
    private String thumb750;

    @JsonIgnore
    public List<MultipartFile> getThumbFiles(){
        return List.of(thumbFile120, thumbFile240, thumbFile750);
    }

    public void setThumbNames(Map<String, String> uploadFileNames){
        this.thumb120 = uploadFileNames.get(thumbFile120.getName());
        this.thumb240 = uploadFileNames.get(thumbFile240.getName());
        this.thumb750 = uploadFileNames.get(thumbFile750.getName());
    }


}