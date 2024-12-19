import React from 'react';
import styles from './portfolioPreview.module.css';
import { Project } from "../static/portfolioData";
import Image from 'next/image';
import Link from 'next/link';

export default function PortfolioPreview(props: Project) {
    return (
        <div className={styles.project}>
          <h3 className={styles.projectName}>{props.name}</h3>
          <div className={styles.projectImageContainer}>
            <Image className={styles.projectImage} src={props.image} alt={props.imageAlt} width={500} height={500} />
          </div>
          <div className={styles.projectDetails}>
            <p className={styles.projectDescription}>{props.description}</p>
          </div>
          <Link href={props.link || '/'} className={styles.viewProject}>
            View Project
          </Link>
        </div>
    );
}

