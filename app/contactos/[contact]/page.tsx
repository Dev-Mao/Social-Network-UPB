import React from "react";
import Layout from "../../home/layout";
import Head from "next/head";
import ChatView from "../../ui/components/Chat";

export default function Chat({params} : {params: {contact: string}}) {
  const decodedName = params.contact ? decodeURIComponent(params.contact as string) : "";
  return (
    <>
      <Head>
        <title>Contactos</title>
      </Head>
      <Layout placeholder="Buscar contacto por nombre o carrera">
        <ChatView name={decodedName} />
      </Layout>
    </>
  );
}
