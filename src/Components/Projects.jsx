import React from 'react'
import './Projects.css'
import theme_pattern from '../assets/theme_pattern.svg'
import profile_img from '../assets/profile_img.jpg'

const projectsData = [
  {
    id: 'quickmeet',
    username: 'raghavshah0704',
    title: 'QuickMeet',
    date: '06/2026',
    description:
      'Full-stack real-time chat application built with the MERN stack, featuring JWT-secured RESTful APIs, Stream Chat API messaging and image sharing, React Query caching, and a responsive Tailwind CSS UI.',
    tech: 'React.js, Node.js, Express.js, MongoDB, React Query, Tailwind CSS, JWT, Stream Chat API',
    liveUrl: 'https://quickmeet-499k.onrender.com/login',
    githubUrl: 'https://github.com/Raghavshah0704/QuickMeet',
    previewType: 'quickmeet',
  },
  {
    id: 'url-detection',
    username: 'raghavshah0704',
    title: 'URL Authenticity Detection',
    date: '01/2026',
    description:
      'A real-time Chrome extension that protects users while browsing by scanning links and page behavior to warn against fake, phishing, and malicious websites in milliseconds—keeping online browsing safe without slowing it down.',
    tech: 'Python, Scikit-learn, Pandas, NumPy, JavaScript, Chrome Extensions API',
    liveUrl: '',
    githubUrl: 'https://github.com/Raghavshah0704/URLphishingDetection',
    previewType: 'url-detection',
  },
]

const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const ProjectPreview = ({ type }) => {
  if (type === 'quickmeet') {
    return (
      <div className="preview-mockup preview-quickmeet">
        <div className="qm-topbar">
          <div className="qm-brand">
            <span className="qm-dot" />
            <strong>QuickMeet</strong>
          </div>
          <div className="qm-pills">
            <span className="qm-pill">Stream Chat</span>
            <span className="qm-pill qm-pill-accent">Live</span>
          </div>
        </div>
        <div className="qm-body">
          <div className="qm-sidebar">
            <div className="qm-channel active"># general-chat</div>
            <div className="qm-channel"># dev-team</div>
            <div className="qm-channel"># image-share</div>
          </div>
          <div className="qm-chat">
            <div className="qm-msg qm-msg-left">Hey! Ready for the call?</div>
            <div className="qm-msg qm-msg-right">Yes, joining now via QuickMeet!</div>
            <div className="qm-msg qm-msg-left">Shared architecture_v2.png</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="preview-mockup preview-url">
      <div className="url-header">
        <span className="url-title">URL AUTHENTICITY DETECTOR</span>
        <span className="url-sub">Chrome Extension • ML Security</span>
      </div>
      <div className="url-scanner-box">
        <div className="url-bar">https://verify-account-login.example</div>
        <div className="url-metrics">
          <div className="url-stat">
            <span>86.69%</span>
            <small>Accuracy</small>
          </div>
          <div className="url-stat">
            <span>93.56%</span>
            <small>AUC-ROC</small>
          </div>
          <div className="url-stat">
            <span>&lt; 20ms</span>
            <small>Inference</small>
          </div>
        </div>
        <div className="url-status">Real-Time Phishing Alert Active</div>
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <div id="project" className="projects">
      <div className="projects-title">
        <h1>Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="projects-container">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-card-top">
              <div className="project-author">
                <img src={profile_img} alt={project.username} className="project-avatar" />
                <span>{project.username}</span>
              </div>

              <div className="project-links">
                {project.previewType === 'quickmeet' && (
                  <a
                    href={project.liveUrl || '#project'}
                    target={project.liveUrl ? '_blank' : undefined}
                    rel={project.liveUrl ? 'noopener noreferrer' : undefined}
                    className="project-icon-link external"
                    aria-label={`${project.title} live demo`}
                    onClick={!project.liveUrl ? (e) => e.preventDefault() : undefined}
                  >
                    <ExternalLinkIcon />
                  </a>
                )}
                <a
                  href={project.githubUrl || '#project'}
                  target={project.githubUrl ? '_blank' : undefined}
                  rel={project.githubUrl ? 'noopener noreferrer' : undefined}
                  className="project-icon-link github"
                  aria-label={`${project.title} GitHub repository`}
                  onClick={!project.githubUrl ? (e) => e.preventDefault() : undefined}
                >
                  <GitHubIcon />
                </a>
              </div>
            </div>

            <div className="project-preview">
              <ProjectPreview type={project.previewType} />
            </div>

            <div className="project-info">
              <div className="project-heading-row">
                <h2>{project.title}</h2>
                <span className="project-date">{project.date}</span>
              </div>
              <p className="project-description">{project.description}</p>
            </div>

            <div className="project-tech">
              <span className="tech-dot" />
              <p>{project.tech}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
