"use client";
import React from "react";
import { useState } from "react";
import styles from "./Login.module.css";
import { useRouter } from "next/navigation";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("null");
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (user.length > 0 && password.length > 0) {
      router.push("/home/general");
    }
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
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Iniciar sesión</button>
      </form>
      <span>¿Aún no tienes una cuenta?</span>
      <button type="button" onClick={() => router.push("/registro")}>
        Registrarme
      </button>
    </div>
  );
}
