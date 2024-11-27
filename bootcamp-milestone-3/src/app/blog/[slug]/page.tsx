import React from 'react';
import styles from './blogPost.module.css';
import Comment from '@/app/components/comment'; 

type Props = {
  params: { slug: string };
};

type CommentType = {
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
  comments: CommentType[]; // Comments are now embedded in the blog
};

async function getBlog(slug: string): Promise<BlogType | null> {
  try {
    const res = await fetch(`http://localhost:3000/api/Blogs/${slug}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch blog');
    }

    return res.json();
  } catch (err: unknown) {
    console.error(`Error fetching blog: ${err}`);
    return null;
  }
}

export default async function BlogPost({ params }: Props) {
  const blog = await getBlog(params.slug);

  if (!blog) {
    return <p>Blog post not found.</p>;
  }

  return (
    <>
      <main className={styles.mainContent}>
        <h1 className={styles.blogTitle}>{blog.title}</h1>
        <p className={styles.blogDate}>{blog.date}</p>
        <img
          src={blog.image}
          alt={blog.imageAlt || "Blog image"}
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
      </main>

      <footer className="footer">© 2024 Derrick Phan | All Rights Reserved</footer>
    </>
  );
}
