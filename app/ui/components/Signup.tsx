"use client";
import React from "react";
import { useState } from "react";
import styles from "./Signup.module.css";
import { useRouter } from "next/navigation";
import ConditionsModal from "./ConditionsModal";

export default function Login() {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    userId: "",
    password: "",
    confirmedPassword: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setError("")
    if (formData.password !== formData.confirmedPassword) {
      setError("Las contraseñas no coinciden");
    }
  };

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return showModal ? (
    <ConditionsModal handleClose={() => handleModal()} />
  ) : (
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
          type="text"
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
        <p>
          Al registrarte estás aceptando los{" "}
          <span className={styles.conditions} onClick={() => handleModal()}>
            Términos y condiciones.
          </span>
        </p>
        {error && <p className={styles.error}>{error}</p>}
        <button type="submit">Registrarme</button>
      </form>
      <span>¿Ya tienes una cuenta?</span>
      <button onClick={() => router.push("/")}>Iniciar sesión</button>
    </div>
  );
}
