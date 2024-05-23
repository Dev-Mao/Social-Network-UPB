package com.back.controller;

import com.back.dto.request.LoginDTO;
import com.back.dto.request.RegisterDTO;
import com.back.dto.response.AuthDTO;
import com.back.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<AuthDTO> login(@RequestBody LoginDTO loginDTO){
        return ResponseEntity.ok(authService.login(loginDTO));
    }

    @PostMapping("/register")
    public ResponseEntity<AuthDTO> register(@RequestBody RegisterDTO registerDTO){
        return ResponseEntity.ok(authService.register(registerDTO));
    }

    @GetMapping("/a")
    public ResponseEntity<Object> a(){
        return new ResponseEntity<>(authService.a(), HttpStatus.OK);
    }
}
