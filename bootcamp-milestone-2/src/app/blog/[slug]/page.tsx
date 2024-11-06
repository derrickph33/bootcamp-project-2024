"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import { blogs } from '../../static/blogData';
import styles from './blogPost.module.css';

export default function BlogPost() {
  const { slug } = useParams();

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <p>Blog post not found.</p>;
  }

  return (
    <>
      <main className={styles.mainContent}>
        <h1 className={styles.blogTitle}>{blog.title}</h1>
        <p className={styles.blogDate}>{blog.date}</p>
        <img src={blog.image} alt={blog.imageAlt} className={styles.blogImage} />
        <div className={styles.blogContent}>
          <p>{blog.description}</p>
        </div>
      </main>

      <footer className={styles.footer}>
        © 2024 Derrick Phan | All Rights Reserved
      </footer>
    </>
  );
}