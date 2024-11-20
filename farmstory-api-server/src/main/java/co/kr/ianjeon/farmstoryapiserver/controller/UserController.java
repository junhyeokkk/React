package co.kr.ianjeon.farmstoryapiserver.controller;

import co.kr.ianjeon.farmstoryapiserver.JWT.JwtProvider;
import co.kr.ianjeon.farmstoryapiserver.Security.MyUserDetails;
import co.kr.ianjeon.farmstoryapiserver.dto.UserDTO;
import co.kr.ianjeon.farmstoryapiserver.entity.User;
import co.kr.ianjeon.farmstoryapiserver.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@Log4j2
@RequiredArgsConstructor
@RestController
public class UserController {

    private final UserService userService;
    private final AuthenticationManager authenticationManager;
    private final JwtProvider jwtProvider;

    @PostMapping("/user/login")
    public ResponseEntity login(@RequestBody UserDTO userDTO) {

        try {
            UsernamePasswordAuthenticationToken token
                    = new UsernamePasswordAuthenticationToken(userDTO.getUid(), userDTO.getPass());
            Authentication authentication = authenticationManager.authenticate(token);

            MyUserDetails userDetails = (MyUserDetails) authentication.getPrincipal();
            User user = userDetails.getUser();
            log.info("user" + user);

            // JWT 토큰 발행
            String accessToken = jwtProvider.createToken(user, 1);
            String refreshToken = jwtProvider.createToken(user, 7);
            log.info("access token: " + accessToken);

            // 리프레쉬 토큰 DB 저장

            // 토큰 전송
            Map<String, Object> resultMap = new HashMap<>();
            resultMap.put("useranme", user.getUid());
            resultMap.put("role", user.getRole());
            resultMap.put("grantType", " Bearer");
            resultMap.put("accessToken", accessToken);
            resultMap.put("refreshToken", refreshToken);

            return new ResponseEntity(resultMap, HttpStatus.OK);
        }catch (Exception e) {
            log.error(e);
            return new ResponseEntity(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/user")
    public ResponseEntity<UserDTO> register(@RequestBody UserDTO userDTO){
        UserDTO savedUser = userService.save(userDTO);

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(savedUser);
    }
}
