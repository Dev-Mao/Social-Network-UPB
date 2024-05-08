"use client";
import React from "react";
import { useState } from "react";
import styles from "./Signup.module.css";
import { useRouter } from "next/navigation";

export default function Login() {
  const [formData, setFormData] = useState({});
  const router = useRouter()

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Nombre(s)"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Apellido(s)"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Correo institucional"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="userId"
          placeholder="ID"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Correo institucional"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          onChange={handleChange}
          required
        />
        <input
           type="password"
           name="confirmedPassword"
          placeholder="Confirma contraseña"
          onChange={handleChange}
          required
        />
        <button type="submit">Registrarme</button>
      </form>
      <span>¿Ya tienes una cuenta?</span>
      <button onClick={() => router.push("/")}>Iniciar sesión</button>
    </div>
  );
}
