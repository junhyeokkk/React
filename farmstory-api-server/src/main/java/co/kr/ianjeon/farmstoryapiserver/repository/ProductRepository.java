package co.kr.ianjeon.farmstoryapiserver.repository;

import co.kr.ianjeon.farmstoryapiserver.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
}
