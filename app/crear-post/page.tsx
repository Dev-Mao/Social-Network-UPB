import React from "react";
import Layout from "../home/layout";
import Head from "next/head";
import CreatePostComponent from "../ui/components/CreatePost";

export default function CreatePost() {
  return (
    <>
      <Head>
        <title>Crear post</title>
      </Head>
      <Layout>
        <CreatePostComponent />
      </Layout>
    </>
  );
}
