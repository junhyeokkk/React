package co.kr.ianjeon.farmstoryapiserver.controller;

import co.kr.ianjeon.farmstoryapiserver.dto.PageRequestDTO;
import co.kr.ianjeon.farmstoryapiserver.dto.PageResponseDTO;
import co.kr.ianjeon.farmstoryapiserver.dto.ProductDTO;
import co.kr.ianjeon.farmstoryapiserver.service.ProductService;
import co.kr.ianjeon.farmstoryapiserver.util.CustomFileUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@Log4j2
@RestController
public class ProductController {

    private final ProductService productService;
    private final CustomFileUtil customFileUtil;

    @GetMapping("/product/{pg}")
    public PageResponseDTO<ProductDTO> list(PageRequestDTO pageRequestDTO) {
        PageResponseDTO<ProductDTO> pageResponseDTO = productService.list(pageRequestDTO);
        log.info(pageResponseDTO);

        return pageResponseDTO;
    }

    @GetMapping("/product/thumb/{fileName}")
    public ResponseEntity<Resource> thumbnail(@PathVariable String fileName) {
        return customFileUtil.getFile(fileName);
    }

    @PostMapping("/product")
    public Map<String, Integer> register( ProductDTO productDTO) {
        log.info("디티오" + productDTO);

        List<MultipartFile> files = productDTO.getThumbFiles();

        // 파일 저장 Map(원래이름, 저장이름)
        Map<String, String> uploadFileNames = customFileUtil.saveFiles(files);

        productDTO.setThumbNames(uploadFileNames);

        // 상품 저장
        int pno = productService.register(productDTO);

        return Map.of("pno", pno);

    }
}
