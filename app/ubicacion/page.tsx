import React from "react";
import Layout from "../home/layout";
import Head from "next/head";
import GoogleMaps from "../ui/components/Map";

export default function Location() {
  return (
    <>
      <Head>
        <title>Ubicación</title>
      </Head>
      <Layout>
        <GoogleMaps />
      </Layout>
    </>
  );
}
