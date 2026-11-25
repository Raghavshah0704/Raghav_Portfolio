import React from "react";
import "./Hero.css";
import profile_img from "../assets/profile_img.jpg";

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <span className="hero-bg-code" aria-hidden="true">&lt;/&gt;</span>
        <h1 className="hero-name">Raghav Shah</h1>

        <div className="hero-roles">
          <p className="hero-role-main">Developer.</p>
          <p className="hero-role-sub">Full-Stack &amp; ML Developer.</p>
          <p className="hero-role-sub">
            Turns <span className="hero-teal">ideas</span> into scalable{" "}
            <span className="hero-teal">code.</span>
          </p>
        </div>

        <div className="hero-socials">
          <a href="mailto:raghavshah0704@gmail.com" className="hero-social-icon" aria-label="Email">
            <MailIcon />
          </a>
          <a
            href="https://github.com/Raghavshah0704"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-icon"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/raghav-shah-4952a7249/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-icon"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
        </div>

        <div className="hero-action">
          <a
            href="/Raghav_Shah_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-resume"
          >
            My Resume
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-avatar-wrap">
          <img src={profile_img} alt="Raghav Shah" className="hero-avatar" />
        </div>
        <p className="hero-bio">
          Aspiring Software Engineer pursuing my{" "}
          <span>MCA at MANIT Bhopal</span> with a strong foundation in{" "}
          <span>Backend Development</span> and{" "}
          <span>Data Structures &amp; Algorithms</span>. Experienced in building
          scalable <span>MERN stack</span> applications alongside{" "}
          <span>Machine Learning</span> solutions with{" "}
          <span>Python &amp; Scikit-learn</span>. Passionate about solving
          real-world problems with clean architecture and{" "}
          <span>modern web technologies</span>.
        </p>
      </div>
    </div>
  );
};

export default Hero;
