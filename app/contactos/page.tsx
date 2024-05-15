import React from "react";
import Layout from "../home/layout";
import Head from "next/head";
import ContactsList from "../ui/components/Contacts";

export default function Contacts() {
  return (
    <>
      <Head>
        <title>Contactos</title>
      </Head>
      <Layout placeholder="Buscar contacto por nombre o carrera">
        <ContactsList/>
      </Layout>
    </>
  );
}
