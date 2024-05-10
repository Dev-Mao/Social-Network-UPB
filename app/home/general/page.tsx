import React from "react";
import Layout from "../layout";
import Head from "next/head";

export default function General() {
  return (
    <>
      <Head>
        <title>General</title>
      </Head>
      <Layout>
        <div style={{color: 'white', margin: '300px'}}>General</div>
      </Layout>
    </>
  );
}
