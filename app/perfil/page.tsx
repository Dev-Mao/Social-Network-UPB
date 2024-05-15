import React from "react";
import Layout from "../home/layout";
import Head from "next/head";
import ProfileComponent from "../ui/components/ProfileComponent";

export default function Profile() {
  return (
    <>
      <Head>
        <title>Perfil</title>
      </Head>
      <Layout>
        <ProfileComponent />
      </Layout>
    </>
  );
}
