package com.back.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class RegisterDTO {
    private String email;
    private Long id;
    private String firstName;
    private String lastName;
    private String career;
    private String password;
}