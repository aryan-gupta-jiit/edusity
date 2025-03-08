import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";

import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  const navRef = useRef(null);
  const menuRef = useRef(null);

  const toggleMenu = (e) => {
    menuRef.current.classList.toggle("hide-mobile-menu");
  };

  useEffect(() => {
    const navCallback = (entries) => {
      let [entry] = entries;

      setSticky(!entry.isIntersecting);
    };

    const navObserver = new IntersectionObserver(navCallback, {
      root: null,
      threshold: 0.9,
    });

    navObserver.observe(document.querySelector(".hero"));

    () => {
      navObserver.disconnect();
    };
  }, []);

  return (
    <nav className={`container ${sticky ? "dark-nav" : " "}`} ref={navRef}>
      <img src={logo} alt="" className="logo" />
      <ul className="hide-mobile-menu" ref={menuRef}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="programs" smooth={true} offset={-250} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={0} duration={500}>
            About us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={0} duration={500}>
            Compus
          </Link>
        </li>
        <li>
          <Link to="testimoials" smooth={true} offset={0} duration={500}>
            Testimoials
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={0}
            duration={500}
            className="btn"
          >
            Contact us
          </Link>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;