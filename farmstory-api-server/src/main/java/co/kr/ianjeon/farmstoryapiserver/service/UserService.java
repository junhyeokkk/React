package co.kr.ianjeon.farmstoryapiserver.service;

import co.kr.ianjeon.farmstoryapiserver.dto.UserDTO;
import co.kr.ianjeon.farmstoryapiserver.entity.User;
import co.kr.ianjeon.farmstoryapiserver.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;
    private final ModelMapper modelMapper;
    private final PasswordEncoder passwordEncoder;

    public UserDTO save(UserDTO userDTO) {

        String encodePass = passwordEncoder.encode(userDTO.getPass());
        userDTO.setPass(encodePass);

        User user = modelMapper.map(userDTO, User.class);
        User savedUser = userRepository.save(user);

        return modelMapper.map(savedUser, UserDTO.class);
    }

}
