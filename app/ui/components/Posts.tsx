"use client";

import React from "react";
import styles from "./Posts.module.css";
import { Post } from "../../types";
import Image from "next/image";
import { useEffect } from "react";

export default function Posts({ posts }: { posts: Post[] }) {
  const scrollHandler = () => {
    const container = document.getElementById("container-posts");
    const scrollIcon = document.getElementById("scroll-indicator");
    if (
      container &&
      scrollIcon &&
      container.scrollHeight > container.clientHeight
    ) {
      scrollIcon.style.display = "block";
    } else if (scrollIcon) {
      scrollIcon.style.display = "none";
    }
    if (
      container &&
      scrollIcon &&
      (Math.ceil(container.scrollHeight - container.scrollTop) ===
        container.clientHeight ||
        Math.floor(container.scrollHeight - container.scrollTop) ===
          container.clientHeight)
    ) {
      scrollIcon.style.display = "none";
    }
  };

  useEffect(() => {
    scrollHandler();
  }, []);

  return (
    <section className={styles.container}>
      <ul id="container-posts" onScroll={() => scrollHandler()}>
        {posts.map(
          ({ title, author, content, likes, shares, images }, index) => (
            <li key={index}>
              <h3>{title}</h3>
              <div className={styles.author}>
                <Image
                  src={"/icons/author.png"}
                  width={35}
                  height={35}
                  alt="Ícono Autor"
                  priority={true}
                />
                {author}
              </div>
              {content && <p>{content}</p>}
              {images && (
                <div className={styles.images}>
                  {images.map((image, index) => (
                    <Image
                      src={image}
                      width={100}
                      height={100}
                      alt="image"
                      priority={true}
                      key={index}
                    />
                  ))}
                </div>
              )}
              <div className={styles.interactions}>
                <Image
                  src={"/icons/arrows.png"}
                  width={35}
                  height={35}
                  alt="Ícono likes"
                  priority={true}
                />
                <span>{likes}</span>
                <Image
                  src={"/icons/share.png"}
                  width={35}
                  height={35}
                  alt="Ícono compartir"
                  priority={true}
                />
                <span>{shares}</span>
              </div>
            </li>
          )
        )}
      </ul>
      <Image
        src={"/icons/scroll.png"}
        width={70}
        height={70}
        alt="Ícono scroll"
        priority={true}
        id="scroll-indicator"
        className={styles.scrollIndicator}
      />
    </section>
  );
}
