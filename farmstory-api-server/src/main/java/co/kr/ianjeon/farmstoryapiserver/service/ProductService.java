package co.kr.ianjeon.farmstoryapiserver.service;

import co.kr.ianjeon.farmstoryapiserver.dto.PageRequestDTO;
import co.kr.ianjeon.farmstoryapiserver.dto.PageResponseDTO;
import co.kr.ianjeon.farmstoryapiserver.dto.ProductDTO;
import co.kr.ianjeon.farmstoryapiserver.entity.Product;
import co.kr.ianjeon.farmstoryapiserver.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Log4j2
@RequiredArgsConstructor
@Service
public class ProductService {

    private final ProductRepository productRepository;
    private final ModelMapper modelMapper;

    public int register(ProductDTO productDTO){

        Product product = modelMapper.map(productDTO, Product.class);
        Product savedProduct = productRepository.save(product);

        return savedProduct.getPno();
    }

    public PageResponseDTO<ProductDTO> list(PageRequestDTO pageRequestDTO) {


        log.info("pageRequestDTO : " + pageRequestDTO);

        Pageable pageable = PageRequest.of(
                pageRequestDTO.getPg() - 1 ,  // 1페이지가 0이므로 주의
                pageRequestDTO.getSize(),
                Sort.by("pno").descending());

        Page<Product> productPage = productRepository.findAll(pageable);

        List<ProductDTO> dtoList = productPage.getContent().stream()
                .map(entity -> modelMapper.map(entity, ProductDTO.class))
                .toList();

        int total = (int) productPage.getTotalElements();

        PageResponseDTO<ProductDTO> responseDTO = PageResponseDTO.<ProductDTO>builder()
                .dtoList(dtoList)
                .pageRequestDTO(pageRequestDTO)
                .total(total)
                .build();

        return responseDTO;
    }

}