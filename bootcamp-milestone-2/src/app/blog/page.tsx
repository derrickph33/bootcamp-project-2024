import React from 'react';
import BlogPreview from '../components/blogPreview'; 
import { blogs } from "../static/blogData"; 

export default function BlogPage() {
  return (
    <>
      <nav className="navbar">
        <h1 className="logo">
          <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Back to Homepage</a>
        </h1>
      </nav>

      <main className="px-5 pt-2 pb-5">
        <h1 className="text-5xl font-bold text-center mb-3">Blogs</h1>
        <h2 className="text-2xl text-center mb-5">Some of the things I've been up to recently!</h2>
        <div id="blog-container" className="flex flex-wrap justify-center gap-5">
          {blogs.map(blog => 
            <BlogPreview 
              key={blog.slug} 
              {...blog}
            />
          )}
        </div>
      </main>
      <hr />

      <footer className="footer">© 2024 Derrick Phan | All Rights Reserved</footer>
    </>
  );
}
