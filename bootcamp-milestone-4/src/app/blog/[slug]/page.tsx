"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import styles from './blogPost.module.css';
import Comment from '@/app/components/comment';
import CommentPost from '@/app/components/commentPost';
import Image from 'next/image';

type CommentType = {
  id: string;
  user: string;
  comment: string;
  time: Date;
};

type BlogType = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  comments: CommentType[];
};

const BlogPost = () => {
  const params = useParams();
  const slugParam = params?.slug;
  const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam;
  const [blog, setBlog] = useState<BlogType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!slug) {
        setError('Invalid blog slug.');
        setLoading(false);
        return;
      }
  
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/Blogs/${encodeURIComponent(slug)}`, {
          cache: 'no-store',
        });
  
        if (!res.ok) {
          throw new Error('Failed to fetch blog');
        }
  
        const data: BlogType = await res.json();
  
        if (data.comments) {
          data.comments = data.comments.map((c) => ({
            ...c,
            time: new Date(c.time),
          }));
        }
  
        setBlog(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error(`Error fetching blog: ${err.message}`);
          setError('Failed to load blog post.');
        }
      } finally {
        setLoading(false);
      }
    };
  
    fetchBlog();
  }, [slug]);

  const handleCommentAdded = () => {
    const fetchBlog = async () => {
      if (slug) {
        try {
          const res = await fetch(`/api/Blogs/${encodeURIComponent(slug)}`, {
            cache: 'no-store',
          });
          if (res.ok) {
            const data: BlogType = await res.json();
            setBlog(data);
          }
        } catch (err) {
          console.error('Failed to refresh comments:', err);
        }
      }
    };

    fetchBlog();
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error || !blog) {
    return <p>{error || 'Blog post not found.'}</p>;
  }

  return (
    <>
      <main className={styles.mainContent}>
        <h1 className={styles.blogTitle}>{blog.title}</h1>
        <p className={styles.blogDate}>{blog.date}</p>
        <Image
          src={blog.image}
          alt={blog.imageAlt || 'Blog image'}
          width={800}
          height={450}
          className={styles.blogImage}
        />
        <div className={styles.blogContent}>
          <p>{blog.description}</p>
        </div>

        <section>
          <h2 className={styles.commentsHeader}>Comments</h2>
          {blog.comments && blog.comments.length > 0 ? (
            blog.comments.map((comment, index) => (
              <Comment key={index} comment={comment} />
            ))
          ) : (
            <p>No comments yet. Be the first to comment!</p>
          )}
        </section>

        <section>
          <h3 className={styles.commentsHeader}>Leave a Comment</h3>
          {typeof slug === 'string' && (
            <CommentPost slug={slug} endpoint={`/api/Blogs/${encodeURIComponent(slug)}/comment`} isBlog={true} onCommentAdded={handleCommentAdded} />
          )}
        </section>
      </main>

      <footer className="footer">© 2024 Derrick Phan | All Rights Reserved</footer>
    </>
  );
};

export default BlogPost;
