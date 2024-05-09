import React from "react";
import Layout from "../ui/layout";
import Head from "next/head";
import SignupComponent from "../ui/components/Signup";

export default function Login() {
  return (
    <>
      <Head>
        <title>Registro</title>
      </Head>
      <Layout>
       <SignupComponent/>
      </Layout>
    </>
  );
}
