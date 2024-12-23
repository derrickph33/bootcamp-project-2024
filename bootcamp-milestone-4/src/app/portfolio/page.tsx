"use client";

import React, { useEffect, useState } from "react";
import PortfolioPreview from "../components/portfolioPreview";
import Comment from "../components/comment";
import CommentPost from "../components/commentPost";
import Link from "next/link";

type CommentType = {
  id: string;
  user: string;
  comment: string;
  time: Date;
};

type ProjectType = {
  _id: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  link: string;
  comments: CommentType[];
};

export default function PortfolioPage() {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = async () => {
    try {
      const res = await fetch("/api/Projects");
      if (!res.ok) throw new Error("Failed to fetch projects");
      const data: ProjectType[] = await res.json();
      setProjects(data);
    } catch (err) {
      console.error("Error fetching projects:", err);
      setError("Failed to load portfolio projects.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <nav className="navbar">
        <h1 className="logo">
          <Link href="/" style={{ color: "white", textDecoration: "none" }}>
            Back to Homepage
          </Link>
        </h1>
      </nav>

      <main className="px-5 pt-2 pb-5">
        <h1 className="text-5xl font-bold text-center mb-3">Project Portfolio</h1>
        <h2 className="text-2xl text-center mb-5">
          Some of the projects I have worked on!
        </h2>
        <div id="portfolio-container" className="flex flex-wrap justify-center gap-5">
          {projects.length > 0 ? (
            projects.map((project) => (
              <div key={project._id} className="project-container">
                <PortfolioPreview
                  name={project.name}
                  description={project.description}
                  image={project.image}
                  imageAlt={project.imageAlt}
                  link={project.link}
                />
                <section>
                <h3 style={{ fontWeight: 'bold', fontSize: '1.25rem', marginTop: '1rem', marginBottom: '0.5rem' }}>Comments</h3>
                  {Array.isArray(project.comments) && project.comments.length > 0 ? (
                    project.comments.map((comment) => (
                    <Comment key={comment.id} comment={comment} />
                    ))
                    ) : (
                  <p>No comments yet. Be the first to comment!</p>
                  )}
                <CommentPost slug={project._id} endpoint="/api/Projects/comment" isBlog={false} onCommentAdded={fetchProjects} />
                </section>
              </div>
            ))
          ) : (
            <p className="text-center">No projects found. Please check back later!</p>
          )}
        </div>
      </main>
      <hr />

      <footer className="footer">© 2024 Derrick Phan | All Rights Reserved</footer>
    </>
  );
}
