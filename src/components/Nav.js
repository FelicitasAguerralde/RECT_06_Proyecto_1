import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/Contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};
