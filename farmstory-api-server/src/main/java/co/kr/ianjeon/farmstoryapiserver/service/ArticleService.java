package co.kr.ianjeon.farmstoryapiserver.service;

import co.kr.ianjeon.farmstoryapiserver.dto.ArticleDTO;
import co.kr.ianjeon.farmstoryapiserver.dto.PageRequestDTO;
import co.kr.ianjeon.farmstoryapiserver.dto.PageResponseDTO;
import co.kr.ianjeon.farmstoryapiserver.entity.Article;
import co.kr.ianjeon.farmstoryapiserver.entity.User;
import co.kr.ianjeon.farmstoryapiserver.repository.ArticleRepository;
import jakarta.persistence.Tuple;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@RequiredArgsConstructor
@Service
public class ArticleService {

    private final ArticleRepository articleRepository;
    private final ModelMapper modelMapper;


    public PageResponseDTO findAll(PageRequestDTO pageRequestDTO) {
        Pageable pageable = pageRequestDTO.getPageable("no");

        Page<Article> pageArticle = articleRepository.findAllByCate(pageRequestDTO.getCate(), pageable);


        // 엔티티 리스트를 DTO로 변환
        List<ArticleDTO> articleDTOs = pageArticle.getContent().stream()
                .map(entity -> {
                                ArticleDTO articleDTO = modelMapper.map(entity, ArticleDTO.class);
                                articleDTO.setWriter(entity.getWriter().getNick());
                                return articleDTO;
        }).toList();

        int total  = (int) pageArticle.getTotalElements();

        return PageResponseDTO.builder()
                .pageRequestDTO(pageRequestDTO)
                .dtoList(articleDTOs)
                .total(total)
                .build();
    }

    public int save(ArticleDTO articleDTO) {
        Article article = modelMapper.map(articleDTO, Article.class);
        User user = User.builder().uid(articleDTO.getWriter()).build();

        article.setWriter(user);
        Article savedArticle = articleRepository.save(article);

        return savedArticle.getNo();
    }


}
