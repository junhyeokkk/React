package co.kr.ianjeon.farmstoryapiserver.controller;

import co.kr.ianjeon.farmstoryapiserver.dto.ArticleDTO;
import co.kr.ianjeon.farmstoryapiserver.dto.PageRequestDTO;
import co.kr.ianjeon.farmstoryapiserver.dto.PageResponseDTO;
import co.kr.ianjeon.farmstoryapiserver.service.ArticleService;
import jakarta.annotation.security.PermitAll;
import jakarta.annotation.security.RolesAllowed;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@Log4j2
@RestController
public class ArticleController {

    private final ArticleService articleService;



    @GetMapping("/article/{cate}/{pg}")
    public PageResponseDTO list(PageRequestDTO pageRequestDTO) {

      PageResponseDTO articleDTOS = articleService.findAll(pageRequestDTO);



        return articleDTOS;

    }
    @PostMapping("/article")
    public ResponseEntity write(@RequestBody ArticleDTO articleDTO, HttpServletRequest request) {


        articleDTO.setRegip(request.getRemoteAddr());
        int no = articleService.save(articleDTO);

        return ResponseEntity.ok().body(no);
    }
}
