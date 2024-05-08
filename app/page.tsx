import React from "react";
import Layout from "./ui/layout";
import Head from "next/head";
import LoginComponent from "./ui/components/Login";

export default function Login() {
  return (
    <>
      <Head>
        <title>My page title</title>
      </Head>
      <Layout title="Login" description="Inicio de sesión">
       <LoginComponent/>
      </Layout>
    </>
  );
}
