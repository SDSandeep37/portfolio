import { useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav id="nav">
      <div className="wrapperBox">
        <ul className={menuOpen ? "menuShow" : "menuHidden"}>
          <li className="navList"><a href="./index.html">Home</a></li>
          <li className="navList"><a href="#about">About</a></li>
          <li className="navList"><a href="#projects">Projects</a></li>
          <li className="navList"><a href="#skills">Skills</a></li>
          <li className="navList"><a href="#contact">Contact</a></li>
        </ul>

        <div className="mobile">
          {!menuOpen && (
            <li className="mobileMenu">
              <button
                className="mobileMenuButtons"
                onClick={() => setMenuOpen(true)}
              >
                &#9776;
              </button>
            </li>
          )}
          {menuOpen && (
            <li className="mobileMenu">
              <button
                className="mobileMenuButtons"
                onClick={() => setMenuOpen(false)}
              >
                &#10005;
              </button>
            </li>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;