import React from 'react';
import styles from './blogPreview.module.css';
import { Blog } from "../static/blogData";
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPreview(props: Blog) {
    return (
        <div className={styles.blog}>
          <h3 className={styles.blogName}>{props.title}</h3>
          <div className={styles.blogImageContainer}>
            <Image className={styles.blogImage} src={props.image} alt={props.imageAlt} width={500} height={500} />
          </div>
          <div className={styles.blogDetails}>
            <p className={styles.blogDescription}>{props.description}</p>
          </div>
          <p className={styles.postedOn}>Date: {props.date}</p>
          <Link href={`/blog/${props.slug}`} className={styles.readMore}>
            Read More
          </Link>
        </div>
    );
  }
