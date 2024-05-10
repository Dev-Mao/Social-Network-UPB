import React from "react";
import Layout from "../layout";
import Head from "next/head";
import Posts from "../../ui/components/Posts";
import { Post } from "../../types";

export default function General() {
  const posts: Post[] = [
    {
      title: "General 1",
      author: "John Doe",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra dui sapien. Fusce at auctor libero. Nunc sit amet ipsum ante. Praesent a ipsum leo. Mauris sollicitudin blandit dolor, sodales scelerisque arcu semper sit amet. Aliquam in sem augue. Donec scelerisque eleifend sem, eget feugiat eros bibendum in. Suspendisse dapibus laoreet magna, a blandit dolor ullamcorper quis. Duis lacinia ut erat ac bibe....",
      likes: 0,
      shares: 5,
    },
    {
      title: "General 2",
      author: "John Doe",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra dui sapien. Fusce at auctor libero. Nunc sit amet ipsum ante. Praesent a ipsum leo. Mauris sollicitudin blandit dolor, sodales scelerisque arcu semper sit amet. Aliquam in sem augue. Donec scelerisque eleifend sem, eget feugiat eros bibendum in. Suspendisse dapibus laoreet magna, a blandit dolor ullamcorper quis. Duis lacinia ut erat ac bibe....",
      likes: 1,
      shares: 2,
    },
    {
      title: "General 3",
      author: "John Doe",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra dui sapien. Fusce at auctor libero. Nunc sit amet ipsum ante. Praesent a ipsum leo. Mauris sollicitudin blandit dolor, sodales scelerisque arcu semper sit amet. Aliquam in sem augue. Donec scelerisque eleifend sem, eget feugiat eros bibendum in. Suspendisse dapibus laoreet magna, a blandit dolor ullamcorper quis. Duis lacinia ut erat ac bibe....",
      likes: 3,
      shares: 2,
    },
    {
      title: "General 4",
      author: "John Doe",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra dui sapien. Fusce at auctor libero. Nunc sit amet ipsum ante. Praesent a ipsum leo. Mauris sollicitudin blandit dolor, sodales scelerisque arcu semper sit amet. Aliquam in sem augue. Donec scelerisque eleifend sem, eget feugiat eros bibendum in. Suspendisse dapibus laoreet magna, a blandit dolor ullamcorper quis. Duis lacinia ut erat ac bibe....",
      likes: 4,
      shares: 1,
    },
    {
      title: "General 5",
      author: "John Doe",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra dui sapien. Fusce at auctor libero. Nunc sit amet ipsum ante. Praesent a ipsum leo. Mauris sollicitudin blandit dolor, sodales scelerisque arcu semper sit amet. Aliquam in sem augue. Donec scelerisque eleifend sem, eget feugiat eros bibendum in. Suspendisse dapibus laoreet magna, a blandit dolor ullamcorper quis. Duis lacinia ut erat ac bibe....",
      likes: 7,
      shares: 11,
    },
    {
      title: "General 6",
      author: "John Doe",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra dui sapien. Fusce at auctor libero. Nunc sit amet ipsum ante. Praesent a ipsum leo. Mauris sollicitudin blandit dolor, sodales scelerisque arcu semper sit amet. Aliquam in sem augue. Donec scelerisque eleifend sem, eget feugiat eros bibendum in. Suspendisse dapibus laoreet magna, a blandit dolor ullamcorper quis. Duis lacinia ut erat ac bibe....",
      likes: 4,
      shares: 2,
    },
  ];

  return (
    <>
      <Head>
        <title>General</title>
      </Head>
      <Layout>
        <Posts posts={posts} />
      </Layout>
    </>
  );
}
