import React from "react";

import { NavLink as Link } from "react-router-dom";

import "./style.sass";

export default function Header() {
  return (
    <header>
      <nav className="container">
        <ul>
          <li>
            <Link exact to="/">
              Главная
            </Link>
          </li>
          <li>
            <Link to="/faculties">Факультеты</Link>
          </li>
          <li>
            <Link to="/about">О нас</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
