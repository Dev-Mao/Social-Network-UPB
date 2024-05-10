import React from "react";
import Layout from "../home/layout";
import Head from "next/head";

export default function Qa() {
  return (
    <>
      <Head>
        <title>Preguntas</title>
      </Head>
      <Layout>
        <div style={{color: 'white', margin: '300px'}}>Preguntas</div>
      </Layout>
    </>
  );
}