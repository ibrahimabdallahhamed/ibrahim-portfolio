import { NavLink } from "react-router-dom";
import { useState } from "react";

import ListIcon from "../../assets/list-solid-full.svg?react";
import "./Nav.css";
import navbarSelectionImg from "../../assets/Navbar-selection.png";
import darkSelectionImg from "../../assets/Dark-selection.png";

export default function Nav() {
  let [dark, setDark] = useState(true);
  let [isOpen, setIsOpen] = useState(false);
  function togglMode() {
    setDark(!dark);
    const theme = dark ? "dark" : "light";
    document.body.setAttribute("data-theme", theme);
  }
  function listHandle() {
    setIsOpen(!isOpen);

    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }
  return (
    <nav className="nav-bar">
      <section className="icon-name">
        <div className="code-icon"> {"</>"} </div>
        <h1>Ibrahim Abdallah</h1>
      </section>
      <section className={`nav-actions ${isOpen ? "active" : ""}`}>
        <div className="nav-links">
          <NavLink
            to="/home"
            className="link-active"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Home
          </NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>
            About
          </NavLink>
          <NavLink to="/projects" onClick={() => setIsOpen(false)}>
            Projects
          </NavLink>
        </div>
        <div className="nav-btn">
          <button className="toggle-mode" onClick={togglMode}>
            <img src={dark ? navbarSelectionImg : darkSelectionImg} />
          </button>
          <button className="hire-btn">Hire me</button>
        </div>
      </section>
      <button className="list-icon-btn" onClick={listHandle}>
        <ListIcon className="list-icon" />
      </button>
    </nav>
  );
}
