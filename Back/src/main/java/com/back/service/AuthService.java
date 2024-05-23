package com.back.service;

import com.back.dto.request.LoginDTO;
import com.back.dto.request.RegisterDTO;
import com.back.dto.response.AuthDTO;
import com.back.jwt.JwtService;
import com.back.model.Role;
import com.back.model.User;
import com.back.repository.IUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final IUserRepository userRepository;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    public AuthDTO login(LoginDTO loginDTO) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginDTO.getEmail(), loginDTO.getPassword()));
        UserDetails user = userRepository.findByEmail(loginDTO.getEmail()).orElseThrow();
        String token = jwtService.getToken(user);
        return AuthDTO.builder()
                .token(token)
                .build();
    }

    public AuthDTO register(RegisterDTO registerDTO) {
        User user = User.builder()
                .email(registerDTO.getEmail())
                .id(registerDTO.getId())
                .name(registerDTO.getFirstName() + registerDTO.getLastName())
                .career(registerDTO.getCareer())
                .password(passwordEncoder.encode(registerDTO.getPassword()))
                .role(Role.USER)
                .build();
        userRepository.save(user);

        return AuthDTO.builder().token(jwtService.getToken(user)).build();
    }

    public Object a() {
        return userRepository.findAll();
    }
}
