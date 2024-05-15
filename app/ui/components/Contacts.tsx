import React from "react";
import Image from "next/image";
import SignifierScroll from "./SignifierScroll";
import styles from "./Contacts.module.css";
import Link from "next/link";

export default function ContactsList() {
  const contacts = [
    { name: "Valeria García", career: "Ingeniería de Software" },
    { name: "Mario López", career: "Medicina" },
    { name: "Lucía Martínez", career: "Derecho" },
    { name: "Carlos Fernández", career: "Arquitectura" },
    { name: "Ana González", career: "Ingeniería Civil" },
    { name: "Luis Rodríguez", career: "Psicología" },
    { name: "María Sánchez", career: "Biología" },
    { name: "José Díaz", career: "Economía" },
    { name: "Laura Morales", career: "Filosofía" },
    { name: "Pedro Martín", career: "Educación" },
    { name: "Marta Rivera", career: "Ingeniería Eléctrica" },
    { name: "Jorge Ramírez", career: "Ingeniería Mecánica" },
    { name: "Elena Pérez", career: "Química" },
    { name: "Andrés Gómez", career: "Física" },
    { name: "Patricia Torres", career: "Literatura" },
    { name: "Diego Flores", career: "Historia" },
    { name: "Sandra Navarro", career: "Administración de Empresas" },
    { name: "Roberto Santos", career: "Contabilidad" },
    { name: "Claudia Herrera", career: "Ingeniería Industrial" },
    { name: "Alberto Castillo", career: "Enfermería" },
  ];

  return (
    <section className={styles.container}>
      <ul id="container-contacts">
        {contacts.map(({ name, career }, index) => (
          <li key={index}>
            <Image
              src={"/icons/author.png"}
              width={45}
              height={45}
              alt="Ícono Autor"
              priority={true}
            />
            <div className={styles.info}>
              <h3>{name}</h3>
              <span>{career}</span>
            </div>
            <Link href={`/contactos/${name}`}>
              <Image
                src={"/icons/message.png"}
                width={35}
                height={35}
                alt="Ícono de mensajes"
                priority={true}
              />
            </Link>
          </li>
        ))}
      </ul>
      <SignifierScroll containerId="container-contacts" />
    </section>
  );
}
