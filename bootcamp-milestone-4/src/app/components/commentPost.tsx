"use client";

import React, { useState } from 'react';
import styles from './commentPost.module.css'; 

interface CommentPostProps {
  slug: string;
  endpoint: string; 
  isBlog: boolean;
  onCommentAdded: () => void; 
}

const CommentPost: React.FC<CommentPostProps> = ({ slug, endpoint, isBlog, onCommentAdded }) => {
  const [user, setUser] = useState('');
  const [comment, setComment] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const payload = isBlog
        ? { user, comment } // Blogs require only user and comment
        : { projectId: slug, user, comment }; // Projects require projectId

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setUser('');
      setComment('');
      onCommentAdded();
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred');
      console.error('Error submitting comment:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.commentForm}>
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles.formGroup}>
        <label htmlFor="user" className={styles.label}>Name:</label>
        <input
          id="user"
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
          className={styles.input}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="comment" className={styles.label}>Comment:</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
          className={styles.textarea}
        ></textarea>
      </div>
      <button type="submit" disabled={loading} className={styles.submitButton}>
        {loading ? 'Posting...' : 'Post Comment'}
      </button>
    </form>
  );
};

export default CommentPost;

