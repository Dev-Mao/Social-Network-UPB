package com.back.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class PostRespDTO {
    private UserDTO author;
    private LocalDateTime publicationTime;
    private String title;
    private String content;
    private String category;

}
