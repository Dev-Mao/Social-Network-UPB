import React from "react";
import Layout from "../home/layout";
import Head from "next/head";

export default function Contacts() {
  return (
    <>
      <Head>
        <title>Contactos</title>
      </Head>
      <Layout>
        <div style={{color: 'white', margin: '300px'}}>Contactos</div>
      </Layout>
    </>
  );
}
