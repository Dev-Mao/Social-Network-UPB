package com.back.controller;

import com.back.dto.request.PostDTO;
import com.back.dto.response.PostRespDTO;
import com.back.service.IPostService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/post")
@RequiredArgsConstructor
public class PostController {

    private final IPostService postService;

    @GetMapping("/getall")
    public ResponseEntity<List<PostRespDTO>> getPost(){
        return new ResponseEntity<>(postService.getPost(), HttpStatus.OK);
    }

    @PostMapping("/new")
    public ResponseEntity<?> newPost(@RequestBody PostDTO postDTO){
        postService.createPost(postDTO);
        return ResponseEntity.ok("melo");
    }
}
