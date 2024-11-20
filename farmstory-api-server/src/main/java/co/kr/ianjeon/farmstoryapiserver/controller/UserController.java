package co.kr.ianjeon.farmstoryapiserver.controller;

import co.kr.ianjeon.farmstoryapiserver.dto.UserDTO;
import co.kr.ianjeon.farmstoryapiserver.entity.User;
import co.kr.ianjeon.farmstoryapiserver.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Log4j2
@RequiredArgsConstructor
@RestController
public class UserController {

    private final UserService userService;

    @GetMapping
    public ResponseEntity login(){
        return null;
    }

    @PostMapping("/user")
    public ResponseEntity<UserDTO> register(@RequestBody UserDTO userDTO){
        UserDTO savedUser = userService.save(userDTO);

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(savedUser);
    }
}
