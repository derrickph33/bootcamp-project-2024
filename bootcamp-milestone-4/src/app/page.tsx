import React from "react";
import Image from "next/image";

export default function Homepage() {
  return (
    <>
      <main className="px-5 pt-5 pb-5">
        <h1 className="text-5xl font-bold text-center mb-5">About Me</h1>
        <div className="about">
          <div className="about-image">
            <Image src="/images/akpsi.jpeg" alt="My Professional Headshot" width={500} height={500}/>
          </div>
          <div className="about-text">
          <p>
            Hello! My name is <strong>Derrick Phan</strong> and I am a <em>3rd year Computer Science major from Berkeley, CA studying at California Polytechnic State University, San Luis Obispo, planning on graduating in 2026.</em> I am an aspiring Software Engineer who loves to build websites and applications that can help people or be used by others! Additionally, I am looking to build on my software engineering experience and expand my technical skillsets through more new software projects and experiences.
          </p>
          <p>
            Previously, I have had work experience as an Area Manager Intern at Amazon, and as a Math Tutor at Mathnasium Learning Center. On campus, I am involved with Alpha Kappa Psi, a professional co-ed business Fraternity, where I am the Director of Brotherhood. I am also the current President of the Cal Poly Club Table Tennis team, as well as a Developer in Hack4Impact, and I also am involved with in Nikkei Student Union and SLOHacks. Lastly, I work for Cal Poly&apos;s Bailey College of Science and Math as a Web Development Intern!
          </p>
          <p>
            In my free time, I enjoy playing sports such as Table Tennis, Golf, and Basketball. I also enjoy lifting weights, playing video games, going out to try new foods and drinks, and hanging out with my friends and family.
          </p>
          </div>
        </div>
      </main>
      <hr />

      <footer className="footer">© 2024 Derrick Phan | All Rights Reserved</footer>
    </>
  );
}

