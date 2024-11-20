package co.kr.ianjeon.farmstoryapiserver.repository;

import co.kr.ianjeon.farmstoryapiserver.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
}
