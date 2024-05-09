import React from "react";
import Layout from "./ui/layout";
import Head from "next/head";
import LoginComponent from "./ui/components/Login";

export default function Login() {
  return (
    <>
      <Head>
        <title>Inicio de sesión</title>
      </Head>
      <Layout>
       <LoginComponent/>
      </Layout>
    </>
  );
}
