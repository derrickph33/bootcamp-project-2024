import React from 'react';
import BlogPreview from '../components/blogPreview'; 
import connectDB from '../database/db';
import Blog from '../database/blogSchema';
import Link from 'next/link';

async function getBlogs(){
	await connectDB() // function from db.ts before

	try {
		// query for all blogs and sort by date
	    const blogs = await Blog.find().sort({ date: -1 }).orFail()
		// send a response as the blogs as the message
	    return blogs
	} catch (err) {
        console.error("Error fetching blogs:", err);
	    return null
	}
}

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
      <>
          <nav className="navbar">
              <h1 className="logo">
                  <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Back to Homepage</Link>
              </h1>
          </nav>

          <main className="px-5 pt-2 pb-5">
              <h1 className="text-5xl font-bold text-center mb-3">Blogs</h1>
              <h2 className="text-2xl text-center mb-5">Some of the things I&apos;ve been up to recently!</h2>
              <div id="blog-container" className="flex flex-wrap justify-center gap-5">
                  {blogs && blogs.length > 0 ? (
                      blogs.map((blog) => (
                          <BlogPreview
                          key={blog.slug}
                          title={blog.title}
                          date={blog.date}
                          description={blog.description}
                          image={blog.image}
                          imageAlt={blog.imageAlt}
                          slug={blog.slug}
                          link={blog.link}
                          />
                      ))
                  ) : (
                      <p className="text-center">No blogs found. Please check back later!</p>
                  )}
              </div>
          </main>
          <hr />

          <footer className="footer">© 2024 Derrick Phan | All Rights Reserved</footer>
      </>
  );
}