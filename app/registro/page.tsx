import React from "react";
import Layout from "../ui/layout";
import Head from "next/head";
import SignupComponent from "../ui/components/Signup";

export default function Login() {
  return (
    <>
      <Head>
        <title>My page title</title>
      </Head>
      <Layout title="Registro" description="Registro de usuario">
       <SignupComponent/>
      </Layout>
    </>
  );
}
