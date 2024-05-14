"use client";
import React from "react";
import { useState } from "react";
import styles from "./CreatePost.module.css";
import { useRouter } from "next/navigation";

export default function CreatePostComponent() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const router = useRouter();

  const createPost = (event: React.FormEvent) => {
    event.preventDefault();
    if (title && content && category) {
      router.push("/home/general");
    }
  };

  return (
    <form className={styles.container} onSubmit={createPost}>
      <div className={styles.selectContainer}>
        <select
          name=""
          id=""
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="" disabled>
            Selecciona una categoría
          </option>
          <option value="general">General</option>
          <option value="complains">Quejas</option>
          <option value="buitreos">Buitreos</option>
        </select>
      </div>
      <input
        type="text"
        placeholder="Elige un título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        name=""
        id=""
        placeholder="Escribe lo que piensas..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      ></textarea>
      <button type="submit">Publicar</button>
    </form>
  );
}
