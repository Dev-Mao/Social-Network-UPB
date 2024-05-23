package com.back.service;


import com.back.dto.request.PostDTO;
import com.back.dto.response.PostRespDTO;

import java.util.List;

public interface IPostService {
    List<PostRespDTO> getPost();

    Object createPost(PostDTO postDTO);
}
