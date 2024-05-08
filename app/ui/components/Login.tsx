"use client";
import React from "react";
import { useState, useRef } from "react";
import styles from "./Login.module.css";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const userInput = useRef(null);
  const passwordInput = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    setUser("");
    setPassword("");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="ID o Correo institucional"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          ref={userInput}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          ref={passwordInput}
          required
        />
        <button type="submit">Iniciar Sesión</button>
      </form>
      <span>¿Aún no tienes una cuenta?</span>
      <button>Registrarme</button>
    </div>
  );
}
