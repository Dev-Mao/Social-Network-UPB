import React from "react";
import Layout from "../layout";
import Head from "next/head";
import Posts from "../../ui/components/Posts";
import { Post } from "../../types";

export default function Buitreos() {
  const posts: Post[] = [
    {
      title: "Buitreos 1",
      author: "John Doe",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra dui sapien. Fusce at auctor libero. Nunc sit amet ipsum ante. Praesent a ipsum leo. Mauris sollicitudin blandit dolor, sodales scelerisque arcu semper sit amet. Aliquam in sem augue. Donec scelerisque eleifend sem, eget feugiat eros bibendum in. Suspendisse dapibus laoreet magna, a blandit dolor ullamcorper quis. Duis lacinia ut erat ac bibe....",
      likes: 0,
      shares: 5,      
      images: ["/img/buitreo.png", "/img/buitreo.png"]
    },
    {
      title: "Buitreos 1",
      author: "John Doe",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra dui sapien. Fusce at auctor libero. Nunc sit amet ipsum ante. Praesent a ipsum leo. Mauris sollicitudin blandit dolor, sodales scelerisque arcu semper sit amet. Aliquam in sem augue. Donec scelerisque eleifend sem, eget feugiat eros bibendum in. Suspendisse dapibus laoreet magna, a blandit dolor ullamcorper quis. Duis lacinia ut erat ac bibe....",
      likes: 0,
      shares: 5,
    },{
      title: "Buitreos 1",
      author: "John Doe",
      likes: 0,
      shares: 5,            
      images: ["/img/buitreo.png"]
    },   
  ];

  return (
    <>
      <Head>
        <title>Buitreos</title>
      </Head>
      <Layout>
        <Posts posts={posts} />
      </Layout>
    </>
  );
}
