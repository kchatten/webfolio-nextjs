'use client'

import { useState, useEffect } from 'react';
import ContentBlock from "../../../components/content/contentblock";
import styles from "./page.module.css"

interface Post {
  _id: string;
  id: string;
  category: string;
  subcategory: string;
  title: string;
  img?: string;
  lastModified: string;
  content: string;
}

export default function WebDevBasicsPage() {

  const [content, setContent] = useState<React.ReactNode[]>([<div key="load-key" style={{ textAlign: "center" }}>Loading...</div>])

  useEffect(() => {
    async function fetchData(): Promise<Post[]> {
      const response = await fetch(`http://localhost:3000/api/posts`);
      const data = await response.json();

      return Array.isArray(data.body?.post) ? data.body.post : [];
    }

    async function filterData() {
      const fetchedData = await fetchData();
      const filteredContent = fetchedData
        .filter((post: Post) => post.category === "webdev" && post.subcategory === "thebasics")
        .map((post: Post) => (
          <div
            key={post.id}
            className={styles.post}
          >
            <h2>{post.title}</h2>
            {post.img && <img src={post.img} />}
            <p>{post.lastModified}</p>
            <hr />
            <p>{post.content}</p>
          </div>
        ));

      if (filteredContent.length === 0) {
        setContent([
          <div
            key="no-posts"
            style={{ textAlign: "center" }}
          >
            No posts found
          </div>
        ]);
      } else {
        setContent(filteredContent);
      }
    }

    filterData();
  }, [])

  return (
    <main>
      <ContentBlock className={styles.lander} content={content} />
    </main>
  );
};