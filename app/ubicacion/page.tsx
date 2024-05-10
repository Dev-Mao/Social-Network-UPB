import React from "react";
import Layout from "../home/layout";
import Head from "next/head";

export default function Location() {
  return (
    <>
      <Head>
        <title>Ubicación</title>
      </Head>
      <Layout>
        <div style={{color: 'white', margin: '300px'}}>Ubicación</div>
      </Layout>
    </>
  );
}
