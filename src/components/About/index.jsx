import React from 'react'
import "./About.css"
import {profile2} from '../../images'

const About = () => {
  return (
    <section id='about'>
      <div className='section_wrapper about_container'>
        <div className="me_container blur_effect">
          <div className="photo_container">
            <img src={profile2} alt=""/>
          </div>
        </div>
        <div className="section_header">
          <h2 className="primary_title">About Me</h2>
          <h1 className="title">I am <span className="color_primary">Neil Dsouza</span></h1>
          <p className="text_muted description">
          As an aspiring engineering student, I am dedicated to translating theoretical knowledge into practical solutions 
          for real-world challenges. With a keen focus on continuous learning, I aim to cultivate strong leadership skills 
          alongside my analytical and problem-solving capabilities. Eager to contribute to innovative projects, I aspire to 
          not only excel technically but also to lead and inspire collaborative efforts within engineering teams.
          </p>
        </div>
      </div>

    </section>
  )
}

export default About