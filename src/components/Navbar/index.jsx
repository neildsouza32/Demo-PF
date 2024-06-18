import React, { useEffect, useState, useRef } from 'react';
import "./Navbar.css";
import { SiWebmoney } from "react-icons/si";
import { menu } from "../../data";
import { Link, animateScroll as scroll } from 'react-scroll';
import { FaBarsStaggered, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';
import gsap from 'gsap';

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [visible, setVisible] = useState(false);
  const container = useRef(null);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > 145) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (visible) {
      gsap.fromTo(
        container.current,
        {
          y: -250,
          width: '100%'
        },
        {
          y: 0,
          top: 0,
          zIndex: 100,
          position: 'fixed',
          duration: 0.5
        }
      );
    } else {
      gsap.to(container.current, {
        position: 'absolute',
        y: 0,
        top: 0,
        zIndex: 1,
        duration: 0.5
      });
    }
  }, [visible]);

  useEffect(() => {
    if (showSidebar) {
      gsap.from(".tab_item", {
        opacity: 0,
        stagger: 0.5,
        duration: 0.5,
        ease: "power1.inOut"
      });
    }
  }, [showSidebar]);

  return (
    <nav className={`navbar_container ${visible ? "visible" : ""}`} ref={container}>
      {showSidebar && (
        <div className='layout' onClick={() => setShowSidebar(!showSidebar)}></div>
      )}
      <div className='logo_container' onClick={() => scroll.scrollToTop({ duration: 500 })}>
        <SiWebmoney />
      </div>
      <div className={`tab_group ${showSidebar ? 'show' : ''}`}>
        <span className="icon_container close_btn" onClick={() => setShowSidebar(!showSidebar)}>
          <FaTimes />
        </span>
        {menu.map((list, index) => (
          <Link
            activeClass='active'
            className='tab_item name'
            to={list.name.toLowerCase()}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            key={index}
          >
            {list.name}
          </Link>
        ))}
      </div>
      <div className='nav_buttons_group'>
        <button className='btn btn_primary'> Hire Me <FaArrowUpRightFromSquare /></button>
        <FaBarsStaggered className="menu" onClick={() => setShowSidebar(!showSidebar)} />
      </div>
    </nav>
  );
};

export default Navbar;
