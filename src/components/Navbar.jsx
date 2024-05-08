import { useState } from "react";
import "../styles/navbar.css";
import logo from "../assets/images/logo.svg"
import menuIcon from "../assets/images/icon-menu.svg"
import closeMenuIcon from "../assets/images/icon-menu-close.svg"

let menu = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/",
    text: "News",
  },
  {
    href: "/",
    text: "Popular",
  },
  {
    href: "/",
    text: "Trending",
  },
  {
    href: "/",
    text: "Categories",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuBtn = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="News logo" className="logo" />
      {!menuOpen && (
        <button className="menu-btn" onClick={menuBtn}>
          <img src={menuIcon} alt="menu" />
        </button>
      )}
      {menuOpen && (
        <div className="list-container">
          <button className="close-menu" onClick={closeMenu}>
            <img src={closeMenuIcon} alt="close menu" />
          </button>
          <div className="overflow"></div>

          <ul className="list">
            {menu.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="link">
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="nav-desktop">
        <div className="list-container-desktop">
          <ul className="list-desktop">
            {menu.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="link">
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
