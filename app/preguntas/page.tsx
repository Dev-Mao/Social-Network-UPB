import React from "react";
import Layout from "../home/layout";
import Head from "next/head";
import QuestionsList from "../ui/components/Questions";

export default function Qa() {
  return (
    <>
      <Head>
        <title>Preguntas</title>
      </Head>
      <Layout>
        <QuestionsList/>
      </Layout>
    </>
  );
}
