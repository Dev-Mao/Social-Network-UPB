import React from "react";
import styles from "./Posts.module.css";
import { Post } from "../../types";
import Image from "next/image";
import SignifierScroll from "./SignifierScroll";

export default function Posts({ posts }: { posts: Post[] }) {
  return (
    <section className={styles.container}>
      <ul id="container-posts">
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
      <SignifierScroll containerId="container-posts"/>
    </section>
  );
}
