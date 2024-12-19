import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className={style.navbar}>
      <h1 className={style.logo}>
        <Link href="/">Derrick's Personal Website</Link>
      </h1>
      <nav>
        <ul className={style.navList}>
          <li>
            <Link href="/">Homepage</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/resume">Resume</Link>
          </li>
          <li>
            <Link href="/contact">Contact Me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}