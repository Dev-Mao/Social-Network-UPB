package com.back.service;

import com.back.dto.request.PostDTO;
import com.back.dto.response.PostRespDTO;
import com.back.dto.response.UserDTO;
import com.back.model.Post;
import com.back.model.User;
import com.back.repository.IPostRepository;
import com.back.repository.IUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PostService implements IPostService{

    private final IPostRepository postRepository;
    private final IUserRepository userRepository;
    @Override
    public List<PostRespDTO> getPost() {

        return postRepository.findAll().stream().map(post -> {
            return new PostRespDTO(
                    new UserDTO(
                            post.getAuthor().getEmail(),
                            post.getAuthor().getName(),
                            post.getAuthor().getCareer()
                    ),
                    post.getPublicationTime(),
                    post.getTitle(),
                    post.getContent(),
                    post.getCategory()
            );
        }).toList();
    }

    @Override
    public Object createPost(PostDTO postDTO) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = (User) authentication.getPrincipal();

        Post newPost = Post.builder()
                .id(postRepository.count()+1)
                .title(postDTO.getTitle())
                .category(postDTO.getCategory())
                .content(postDTO.getCategory())
                .publicationTime(LocalDateTime.now())
                .author(userRepository.findByEmail(user.getEmail()).get())
                .build();

        postRepository.save(newPost);
        return null;
    }
}
