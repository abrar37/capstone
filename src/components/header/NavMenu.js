import React from "react";
import { NavLink } from "react-router-dom";

function NavMenu() {

  const navItems = [
    {
      title: "Home",
      url: "/",
      active: true,
    },
    {
      title: "About Us",
      url: "/about-us",
      active: false,
    },
    {
      title: "Blog",
      url: "/blog",
      active: false,
    }
  ];

  return (
    <>
      <nav className="desktop-menu">
        <ul>
          {navItems.map((item) => (
            <li>
              <NavLink 
                className={({isActive}) => `nav-item ${isActive? "active" : ""}`}
                to={item.url}
                key={item.title}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default NavMenu;
