import React from 'react'
import './Skills.css'
import theme_pattern from '../assets/theme_pattern.svg'

const skillGroups = [
  {
    category: 'Programming Languages',
    accent: 'amber',
    skills: ['C++', 'Java', 'Python', 'JavaScript'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    category: 'Frontend Development',
    accent: 'cyan',
    skills: ['HTML5', 'CSS3', 'React.js', 'Tailwind CSS'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    category: 'Backend & Databases',
    accent: 'teal',
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Authentication', 'MongoDB', 'SQL'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    category: 'Data & Analytics',
    accent: 'purple',
    skills: ['Power BI', 'Pandas', 'NumPy', 'Scikit-learn'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    category: 'Core Coursework',
    accent: 'pink',
    skills: ['Data Structures & Algorithms', 'Operating Systems', 'DBMS', 'Computer Networks'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    category: 'Tools & Collaboration',
    accent: 'orange',
    skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Postman'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
]

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <div className="skills-title">
        <h1>Technical Skills</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div key={group.category} className={`skill-card accent-${group.accent}`}>
            <div className="skill-card-header">
              <span className="skill-card-icon">{group.icon}</span>
              <h2>{group.category}</h2>
            </div>

            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span key={skill} className="skill-tag">
                  <span className="skill-dot" />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
