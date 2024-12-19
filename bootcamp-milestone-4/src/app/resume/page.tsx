import React from "react";

export default function Resume() {
  return (
    <main className="px-5 pt-5 pb-5">
      <h1 className="text-5xl font-bold text-center mb-1">Resume</h1>

      <div className="text-center mb-4">
        <a
          href="/Derrick_Phan-Resume_Y3.pdf"
          download
          className="inline-block bg-cg-black text-cg-white font-mono px-6 py-3 rounded hover:bg-cg-blue transition-colors duration-300 text-lg">
          Download Resume
        </a>
      </div>

      <div>
        <section className="section">
          <h2 className="section-title">Education</h2>
          <div className="entry">
            <h3 className="entry-title">Bachelor of Science in Computer Science</h3>
            <p className="entry-info">
              <em>California Polytechnic State University - San Luis Obispo, 2026</em>
            </p>
            <p className="entry-info">
              <strong>Relevant Coursework:</strong>
            </p>
            <ul className="course-list">
              <li>Data Structures</li>
              <li>Object Oriented Programming</li>
              <li>Computer Organization</li>
              <li>System Programming</li>
              <li>Discrete Structures</li>
              <li>Design and Analysis of Algorithms</li>
              <li>Software Engineering</li>
              <li>Computer Architecture</li>
            </ul>
          </div>
        </section>

        <hr />

        <section className="section">
          <h2 className="section-title">Experience</h2>
          
          <div className="entry">
            <h3 className="entry-title">
              Web Development Intern at Cal Poly Bailey College of Science and Math
            </h3>
            <p className="entry-info">
              <em>March 2024 - Present</em>
            </p>
            <ul className="entry-description">
              <li>
                Oversee 23 subdomains handling 15,000+ users using HTML, CSS, JavaScript, and Drupal, enhancing functionality and visibility while ensuring prompt resolution of technical issues to retain user satisfaction and website reliability.
              </li>
              <li>
                Consult for Cal Poly by revising and revamping limitations of subdomains and collaborating with clients of each subdomain, utilizing Trello and Excel to manage project implementation, deadlines, and communication.
              </li>
              <li>
                Performed data analysis and assessed user experience through Google Analytics to facilitate website redesigning, improving performance and usability with a 20% increase in user engagement and a 70% reduction in broken links.
              </li>
            </ul>
          </div>

          <div className="entry">
            <h3 className="entry-title">Area Manager at Amazon</h3>
            <p className="entry-info">
              <em>June 2024 - September 2024</em>
            </p>
            <ul className="entry-description">
              <li>
                Managed operations at LIT2 in the Ship Dock department of 30+ Amazon Associates, ensuring that 12,000+ daily packages are shipped on time while maintaining product quality and excellence to sustain customer satisfaction.
              </li>
              <li>
                Initiated a process improvement called dynamic pallet binding on sorting lines, improving associate rates by 15% and decreasing missed packages by 17%, ultimately resulting in annual savings of over $270,000.
              </li>
              <li>
                Fostered a positive work environment for all Amazon Associates, emphasizing communication and collaboration.
              </li>
            </ul>
          </div>
        </section>

        <hr />

        <section className="section">
          <h2 className="section-title">Projects</h2>
          
          <div className="entry">
            <h3 className="entry-title">Polymaps</h3>
            <p className="entry-info">
              <em>React Native, JavaScript, CSS, Firebase, Apple Maps API, VS Code, XCode, GitHub</em>
            </p>
            <ul className="entry-description">
              <li>
                Developing a full-stack IOS app that integrates Apple Maps API to display a map of 400+ clubs and organizations on the Cal Poly campus, with the purpose of helping students get involved with on-campus activities.
              </li>
              <li>
                Incorporated user-friendly interfaces and functionalities including unique to user calendars, location and club search systems, club information cards, and date filters using React Native libraries.
              </li>
              <li>
                Implemented Firebase authentication for secure user login and utilized its database to store club and event details.
              </li>
            </ul>
          </div>

          <div className="entry">
            <h3 className="entry-title">Transpare.io</h3>
            <p className="entry-info">
              <em>React, JavaScript, HTML/CSS, GraphQL, VS Code, GitHub</em>
            </p>
            <ul className="entry-description">
              <li>
                Built a digital gaming platform/webpage that allowed players to experience a diverse range of entertaining games.
              </li>
              <li>
                Engineered the architecture, back-end logic, and database of the sports page, establishing operational success.
              </li>
              <li>
                Enhanced the user interface by optimizing navigation and incorporating intuitive design elements, resulting in more visual consistency, guaranteeing a seamless and user-friendly experience.
              </li>
            </ul>
          </div>
        </section>

        <hr />

        <section className="section">
          <h2 className="section-title">Skills and Interests</h2>
          
          <div className="skills">
            <h3 className="entry-title">Skills</h3>
            <ul className="skill-list">
              <li>Programming Languages: Python, Java, C, JavaScript, TypeScript, HTML/CSS, R, RISC-V Assembly, GraphQL, Snap</li>
              <li>Frameworks: React/React Native, Node.js, FlutterFlow, Firebase, Tailwind CSS, JUnit, Google API, Apple Maps API</li>
              <li>Developer Tools: Git, GitHub, VS Code, XCode, PyCharm, IntelliJ, Clion, Unix, Google Analytics, Google Cloud Platform, Screaming Frog SEO, Figma, Adobe, Microsoft Excel</li>
              <li>Languages: English, Mandarin, Spanish (Limited Proficiency)</li>
            </ul>
          </div>

          <div className="interests">
            <h3 className="entry-title">Interests</h3>
            <ul className="interest-list">
              <li>Artificial Intelligence, Cybersecurity, Web Development, Table Tennis, Basketball, Golf, Gaming, Traveling</li>
            </ul>
          </div>
        </section>
      </div>

      <hr />

      <footer className="footer">© 2024 Derrick Phan | All Rights Reserved</footer>
    </main>
  );
}
