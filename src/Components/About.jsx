import React from 'react'
import './About.css'
import theme_pattern from '../assets/theme_pattern.svg'
import profile_img from "../assets/profile_img.jpg";
const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>Aspiring Software Engineer pursuing my MCA at MANIT Bhopal with a strong foundation in Backend Development, DBMS, and Data Structures & Algorithms.</p>
            <p>Experienced in building scalable MERN stack applications with RESTful APIs and JWT authentication alongside Machine Learning solutions using Python and Scikit-learn. Passionate about solving real-world problems through clean, impactful software.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About
