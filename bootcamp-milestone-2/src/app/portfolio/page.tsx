import React from 'react';
import styles from '../components/portfolio.module.css';
import Image from 'next/image';

export default function PortfolioPage() {
  return (
    <>
      <main className="px-5 pt-5 pb-5">
        <h1 className="text-5xl font-bold text-center mb-5">Project Portfolio</h1>
        <h2 className="text-2xl text-center mb-5">Some of the projects I have worked on!</h2>

        <div className={styles.projectGrid}>
          <div className={styles.project}>
            <a href="/">
              <Image src="/images/akpsi.jpeg" alt="My Professional Headshot" width={500} height={300} className={styles.portfolioImage} />
            </a>
            <div className={styles.projectDetails}>
              <p className={styles.projectName}>Derrick Phan's Website</p>
              <p className={styles.projectDescription}>Come learn about me and my experiences by viewing my Website!</p>
              <a href="/">Link to Website</a>
            </div>
          </div>

          <div className={styles.project}>
            <a href="/">
              <Image src="/images/playtranspare_logo.jpeg" alt="Transpare Logo" width={500} height={300} className={styles.portfolioImage} />
            </a>
            <div className={styles.projectDetails}>
              <p className={styles.projectName}>Transpare.io</p>
              <p className={styles.projectDescription}>Transpare.io is an online gaming platform that supports a wide variety of online games and live sports tracking.</p>
              <a href="https://www.linkedin.com/company/playtranspare/posts/?feedView=all">Transpare LinkedIn</a>
            </div>
          </div>

          <div className={styles.project}>
            <a href="/">
              <Image src="/images/poly.jpg" alt="Polymaps Picture" width={500} height={300} className={styles.portfolioImage} />
            </a>
            <div className={styles.projectDetails}>
              <p className={styles.projectName}>Polymaps</p>
              <p className={styles.projectDescription}>Polymaps is an app that displays all 400+ clubs at Cal Poly, aimed to help students get integrated with campus life.</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer text-center p-4 bg-gray-100">
        © 2024 Derrick Phan | All Rights Reserved
      </footer>
    </>
  );
}
