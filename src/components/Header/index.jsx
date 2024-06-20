import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import "./Header.css";
import { profile1 } from "../../images"; // Adjust the path to your image
import Facts from './Facts';

const Header = () => {
  const container = useRef(null);

  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".profile_photo_container", {
        scale: 0.5,
        opacity: 0.5,
      }, {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "sine.in",
        onComplete: () => {
          // Start the Odometer animation when the GSAP animation is complete
          setExperience(2);
          setProjects(5);
          setClients(20);
        }
      });

      gsap.from(".intro_text", {
        fontSize: 100,
        duration: 1,
        delay: 1,
        ease: "sine.in",
      });

      const timeline = gsap.timeline();
      timeline
        .from(".header_info_top", {
          opacity: 0,
          duration: 0.5,
        })
        .from(".header_title", {
          opacity: 0,
          duration: 0.5,
        })
        .from(".header_description", {
          opacity: 0,
          duration: 0.5,
        });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <header id='header' className='blur-effect' ref={container}>
      <div className="stroke_text intro_text">HELLO</div>
      <div className="section_wrapper header_container">
        <div className="column intro_container blur-effect">
          <div className="header_info">
            <div className="header_info_top">
              Hello There! I am <span className="color_primary">Neil Dsouza</span>
            </div>
            <div className="header_info_middle">
              <h1 className="primary_title header_title">I'M A WEB DEVELOPER</h1>
              <p className="text_muted header_description">
                I am an IT student pursuing B.E. in Information Technology from FCRIT, Vashi.
              </p>
            </div>
            <Facts experience={experience} projects={projects} clients={clients} />
            <div className="header_info_bottom">
              <a href="https://drive.google.com/file/d/1e5xnBSdwx_TBd0ZLyyhoYCdtRaxsy5pd" className="btn" >Download CV</a>
              <a href="mailto:neiladsouza32@gmail.com" className="btn">Email Me</a>
            </div>
          </div>
        </div>
        <div className='column profile_wrapper'>
          <div className="profile_photo_container">
            <img src={profile1} alt="Profile" className="profile_photo" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
